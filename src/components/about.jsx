import React, { useState } from "react";

const timelineItems = [
  {
    type: "edu",
    year: "Pågående (examen 2027)",
    title: "Javautveckling",
    company: "IT-Högskolan",
    text: "Java (OOP), backend och frontend, webbutveckling, databashantering and more to come!",
  },
  {
    type: "edu",
    year: "Pågående",
    title: "Fristående kurser inom AI och cybersäkerhet",
    company: "Linköpings universitet",
    text: "Grundläggande AI, Grundläggande cybersäkerhet",
  },
  {
    type: "edu",
    year: "2020 – 2023",
    title: "Webbredaktör (Informationsarkitekt & Frontendutvecklare)",
    company: "Högskolan Borås",
    text: "HTML, CSS, JavaScript, React, CMS, informationsarkitektur, UX, tillgänglighet, grafisk form/layout, bildbehandling, animering/multimedia, informationsjuridik, forskningsmetod.",
  },
  {
    type: "edu",
    year: "Tidigare",
    title: "Samhälle, medier, kommunikation & information",
    company: "Wargentin",
    text: "Mediernas roll i samhället, medieteknik, budskapsförmedling, innehållsskapande, foto, film, radio.",
  },
  {
    type: "work",
    year: "Pågående",
    title: "Extraresurs",
    company: "PostNord",
    text: "Bidrar med struktur och pålitlighet för att hålla tempo och ordning även vid hög belastning.",
  },
  {
    type: "work",
    year: "Pågående",
    title: "Extraresurs",
    company: "Fjellservice",
    text: "Stöttar i drift och tar det som behövs för att avlasta i teamet.",
  },
  {
    type: "work",
    year: "2023 – 2025",
    title: "Platschef & webbadministratör",
    company: "JumpYard Åre",
    text: "Skapade tydligare rutiner och planering för stabilt arbetstempo och bättre arbetsmiljö. Gjorde kundinformation på webben enklare att hitta för snabbare service.",
  },
  {
    type: "work",
    year: "2021 – 2023",
    title: "Serveringspersonal",
    company: "Copperhill Mountain Lodge",
    text: "Service med detaljfokus och flexibilitet under högt tryck för smidigare flöden.",
  },
  {
    type: "work",
    year: "2016 – 2021",
    title: "Servitris / receptionist / lokalvård",
    company: "Funäsdalen Berg & Hotell",
    text: "Bidrog till en varm gästupplevelse, tog ansvar i skift och förbättrade teamets arbetsflöde.",
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="aboutPage" id="about" aria-labelledby="aboutPage-title">
      <div className="aboutPage-inner">
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
            {timelineItems.map((it, idx) => {
              const isOpen = openIndex === idx;

              return (
                <li
                  className={`infTimeline-item ${it.type} ${isOpen ? "open" : ""}`}
                  key={`${it.type}-${it.year}-${idx}`}
                >
                  <div className="infTimeline-spine" aria-hidden="true">
                    <div className={`infTimeline-node ${it.type}`}>
                      <span className="infTimeline-icon" aria-hidden="true">
                        {it.type === "edu" ? "🎓" : "💼"}
                      </span>
                    </div>
                  </div>

                  <div className="infTimeline-content">
                    <button
                      className="infTimeline-toggle"
                      onClick={() => toggleItem(idx)}
                      aria-expanded={isOpen}
                    >
                      <div className="infTimeline-meta">
                        <span className="infTimeline-year">{it.year}</span>
                      </div>

                      <p className="infTimeline-title">{it.title}</p>
                      <p className="infTimeline-company">{it.company}</p>

                      <span className="infTimeline-chevron" aria-hidden="true">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="infTimeline-panel">
                        {it.text ? <p className="infTimeline-text">{it.text}</p> : null}

                        {it.bullets?.length ? (
                          <ul className="infTimeline-bullets">
                            {it.bullets.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}