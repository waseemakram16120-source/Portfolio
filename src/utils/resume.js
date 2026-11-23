import { profile, education, experience, projects, skillGroups } from "../data.js";

export function buildResumeText() {
  const lines = [
    profile.name,
    `${profile.role} · ${profile.university}`,
    `Reg No: ${profile.regNo}`,
    "",
    `Email: ${profile.email}`,
    `Phone / WhatsApp: ${profile.phone}`,
    `Location: ${profile.location}`,
    `GitHub: ${profile.github}`,
    `LinkedIn: ${profile.linkedin}`,
    "",
    "EDUCATION",
    ...education.map((e) => `- ${e.title} (${e.period}) — ${e.institution} — ${e.detail}`),
    "",
    "EXPERIENCE",
    ...experience.map((j) => `- ${j.role}, ${j.org} (${j.period}) — ${j.responsibilities.join(", ")}`),
    "",
    "PROJECTS",
    ...projects.map((p) => `- ${p.title} — ${p.description}${p.live ? ` Live: ${p.live}` : ""} Code: ${p.code}`),
    "",
    "SKILLS (self-assessed)",
    ...skillGroups.flatMap((g) => [`${g.title}:`, ...g.skills.map((s) => `  - ${s.name}: ${s.level}%`)]),
    "",
    "SERVICES",
    "- Full-Stack Web Development",
    "- UI/UX & Web Design",
    "- AI Integration (Gemini)",
  ];
  return lines.join("\n");
}

export function downloadResume() {
  const blob = new Blob([buildResumeText()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Waseem-Akram-Resume.txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
