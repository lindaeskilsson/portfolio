import cvPdf from "../assets/Linda-Eskilsson-CV.pdf";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
       <li>
          <a href={cvPdf} download="Linda-Eskilsson-CV.pdf">
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  )
}