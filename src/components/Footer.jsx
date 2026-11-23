import { profile, services } from "../data.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <button className="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
      <div className="container footer-grid">
        <div>
          <a className="logo" href="#home" style={{ color: "var(--text)" }}>{profile.firstName}.<span style={{ color: "#d2ad36" }}>.</span></a>
          <p style={{ marginTop: 12 }}>Full-Stack Developer — building modern, scalable web applications from Vehari, Pakistan.</p>
          <div className="socials" style={{ marginTop: 18 }}>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">💻</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">💼</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
            <a href={`mailto:${profile.email}`} aria-label="Email">✉️</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}
            <li><a href="#services">Full-Stack Development</a></li>
          </ul>
        </div>
      </div>
      <div className="container">
        <p className="copyright">© {year} Muhammad Waseem Akram. All rights reserved. · {profile.location}</p>
      </div>
    </footer>
  );
}
