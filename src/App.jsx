import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Services from "./components/Services.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function Reveal({ children }) {
  return <div className="reveal">{children}</div>;
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("waseem-theme") || "dark");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("waseem-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
      setShowTop(el.scrollTop > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <Reveal><About /></Reveal>
        <Reveal><Education /></Reveal>
        <Reveal><Experience /></Reveal>
        <Reveal><Skills /></Reveal>
        <Reveal><Projects /></Reveal>
        <Reveal><Services /></Reveal>
        <Reveal><Reviews /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
      {showTop && (
        <button className="back-top-fixed" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
      )}
    </>
  );
}
