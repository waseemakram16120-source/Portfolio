import { useState } from "react";
import { profile } from "../data.js";
import { downloadResume } from "../utils/resume.js";

const LINKS = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Services", "#services"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="logo" href="#home">
          {profile.firstName}.<span>.</span>
        </a>
        <button className="menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
        <nav>
          <ul className={`nav-links${open ? " open" : ""}`}>
            {LINKS.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button className="theme-btn" aria-label="Toggle theme" onClick={onToggleTheme}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button className="btn btn-white btn-sm" onClick={downloadResume}>Resume</button>
          <a className="btn btn-gold btn-sm" href="#contact">Hire Me</a>
        </div>
      </div>
    </header>
  );
}
