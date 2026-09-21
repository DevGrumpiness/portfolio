import { spawn, type ChildProcess } from "node:child_process";
import path from "node:path";
import { chromium, type Browser } from "playwright";

const port = Number(process.env.PORT ?? 3100);
const baseUrl = process.env.SMOKE_BASE_URL ?? `http://127.0.0.1:${port}`;

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

async function canReach(url: string) {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(url: string) {
  const deadline = Date.now() + 45_000;

  while (Date.now() < deadline) {
    if (await canReach(url)) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  throw new Error(`Timed out waiting for ${url}`);
}

function startServer() {
  const nextBin = path.join(
    process.cwd(),
    "node_modules",
    "next",
    "dist",
    "bin",
    "next",
  );

  const child = spawn(
    process.execPath,
    [nextBin, "start", "--hostname", "127.0.0.1", "--port", String(port)],
    {
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  child.stdout.on("data", (chunk) => process.stdout.write(chunk));
  child.stderr.on("data", (chunk) => process.stderr.write(chunk));

  return child;
}

async function checkMetadataRoutes() {
  const [robots, sitemap] = await Promise.all([
    fetch(`${baseUrl}/robots.txt`).then((response) => response.text()),
    fetch(`${baseUrl}/sitemap.xml`).then((response) => response.text()),
  ]);

  assert(
    robots.includes("https://vazquez.beer/sitemap.xml"),
    "robots.txt does not reference the production sitemap URL",
  );
  assert(
    sitemap.includes("https://vazquez.beer"),
    "sitemap.xml does not reference the production domain",
  );
  assert(
    !`${robots}\n${sitemap}`.includes("example.com"),
    "metadata routes still reference example.com",
  );
}

async function checkHomePage(browser: Browser) {
  const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
  const pageErrors: string[] = [];

  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(baseUrl, { waitUntil: "networkidle" });

  await page
    .getByRole("heading", { name: /Web Developer building/i })
    .waitFor();

  for (const id of ["home", "casa-ai", "projects", "relaunch", "stack", "experience", "ai-data", "contact"]) {
    assert(await page.locator(`#${id}`).count(), `Missing #${id} section`);
  }

  assert(
    await page.locator('a[href="https://vazquez.beer"]').count() === 0,
    "Production domain should not be rendered as a stray page link",
  );

  await page.locator(".lang-toggle").click();
  await page
    .getByRole("heading", { name: /Webentwickler für produktionsreife/i })
    .waitFor();
  assert(
    await page.locator("html").getAttribute("lang") === "de",
    "Language toggle did not update the html lang attribute",
  );

  assert(pageErrors.length === 0, `Page errors: ${pageErrors.join("; ")}`);
  await page.close();
}

async function main() {
  let server: ChildProcess | undefined;
  let browser: Browser | undefined;

  try {
    if (!process.env.SMOKE_BASE_URL) {
      server = startServer();
    }

    await waitForServer(baseUrl);

    browser = await chromium.launch();
    await checkHomePage(browser);
    await checkMetadataRoutes();

    console.log("\nSmoke tests passed.");
  } finally {
    await browser?.close();
    server?.kill();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
