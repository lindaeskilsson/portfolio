import React from "react";

const timelineItems = [
  // JOBB
  {
    type: "work",
    year: "2016 – 2021",
    title: "Servitris / receptionist / lokalvård",
    company: "Funäsdalen Berg & Hotell",
    text:
      "Var en närvarande och positiv person i teamet för att skapa en varm gästupplevelse. Tog ansvar under skiften och ställde upp för mina kollegor, bättre flöde och arbetsmiljö för alla.",
  },
  {
    type: "work",
    year: "2021 – 2023",
    title: "Serveringspersonal",
    company: "Copperhill Mountain Lodge",
    text:
      "Levererade service med detaljfokus för att skapa en jämn och proffsig upplevelse. Hoppade in där det behövdes och bidrog till smidigare flöden under högt tryck.",
  },
  {
    type: "work",
    year: "2023 – 2025",
    title: "Platschef & webbadministratör",
    company: "JumpYard Åre",
    text:
      "Skapade tydligare rutiner och planering för att få stabilt arbetstempo och en god arbetsmiljö, samt en fantastisk plats för våra gäster. Gjorde kundinfo på webben enklare att hitta och förstå, för att jobba mot färre frågor och snabbare service.",
  },
  {
    type: "work",
    year: "Pågående",
    title: "Extraresurs",
    company: "Fjellservice",
    text:
      "Stöttar i drift och tar det som behövs för att avlasta i teamet",
  },
  {
    type: "work",
    year: "Pågående",
    title: "Extraresurs",
    company: "PostNord",
    text:
      "Bidrar med struktur och pålitlighet för att hålla uppe ett tempo och ordning även när belastningen är hög.",
  },

  // UTBILDNING
  {
    type: "edu",
    year: "Tidigare",
    title: "Samhälle, medier, kommunikation & information",
    company: "Wargentin",
    text: ["Mediernas roll i samhället, medieteknik, budskapsförmedling, intresseväckande innehåll, praktiskt skapande, fotografering, film/video, radioproduktion."],
  },
  {
    type: "edu",
    year: "2020 – 2023",
    title: "Webbredaktör (Informationsarkitekt & Frontendutvecklare)",
    company: "Högskolan Borås",
    text: [
      "HTML, CSS, JavaScript, React, content management (CMS), informationsarkitektur, UX, tillgänglighet, grafisk form/layout, bildbehandling, animering/multimedia, informationsjuridik, forskningsmetod.",
    ],
  },
  {
    type: "edu",
    year: "Pågående (examen 2027)",
    title: "Javautveckling",
    company: "IT-Högskolan",
    text: [
  "Java (OOP), backend och frontend, webbutveckling, databashantering ",
  <b key="more">and more to come!</b>,
]
  },
  {
    type: "edu",
    year: "Pågående",
    title: "Fristående kurser",
    company: "Linköpings universitet",
    text: ["Grundläggande AI, Grundläggande cybersäkerhet"],
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
          
            Hej! Jag heter Linda 👋 Jag gillar att skapa användarvänliga och friktionsfria system där design, innehåll och teknik samverkar så att allt känns enkelt och självklart. 
            Jag är varm, nyfiken och strukturerad, och trivs i samarbeten där man testar, förbättrar och bygger lösningar som gör vardagen smidigare för andra. 
            Med en bakgrund inom webbredaktörskap, informationsarkitektur och UX bygger jag just nu vidare på min utvecklarresa med fokus på Java och backend. 
            
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
