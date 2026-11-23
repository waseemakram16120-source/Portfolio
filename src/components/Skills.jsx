import { useEffect, useRef, useState } from "react";
import { skillGroups, otherSkills } from "../data.js";

export default function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <section id="skills">
      <div className="container" ref={ref}>
        <div className="section-head">
          <p className="eyebrow">My Expertise</p>
          <h2>Technical Skills</h2>
          <p>Self-assessed proficiency — the numbers below are my own honest estimate, not a test score.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <span className="icon">{group.icon}</span>
              <h3>{group.title}</h3>
              {group.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <div className="label"><b>{s.name}</b><span>{s.level}%</span></div>
                  <div className="bar"><i style={{ width: visible ? `${s.level}%` : "0%" }} /></div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="other-skills">
          <h4>Other Programming &amp; Digital Skills</h4>
          <div className="tags">
            {otherSkills.map((s) => <span className="tag" key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
