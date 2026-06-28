import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_6hcjj6k",
        "template_jenpnod",
        form.current,
        {
          publicKey: "rW7uoAuuDkfAb_m5x",
        }
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.log("Status:", error.status);
        console.log("Text:", error.text);
        console.log("Full Error:", error);
        setStatus("❌ Failed to send message: " + error.text);
        alert("Failed: " + error.text);
      })
      .finally(() => {
        setLoading(false);
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

        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            style={{
              marginTop: "15px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;