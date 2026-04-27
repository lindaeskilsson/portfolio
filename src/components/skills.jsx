// 100% kompatibla ikoner från react-icons
import {
  SiSpring,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiTailwindcss,
  SiCss,
  SiIntellijidea,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { FaDatabase, FaCogs, FaUser, FaUsers, FaClock, FaTools, FaStar, FaShieldAlt, FaNetworkWired, FaCoffee } from "react-icons/fa";

import { VscCode } from "react-icons/vsc";

const tech = [
  { name: "Java", Icon: FaCoffee },
  { name: "Spring Boot", Icon: SiSpring },
  { name: "REST APIs", Icon: FaCogs },
  { name: "HTTP", Icon: FaNetworkWired },
  { name: "JPA / Hibernate", Icon: FaDatabase },

  { name: "React", Icon: SiReact },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss },

  { name: "SQL (MySQL)", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },

  { name: "Spring Security/JWT", Icon: FaShieldAlt },

];

const tools = [
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", Icon: SiDocker },
  { name: "Maven", Icon: FaCogs },
  { name: "IntelliJ IDEA", Icon: SiIntellijidea },
  { name: "VS Code", Icon: VscCode },
  { name: "Postman", Icon: SiPostman },
  { name: "Figma", Icon: SiFigma },
];


const softskills = [
  { name: "User-focused", Icon: FaUser },
  { name: "Team player", Icon: FaUsers },
  { name: "Structured", Icon: FaClock },
  { name: "Problem solver", Icon: FaTools },
  { name: "Curious & learning", Icon: FaStar },
];

function Card({ Icon, name, color = "var(--orange)" }) {
  const hasValidIcon = typeof Icon === "function";

  return (
    <div className="skill-card">
      {hasValidIcon ? (
        <Icon
          className="skill-card__icon"
          aria-hidden="true"
          size={22}
          style={{ color, flexShrink: 0 }}
        />
      ) : (
        <div
          className="skill-card__icon skill-card__icon--fallback"
          aria-hidden="true"
          style={{ color }}
        >
          ●
        </div>
      )}

      <div className="skill-card__label">{name}</div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <h2>Tech stack</h2>
        <div className="skills-grid">
          {tech.map((s) => (
            <Card key={s.name} Icon={s.Icon} name={s.name} />
          ))}
        </div>

        <h2>Tools & platforms</h2>
        <div className="skills-grid">
          {tools.map((s) => (
            <Card key={s.name} Icon={s.Icon} name={s.name} />
          ))}
        </div>

        <h2>Soft skills</h2>
        <div className="skills-grid">
          {softskills.map((s) => (
            <Card key={s.name} Icon={s.Icon} name={s.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
