// src/components/Footer/Footer.jsx
import React from "react";
import { Container } from "react-bootstrap";
import { Phone } from "lucide-react";
import { contactInfo } from "../data/coloniaData";

const Footer = () => {
  const whatsappLink = `https://wa.me/${
    contactInfo.whatsappNumber
  }?text=${encodeURIComponent(
    "Hola! Me gustaría más información sobre la Escuela de Verano."
  )}`;

  return (
    <footer
      style={{ background: "#212529", color: "white", padding: "3rem 0" }}
    >
      <Container className="text-center">
        <h3
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
        >
          ¡Contactanos!
        </h3>
        <div className="mb-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#25d366",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            <Phone size={24} style={{ marginRight: "10px" }} />
            {contactInfo.phone}
          </a>
        </div>
        <div className="mb-3">
          <p style={{ margin: "0.5rem 0" }}>
            <strong>📍 {contactInfo.location}</strong>
          </p>
          <p
            style={{ color: "#6c757d", margin: "0.5rem 0", fontSize: "0.9rem" }}
          >
            {contactInfo.fullAddress}
          </p>
        </div>
        <div className="mb-3">
          <p
            style={{ color: "#6c757d", margin: "0.5rem 0", fontSize: "0.9rem" }}
          >
            📅 {contactInfo.schedule.days}
          </p>
          <p
            style={{ color: "#6c757d", margin: "0.5rem 0", fontSize: "0.9rem" }}
          >
            🌅 Mañana: {contactInfo.schedule.morning} | 🌤️ Tarde:{" "}
            {contactInfo.schedule.afternoon}
          </p>
        </div>
        <hr style={{ borderColor: "#495057", margin: "2rem 0" }} />
        <p style={{ color: "#6c757d", margin: 0 }}>
          © 2025 Escuela de Verano - Aguilares, Tucumán. Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
