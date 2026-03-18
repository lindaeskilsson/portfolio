import AnimatedList from "./AnimatedList";

export default function ProjectsSection({ schoolProjects, liveWebsites }) {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>

        <p className="projects-intro">
          Här är några projekt jag byggt nyligen och under min tidigare utbildning,
          från små labbar till större uppgifter och grupprojekt.
        </p>

        <div className="projects-group">
          <h3 className="projects-subtitle">School projects</h3>
          <AnimatedList
            items={schoolProjects}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients
            enableArrowNavigation
            displayScrollbar
          />
        </div>

        <div className="projects-group">
          <h3 className="projects-subtitle">Live websites</h3>
          <AnimatedList
            items={liveWebsites}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients
            enableArrowNavigation
            displayScrollbar
          />
        </div>
      </div>
    </section>
  );
}