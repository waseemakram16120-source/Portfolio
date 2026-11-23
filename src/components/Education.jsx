import { education } from "../data.js";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Academic Journey</p>
          <h2>Education</h2>
        </div>
        <div className="timeline">
          {education.map((e) => (
            <div className="timeline-item" key={e.title}>
              <div className="timeline-card">
                <span className="date-pill">{e.period}</span>
                <h3>{e.title}</h3>
                <p className="inst">{e.institution}</p>
                <p>🎓 {e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
