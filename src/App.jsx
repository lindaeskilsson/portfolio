import "./CSS/App.css";
import "./CSS/nav.css"
import "./CSS/contact.css"
import "./CSS/Curvedloop.css"
import "./CSS/skills.css"
import "./CSS/about.css"
import './CSS/AnimatedList.css';
import './CSS/project.css';



import CurvedLoop from './components/CurvedLoop';
import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Skills from "./components/skills";
import AboutPage from "./components/about";
import AnimatedList from "./components/AnimatedList";
import ProjectsSection from "./components/projects";

const items = [
  { label: "Projekt från Högskolan Borås", url: "https://github.com/lindaeskilsson/code-projects" },
  { label: "Databaslaboration (JDBC)", url: "https://github.com/ithsjava25/databas-jdbc-lindaeskilsson" },
  { label: "Databaslaboration (JavaFX Classroom)", url: "https://github.com/ithsjava25/ithsjava25-java-databas-jdbc-javafx-classrom" },
  { label: "Java-laboration (Core)", url: "https://github.com/ithsjava25/java-core-lindaeskilsson" },
  { label: "Java-laboration (FX & Network)", url: "https://github.com/ithsjava25/java-fx-and-network-lindaeskilsson" },
  { label: "Projekt: Library System (JPA grupp 6-D)", url: "https://github.com/ithsjava25/project-jpa-grupp-6-d" },
  { label: "Portfolio website", url: "https://github.com/lindaeskilsson/portfolio" },
];


function App() {
  return (
    <>
      <Navbar />

      <main className="hero" id="home">
        <div className="hero-content">
       <div className="curved-wrap">
 
  <CurvedLoop
    marqueeText="Linda Eskilsson • Portfolio website•"
    speed={2}
    curveAmount={200}
    interactive={false}
    className="curved-text"
  />
</div>
          <p className="subtitle">
            Software Developer in the making 🚀
          </p>

        </div>
      </main>
<AboutPage />
  <ProjectsSection />
<AnimatedList
  items={items}
  onItemSelect={(item, index) => console.log(item, index)}
  showGradients={true}
  enableArrowNavigation={true}
  displayScrollbar={true}
/>

<Skills />
      <Contact />
    </>
  );
}

export default App;
