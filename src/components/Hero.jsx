import { useEffect, useRef, useState } from "react";
import { profile } from "../data.js";
import profileImg from "../assets/profile.jpg";

const ROLES = ["Full-Stack Developer", "React Developer", "MERN Stack Developer", "AI-Powered Web Developer"];

function useTyping() {
  const [text, setText] = useState("");
  useEffect(() => {
    let role = 0, char = 0, deleting = false, timer;
    const tick = () => {
      const current = ROLES[role];
      if (!deleting) {
        char += 1;
        setText(current.slice(0, char));
        if (char === current.length) { deleting = true; timer = setTimeout(tick, 1800); return; }
        timer = setTimeout(tick, 70);
      } else {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) { deleting = false; role = (role + 1) % ROLES.length; timer = setTimeout(tick, 400); return; }
        timer = setTimeout(tick, 35);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, w, h;
    const dots = Array.from({ length: 55 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006, vy: (Math.random() - 0.5) * 0.0006,
    }));
    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > 1) d.vx *= -1;
        if (d.y < 0 || d.y > 1) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x * w, d.y * h, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(210, 173, 54, 0.7)";
        ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = (dots[i].x - dots[j].x) * w, dy = (dots[i].y - dots[j].y) * h;
          const dist = Math.hypot(dx, dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x * w, dots[i].y * h);
            ctx.lineTo(dots[j].x * w, dots[j].y * h);
            ctx.strokeStyle = `rgba(210, 173, 54, ${0.25 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden="true" />;
}

export default function Hero() {
  const typed = useTyping();
  return (
    <section className="hero" id="home">
      <Particles />
      <div className="container hero-inner">
        <div>
          <span className="hero-badge">🎓 Final Year — BSCS</span>
          <h1>Hi, I&apos;m<br /><span className="gold">{profile.name}</span></h1>
          <h2>I am a <span className="typed">{typed}</span><span className="cursor" /></h2>
          <p>{profile.tagline}</p>
          <div className="hero-cta">
            <a className="btn btn-gold" href="#projects">View Projects</a>
            <a className="btn btn-outline" href="#contact">Contact Me</a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" /></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" /></svg>
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">💬</a>
            <a href={`mailto:${profile.email}`} aria-label="Email">✉️</a>
          </div>
        </div>
        <div className="hero-photo">
          <img src={profileImg} alt="Muhammad Waseem Akram" />
          <span className="float-badge left">💻 MERN Stack</span>
          <span className="float-badge right">🎨 UI/UX Design</span>
        </div>
      </div>
    </section>
  );
}
