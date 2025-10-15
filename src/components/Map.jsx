// src/components/Map/Map.jsx
import React from "react";
import { Container } from "react-bootstrap";
import { MapPinned } from "lucide-react";
import { contactInfo } from "../data/coloniaData";

const Map = () => {
  return (
    <Container className="my-5 py-5">
      <h2
        className="text-center mb-4"
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
      >
        ¿Dónde Estamos?
      </h2>
      <p
        className="text-center mb-4"
        style={{ fontSize: "1.1rem", color: "#6c757d" }}
      >
        <MapPinned size={24} color="#dc3545" style={{ marginRight: "10px" }} />
        {contactInfo.location}
      </p>
      <p className="text-center mb-4 fw-bold">{contactInfo.fullAddress}</p>
      <div
        style={{
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.0918846713625!2d-65.63840062376336!3d-27.435247015240627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9423c5002058769b%3A0xa949e1caee95e901!2sQuincho%20de%20Lemua!5e0!3m2!1ses-419!2sar!4v1760546023484!5m2!1ses-419!2sar"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación Aguilares, Tucumán"
        ></iframe>
      </div>
    </Container>
  );
};

export default Map;
