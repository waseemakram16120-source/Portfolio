import { useState } from "react";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [form, setForm] = useState({ name: "", role: "", text: "", stars: 5 });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const next = [...reviews, { ...form, name: form.name.trim(), role: form.role.trim() || "Visitor" }];
    setReviews(next);
    setIndex(next.length - 1);
    setForm({ name: "", role: "", text: "", stars: 5 });
  };

  const current = reviews[index];
  return (
    <section className="alt" id="reviews">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Testimonials</p>
          <h2>Client Reviews</h2>
        </div>
        {reviews.length === 0 ? (
          <p className="review-empty" style={{ textAlign: "center" }}>
            No reviews yet — this section starts empty on purpose. No testimonials have been invented.
            If you have worked with Waseem, be the first to leave one below.
          </p>
        ) : (
          <>
            <div className="review-card">
              <div className="quote">“</div>
              <div className="stars">{"★".repeat(current.stars)}{"☆".repeat(5 - current.stars)}</div>
              <blockquote>{current.text}</blockquote>
              <div className="review-who">
                <span className="avatar">{current.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
                <div>
                  <div className="name">{current.name}</div>
                  <div className="role">{current.role}</div>
                </div>
              </div>
            </div>
            <div className="review-dots">
              {reviews.map((_, i) => (
                <button key={i} className={i === index ? "active" : ""} aria-label={`Review ${i + 1}`} onClick={() => setIndex(i)} />
              ))}
            </div>
          </>
        )}
        <form className="review-form" onSubmit={submit}>
          <h3>✍️ Write a Review</h3>
          <div className="form-row">
            <div className="field">
              <label htmlFor="rev-name">Your Name *</label>
              <input id="rev-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div className="field">
              <label htmlFor="rev-role">Your Role</label>
              <input id="rev-role" placeholder="e.g. Client, Teacher" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
            </div>
          </div>
          <div className="form-row">
            <div className="field">
              <label htmlFor="rev-stars">Rating</label>
              <select id="rev-stars" value={form.stars} onChange={(e) => setForm({ ...form, stars: Number(e.target.value) })}>
                {[5, 4, 3, 2, 1].map((n) => <option key={n} value={n}>{n} star{n > 1 ? "s" : ""}</option>)}
              </select>
            </div>
          </div>
          <div className="field">
            <label htmlFor="rev-text">Your Review *</label>
            <textarea id="rev-text" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} required />
          </div>
          <button className="btn btn-gold" type="submit" style={{ width: "100%", justifyContent: "center" }}>Post Review</button>
          <p className="form-note">Reviews are added for this session only — the page is static and does not store them.</p>
        </form>
      </div>
    </section>
  );
}
