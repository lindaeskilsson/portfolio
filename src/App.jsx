import "./CSS/App.css";
import "./CSS/nav.css"
import "./CSS/contact.css"
import "./CSS/curvedloop.css"

import CurvedLoop from './components/CurvedLoop';
import Navbar from "./components/navbar";
import Contact from "./components/contact";

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




{/*
          <h1>LINDA ESKILSSON</h1>*/}
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
