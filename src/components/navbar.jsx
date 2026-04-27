import { useState } from "react";
import cvPdf from "../assets/Linda-Eskilsson-LIA-CV.pdf";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* hamburgemeny */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>

        <li>
          <a
            href={cvPdf}
            download="Linda-Eskilsson-CV.pdf"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
}