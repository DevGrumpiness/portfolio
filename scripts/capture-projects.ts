/**
 * Captures real screenshots of the public projects listed in
 * src/data/projects.ts and stores them as optimised WebP files in
 * public/projects/. Run with: npm run screenshots
 *
 * If a page cannot be reached (no network access, blocked automation,
 * auth wall, etc.) the script leaves a tasteful placeholder in place and
 * records the failure in SCREENSHOTS_NEEDED.md instead of inventing an image.
 */
import { chromium, type Browser } from "playwright";
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

interface Target {
  name: string;
  url: string;
  desktopFile: string;
  mobileFile: string;
}

const targets: Target[] = [
  {
    name: "Casa Vazquez",
    url: "https://menu.casavazquez.de",
    desktopFile: "casa-vazquez.webp",
    mobileFile: "casa-vazquez-mobile.webp",
  },
  {
    name: "Münster Quiz",
    url: "https://ms-game.de",
    desktopFile: "muenster-quiz.webp",
    mobileFile: "muenster-quiz-mobile.webp",
  },
];

const outputDir = path.join(process.cwd(), "public", "projects");
const failures: { name: string; url: string; files: string[]; reason: string }[] = [];

async function capture(browser: Browser, target: Target) {
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  try {
    const desktopPage = await desktopContext.newPage();
    await desktopPage.goto(target.url, { waitUntil: "networkidle", timeout: 30000 });
    await desktopPage.waitForTimeout(1200);
    const desktopBuffer = await desktopPage.screenshot({ type: "png" });
    await sharp(desktopBuffer)
      .resize({ width: 1440 })
      .webp({ quality: 82 })
      .toFile(path.join(outputDir, target.desktopFile));

    const mobilePage = await mobileContext.newPage();
    await mobilePage.goto(target.url, { waitUntil: "networkidle", timeout: 30000 });
    await mobilePage.waitForTimeout(1200);
    const mobileBuffer = await mobilePage.screenshot({ type: "png" });
    await sharp(mobileBuffer)
      .resize({ width: 780 })
      .webp({ quality: 82 })
      .toFile(path.join(outputDir, target.mobileFile));

    console.log(`✔ Captured ${target.name}`);
  } catch (error) {
    failures.push({
      name: target.name,
      url: target.url,
      files: [target.desktopFile, target.mobileFile],
      reason: error instanceof Error ? error.message : String(error),
    });
    console.warn(`✘ Failed to capture ${target.name}: ${String(error)}`);
  } finally {
    await desktopContext.close();
    await mobileContext.close();
  }
}

async function writeScreenshotsNeeded() {
  if (failures.length === 0) return;

  const lines = [
    "# Screenshots needed",
    "",
    "Automated screenshot capture could not reach the following pages",
    "(no network access in this environment, the site blocked automation,",
    "or it requires authentication). Placeholders are in place — replace",
    "them with real screenshots using the exact filenames below.",
    "",
    ...failures.flatMap((f) => [
      `## ${f.name}`,
      `- URL: ${f.url}`,
      `- Reason: ${f.reason}`,
      `- Files to replace:`,
      ...f.files.map(
        (file) => `  - \`public/projects/${file}\` (${file.includes("mobile") ? "780×1690" : "1440×900"} recommended)`,
      ),
      "",
    ]),
  ];

  await writeFile(path.join(process.cwd(), "SCREENSHOTS_NEEDED.md"), lines.join("\n"));
  console.log("\nWrote SCREENSHOTS_NEEDED.md with manual capture instructions.");
}

async function main() {
  await mkdir(outputDir, { recursive: true });
  const browser = await chromium.launch();
  try {
    for (const target of targets) {
      await capture(browser, target);
    }
  } finally {
    await browser.close();
  }
  await writeScreenshotsNeeded();

  if (failures.length > 0) {
    console.log(`\n${failures.length} of ${targets.length} screenshot(s) require manual capture.`);
    process.exitCode = 0;
  } else {
    console.log("\nAll screenshots captured successfully.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
