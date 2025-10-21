// src/components/InfoCards/InfoCards.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Calendar, Clock, MapPin, Sun, Moon } from "lucide-react";
import { contactInfo } from "../data/coloniaData";

const InfoCards = () => {
  const cards = [
    {
      icon: Calendar,
      title: "Días",
      text: contactInfo.schedule.days,
      color: "#0d6efd",
    },
    {
      icon: Sun,
      title: "Turno Mañana",
      text: contactInfo.schedule.morning,
      color: "#ffc107",
    },
    {
      icon: Moon,
      title: "Turno Tarde",
      text: contactInfo.schedule.afternoon,
      color: "#6f42c1",
    },
    {
      icon: MapPin,
      title: "Lugar",
      text: contactInfo.location,
      color: "#dc3545",
    },
  ];

  return (
    <Container className="my-5 py-5">
      <Row className="g-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Col md={6} lg={3} key={index}>
              <Card
                className="text-center h-100 shadow-sm"
                style={{ border: "none" }}
              >
                <Card.Body className="p-4">
                  <Icon size={56} color={card.color} className="mb-3" />
                  <Card.Title
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {card.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "1rem", color: "#6c757d" }}>
                    {card.text}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default InfoCards;
