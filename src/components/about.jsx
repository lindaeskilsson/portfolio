import React, { useState } from "react";

const timelineItems = [
  {
    type: "edu",
    year: "Pågående (examen 2027)",
    title: "Javautveckling",
    company: "IT-Högskolan",
    text: "Utbildning med fokus på att bygga hela kedjan – från databas och backend i Java och Spring Boot till användarvänliga gränssnitt med React och Tailwind. Jag lär mig att tänka på både arkitektur och upplevelse, och jobbar i grupprojekt med agila metoder där riktiga problem löses på ett enkelt och genomtänkt sätt.",
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
    text: "Bred utbildning i frontend och UX - React, JavaScript, HTML/CSS, informationsarkitektur och tillgänglighetsanpassning. Lärt mig tänka på användaren i varje steg, från struktur till kod.",
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
    text: "Vikarierande distrubitör, ansvarar för att sortera och leverera paket i tid, samt ge snabb och vänlig service till kunderna.",
  },
  {
    type: "work",
    year: "Pågående",
    title: "Extraresurs",
    company: "Fjellservice",
    text: "Stöttar i drift och tar det som behövs för att avlasta för teamet.",
  },
  {
    type: "work",
    year: "2023 – 2025",
    title: "Platschef & webbadministratör",
    company: "JumpYard Åre",
    text: "Identifierade flaskhalsar i användarflödet på webbplatsen och förbättrade struktur och innehåll utifrån hur besökare faktiskt använde sidan - vilket ledde till färre supportärenden och en smidigare upplevelse för kunderna.",
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
  Hej! Jag heter Linda 👋 Webbutvecklare under utbildning med en fot i backend och en i UX. Jag brinner för digitala lösningar som känns självklara att använda, där tekniken är osynlig och upplevelsen sitter i fokus. Med bakgrund i både Java/Spring Boot och UX-design söker jag just nu en LIA-plats där jag får bidra till riktiga projekt, i ett team som värdesätter enkelhet och genomtänkt design lika mycket som ren kod. Har du några frågor?{" "}
  <a href="#contact" className="aboutLink"> hör av dig! 🧡 </a>
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