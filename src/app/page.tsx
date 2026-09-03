import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { ProtectedWork } from "@/components/ProtectedWork";
import { Experience } from "@/components/Experience";
import { Technologies } from "@/components/Technologies";
import { Certifications } from "@/components/Certifications";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <ProtectedWork />
        <Experience />
        <Technologies />
        <Certifications />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
