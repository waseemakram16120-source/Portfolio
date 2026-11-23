import { services } from "../data.js";

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What I Do</p>
          <h2>Services</h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
