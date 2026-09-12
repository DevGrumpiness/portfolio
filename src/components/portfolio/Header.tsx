import Arrow from "./Arrow";

export default function Header() {
  return (
    <header className="top-nav">
      <a className="brand" href="#home" aria-label="Back to top">
        José Vazquez
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#ai-data">AI & Data</a>
      </nav>
      <a className="nav-cta" href="#contact">
        Contact <Arrow />
      </a>
    </header>
  );
}
