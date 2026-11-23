import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Waseem,\n\n${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Get in Touch</p>
          <h2>Contact Me</h2>
        </div>
        <div className="contact-grid">
          <div className="info-card">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any project inquiries, collaborations, or just to say hi!</p>
            <div className="info-row">
              <span className="info-icon">✉️</span>
              <div><b>Email</b><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
            </div>
            <div className="info-row">
              <span className="info-icon">📱</span>
              <div><b>Phone &amp; WhatsApp</b><a href={`tel:${profile.phoneRaw}`}>{profile.phone}</a></div>
            </div>
            <div className="info-row">
              <span className="info-icon">📍</span>
              <div><b>Location</b><span>{profile.location}</span></div>
            </div>
            <div className="info-row">
              <span className="info-icon">💼</span>
              <div><b>LinkedIn</b><a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/waseem-akram-88a301354</a></div>
            </div>
            <div className="info-row">
              <span className="info-icon">💻</span>
              <div><b>GitHub</b><a href={profile.github} target="_blank" rel="noreferrer">github.com/waseemakram16120-source</a></div>
            </div>
          </div>
          <form className="form-card" onSubmit={submit}>
            <h3>Send a Message</h3>
            <div className="form-row">
              <div className="field">
                <label htmlFor="c-name">Your Name</label>
                <input id="c-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="field">
                <label htmlFor="c-email">Your Email</label>
                <input id="c-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-subject">Subject</label>
              <input id="c-subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="c-message">Message</label>
              <textarea id="c-message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            </div>
            <button className="btn btn-gold" type="submit" style={{ width: "100%", justifyContent: "center" }}>✈️ Send Message</button>
            <p className="form-note">Sending opens your email app addressed to {profile.email} — no backend is used.</p>
          </form>
        </div>
        <div className="map-wrap">
          <iframe
            title="Map — Vehari, Pakistan"
            src="https://www.google.com/maps?q=Vehari,Pakistan&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
