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
} from "react-icons/si";

import { FaDatabase, FaCogs, FaPuzzlePiece, FaUser, FaUsers, FaClock, FaTools, FaStar } from "react-icons/fa";

import { VscCode } from "react-icons/vsc";

const tech = [
  { name: "Java", Icon: null },
  { name: "Spring Boot", Icon: SiSpring },
  { name: "REST APIs", Icon: FaCogs },
  { name: "HTTP", Icon: FaCogs },
  { name: "JPA / Hibernate", Icon: FaDatabase },

  { name: "React", Icon: SiReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: null },

  { name: "SQL (MySQL)", Icon: SiMysql },
  { name: "MongoDB", Icon: SiMongodb },
];

const tools = [
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", Icon: SiDocker },
  { name: "Maven", Icon: FaCogs },
  { name: "IntelliJ IDEA", Icon: FaCogs },
  { name: "VS Code", Icon: VscCode },
];

const concepts = [
  { name: "DTO & Mapper", Icon: FaCogs },
  { name: "CRUD", Icon: FaDatabase },
  { name: "Layered Architecture", Icon: FaCogs },
  { name: "Separation of Concerns", Icon: FaPuzzlePiece },
  { name: "TDD (basics)", Icon: FaCogs },
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

        <h2>Concepts</h2>
        <div className="skills-grid">
          {concepts.map((s) => (
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
