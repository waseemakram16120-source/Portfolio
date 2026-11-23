import { experience } from "../data.js";

export default function Experience() {
  return (
    <section className="alt" id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Professional Work</p>
          <h2>Experience</h2>
        </div>
        <div className="exp-grid">
          {experience.map((job) => (
            <article className="exp-card" key={job.org}>
              <h3>{job.role}</h3>
              <p className="org">{job.org}</p>
              <span className="date-pill">{job.period}</span>
              <h4>Responsibilities</h4>
              <div className="tags">
                {job.responsibilities.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              <a className="visit-link" href={job.link} target="_blank" rel="noreferrer">Visit Website →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
