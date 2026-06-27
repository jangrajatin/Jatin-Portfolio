import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6hcjj6k",
        "template_5txmtd6",
        form.current,
        "rW7uoAuuDkfAb_m5x"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        />

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;