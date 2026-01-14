
import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
<div className="contact-links">
      <p>
        Vill du komma i kontakt med mig?  <br/>
        Hör gärna av dig via mail eller LinkedIn :D
      </p>
      </div>
      <div className="contact-links">
      
        <a class="link-contact" href="mailto:eskilsson.linda@hotmail.se">Mail</a>
        <a
          href="https://www.linkedin.com/in/linda-eskilsson-742486144/"
          target="_blank"
          rel="noreferrer"
          class="link-contact"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lindaeskilsson"
          target="_blank"
          rel="noreferrer"
          class="link-contact"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;