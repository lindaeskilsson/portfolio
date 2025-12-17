

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <p>
        Vill du komma i kontakt med mig?  
        Hör gärna av dig via mail eller LinkedIn :D
      </p>

      <div className="contact-links">
        <a href="mailto:eskilsson.linda@hotmail.se">Mail</a>
        <a
          href="https://www.linkedin.com/in/linda-eskilsson-742486144/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/lindaeskilsson"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;