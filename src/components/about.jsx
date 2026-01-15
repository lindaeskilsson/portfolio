import React from "react";

const timelineItems = [
  // JOBB
  {
    type: "work",
    year: "2016 – 2021",
    title: "Servitris / receptionist / lokalvård",
    company: "Funäsdalen Berg & Hotell",
    text:
      "Var en närvarande och positiv person i teamet för att skapa en varm gästupplevelse. Tog ansvar i skiftet och ställde upp för kollegor → bättre flyt och lugnare tempo.",
  },
  {
    type: "work",
    year: "2021 – 2023",
    title: "Serveringspersonal",
    company: "Copperhill Mountain Lodge",
    text:
      "Levererade service med detaljfokus för att skapa en jämn och proffsig upplevelse. Hoppade in där det behövdes → smidigare flöden under högt tryck.",
  },
  {
    type: "work",
    year: "2023 – 2025",
    title: "Platschef & webbadministratör",
    company: "JumpYard Åre",
    text:
      "Skapade tydligare rutiner och planering för att få stabilt arbetstempo. Gjorde kundinfo enklare att hitta och förstå → färre frågor och snabbare service.",
  },
  {
    type: "work",
    year: "Pågående",
    title: "Extraresurs",
    company: "Fjellservice",
    text:
      "Stöttar i drift och tar det som behövs för att avlasta teamet → lugnare arbetsflöde och bättre flyt.",
  },
  {
    type: "work",
    year: "Pågående",
    title: "Extraresurs",
    company: "PostNord",
    text:
      "Bidrar med struktur och pålitlighet för att hålla tempo och ordning även när belastningen är hög.",
  },

  // UTBILDNING
  {
    type: "edu",
    year: "Tidigare",
    title: "Samhälle, medier, kommunikation & information",
    company: "Wargentin",
    bullets: ["Kommunikation", "Medieproduktion", "Analys & presentation"],
  },
  {
    type: "edu",
    year: "2020 – 2023",
    title: "Webbredaktör (Informationsarkitekt & Frontend)",
    company: "Högskolan Borås",
    bullets: [
      "HTML, CSS, JavaScript, React",
      "SEO & innehållsstrategi",
      "CMS & publicering",
      "Testproduktion / kvalitet",
      "Medieproduktion",
    ],
  },
  {
    type: "edu",
    year: "Pågående (examen 2027)",
    title: "Fullstackutveckling",
    company: "IT-Högskolan",
    bullets: ["Java, Spring", "SQL", "REST API & testning", "DevOps-grunder"],
  },
];

export default function AboutPage() {
  return (
    <section className="aboutPage" id="about" aria-labelledby="aboutPage-title">
      <div className="aboutPage-inner">
        {/* ABOUT HEADER */}
        <header className="aboutHeader">
          <h2 className="aboutTitle" id="aboutPage-title">About Me</h2>

          <p className="aboutText">
            Jag är Linda — en UX-minded developer som gillar när saker blir tydliga,
            lättanvända och snygga utan att bli röriga. Jag trivs med struktur,
            små förbättringar och att bygga upplevelser som känns självklara.
          </p>

          
        </header>

       
               
            
         <div className="infTimeline" aria-label="Timeline">
  <ol className="infTimeline-list">
    {timelineItems.map((it, idx) => (
      <li className={`infTimeline-item ${it.type}`} key={`${it.type}-${it.year}-${idx}`}>
        {/* Center spine */}
        <div className="infTimeline-spine" aria-hidden="true">
          <div className={`infTimeline-node ${it.type}`}>
            <span className="infTimeline-icon" aria-hidden="true">
              {it.type === "edu" ? "🎓" : "💼"}
            </span>
          </div>

          {/* segment "pill" */}
          <div className={`infTimeline-segment ${it.type}`} aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="infTimeline-content">
          <div className="infTimeline-meta">
            <span className="infTimeline-year">{it.year}</span>
          
          </div>

          <p className="infTimeline-title">{it.title}</p>
          <p className="infTimeline-company">{it.company}</p>

          {it.text ? <p className="infTimeline-text">{it.text}</p> : null}

          {it.bullets?.length ? (
            <ul className="infTimeline-bullets">
              {it.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          ) : null}
        </div>
      </li>
    ))}
  </ol>
</div>

      </div>
    </section>
  );
}
