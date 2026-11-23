import { useState } from "react";
import { projects } from "../data.js";

const INITIALS = { CadetToCSP: "C", MathQuest: "M", EventFlow: "E", "AI Mock Interview Coach": "AI", doctorhub: "D" };

export default function Projects() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const filtered = projects.filter((p) =>
    !q || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) ||
    p.tech.some((t) => t.toLowerCase().includes(q))
  );
  return (
    <section className="alt" id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">My Portfolio</p>
          <h2>Featured Projects</h2>
          <p>Real projects from my GitHub — search by name or technology.</p>
        </div>
        <div className="search-box">
          <span>🔍</span>
          <input
            type="search" placeholder="Search projects… (try “math” or “React”)"
            value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search projects"
          />
        </div>
        <div className="projects-grid">
          {filtered.length === 0 && (
            <p className="no-results">No projects match “{query}”. Try another search.</p>
          )}
          {filtered.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-banner">
                <span className="lang">{p.language}</span>
                {INITIALS[p.title] || "💻"}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-meta">📅 {p.year} &nbsp;·&nbsp; {p.tech.join(" · ")}</div>
                <div className="project-actions">
                  <a className="btn btn-outline btn-sm" href={p.code} target="_blank" rel="noreferrer">⌨️ Code</a>
                  {p.live
                    ? <a className="btn btn-gold btn-sm" href={p.live} target="_blank" rel="noreferrer">🔗 Live</a>
                    : <span className="btn btn-sm" style={{ background: "var(--card2)", color: "var(--muted)", cursor: "default" }}>Live coming soon</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
