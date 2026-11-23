import { profile } from "../data.js";
import profileImg from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="alt" id="about">
      <div className="container about-grid">
        <div className="about-photo">
          <img src={profileImg} alt="Muhammad Waseem Akram at work" />
          <div className="about-count"><strong>5+</strong><span>Projects Built</span></div>
        </div>
        <div className="about-text">
          <p className="eyebrow">About Me</p>
          <h2>Professional Bio</h2>
          <p>{profile.bio1}</p>
          <p>{profile.bio2}</p>
          <div className="mini-cards">
            <div className="mini-card">
              <span className="icon">🎯</span>
              <h3>Mission</h3>
              <p>{profile.mission}</p>
            </div>
            <div className="mini-card">
              <span className="icon">👁️</span>
              <h3>Vision</h3>
              <p>{profile.vision}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
