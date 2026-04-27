

/* Nya städade importer */
import "./CSS/index.css";      // Innehåller variabler, reset och Hero (App.css förut)
import "./CSS/components.css"; // Innehåller Skills, Contact och CurvedLoop
import "./CSS/nav.css";
import "./CSS/about.css";
import "./CSS/project.css";

import CurvedLoop from "./components/CurvedLoop";
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Skills from "./components/skills";
import AboutPage from "./components/about";
import ProjectsSection from "./components/projects";

// ... resten av din App-kod (items-arrayen etc.)

function App() {
 const schoolProjects = [
    { label: "Projekt från Högskolan Borås", url: "https://github.com/lindaeskilsson/code-projects" },
    { label: "Databaslaboration (JDBC)", url: "https://github.com/ithsjava25/databas-jdbc-lindaeskilsson" },
    { label: "Databaslaboration (JavaFX Classroom)", url: "https://github.com/ithsjava25/ithsjava25-java-databas-jdbc-javafx-classrom" },
    { label: "Javalaboration (Core)", url: "https://github.com/ithsjava25/java-core-lindaeskilsson" },
    { label: "Javalaboration (FX & Network)", url: "https://github.com/ithsjava25/java-fx-and-network-lindaeskilsson" },
    { label: "Projekt: Bibliotekssystem", url: "https://github.com/ithsjava25/project-jpa-grupp-6-d" },
    { label: "Portfolio website", url: "https://github.com/lindaeskilsson/portfolio" },
    { label: "Mini Server med windows95 look", url: "https://github.com/lindaeskilsson/mini-server" },
    { label: "TrailTracker", url: "https://github.com/lindaeskilsson/trailtracker" },
    { label: "VET1177", url: "https://github.com/ithsjava25/project-backend-org-random-coders" },
  ];

  const liveWebsites = [
    { label: "Wedding website", url: "https://pontusochmalin2026.com/" },
  ];


  return (
    <>
      <Navbar />

      <main className="hero" id="home">
        <div className="hero-content">
          <h1>Linda Eskilsson</h1>
          <p className="subtitle">
            Full-stack developer with a UX eye
          </p>

          <div className="curved-wrap">
            <CurvedLoop
              marqueeText=" Söker LIA för hösten 2026! • Söker LIA för hösten 2026! • Söker LIA för hösten 2026! • Söker LIA för hösten 2026! "
              speed={1.5}
              curveAmount={120}
            />
          </div>
        </div>
      </main>

      <AboutPage />
     <ProjectsSection
        schoolProjects={schoolProjects}
        liveWebsites={liveWebsites}
      />
      <Skills />
      <Contact />
    </>
  );
}
export default App;