// src/components/FAQ/FAQ.jsx
import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { faqs } from "../data/coloniaData";

const FAQ = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f2f1 0%, #e8eaf6 100%)",
        padding: "5rem 0",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Preguntas Frecuentes
        </h2>
        <p
          className="text-center mb-5"
          style={{ fontSize: "1.1rem", color: "#6c757d" }}
        >
          Respondemos todas tus dudas sobre la escuela
        </p>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQ;
