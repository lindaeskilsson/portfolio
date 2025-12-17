import "./CSS/App.css";
import "./css/contact.css";
import Navbar from "./navbar";
import Contact from "./contact";

function App() {
  return (
    <>
      <Navbar />

      <main className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">Portfolio</p>
          <h1>LINDA ESKILSSON</h1>
          <p className="subtitle">
            Software Developer in the making 🚀
          </p>
        </div>
      </main>

      <Contact />
    </>
  );
}

export default App;
