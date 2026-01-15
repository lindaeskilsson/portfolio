
import {
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiMysql,
  SiMongodb,
SiJetbrains,
  SiGit,
  SiGithub,
  SiDocker,
} from "react-icons/si";

import {
  HiOutlineUserGroup,
  HiOutlineChatBubbleLeftRight,
  HiOutlineLightBulb,
  HiOutlineArrowsRightLeft,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineWrenchScrewdriver,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineFaceSmile,
} from "react-icons/hi2";

const tech = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "React", Icon: SiReact },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Java", Icon: null }, // ❌ ingen ikon
  { name: "SQL (MySQL)", Icon: SiMysql },
  { name: "NoSQL (MongoDB)", Icon: SiMongodb },
];

const tools = [
  { name: "VS Code", Icon: null },
  { name: "IntelliJ", Icon: SiJetbrains }, // ❌ ingen ikon
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", Icon: SiDocker },
];

const softskills = [
  { name: "Team player", Icon: HiOutlineUserGroup },
  { name: "Good listener", Icon: HiOutlineChatBubbleLeftRight },
  { name: "Problem-solver", Icon: HiOutlineWrenchScrewdriver },
  { name: "Adaptable", Icon: HiOutlineArrowsRightLeft },
  { name: "Structured", Icon: HiOutlineClock },
  { name: "Creative", Icon: HiOutlineLightBulb },
  { name: "Warm & professional", Icon: HiOutlineHeart },
  { name: "Positive energy", Icon: HiOutlineSparkles },
  { name: "Calm under pressure", Icon: HiOutlineShieldCheck },
  { name: "Kind and funny", Icon: HiOutlineFaceSmile },
];


function Card({ Icon, name }) {
  return (
    <div className="skill-card">
      {Icon ? (
        <Icon className="skill-card__icon" aria-hidden="true" />
      ) : (
        <div className="skill-card__icon skill-card__icon--fallback" aria-hidden="true">
          {/* enkel fallback-symbol */}
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
