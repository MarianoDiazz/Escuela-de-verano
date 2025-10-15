// src/components/WhatsAppButton/WhatsAppButton.jsx
import React from "react";
import { Phone } from "lucide-react";
import { contactInfo } from "../data/coloniaData";

const WhatsAppButton = () => {
  const whatsappLink = `https://wa.me/${
    contactInfo.whatsappNumber
  }?text=${encodeURIComponent(
    "Hola! Me gustaría más información sobre la Escuela de Verano."
  )}`;

  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#25d366",
    border: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    cursor: "pointer",
    zIndex: 1000,
    animation: "pulse 2s infinite",
    transition: "transform 0.3s ease",
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        aria-label="Contactar por WhatsApp"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <Phone size={28} color="white" />
      </a>
    </>
  );
};

export default WhatsAppButton;
