// src/components/ImportanceSection/ImportanceSection.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Heart,
  Users,
  TreePine,
  Shield,
  Smile,
  Activity,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { importancePoints } from "../data/coloniaData";

const ImportanceSection = () => {
  const icons = [
    Heart,
    Users,
    TreePine,
    Shield,
    Smile,
    Activity,
    BookOpen,
    TrendingUp,
  ];
  const colors = [
    "#ff7b00",
    "#1eb2a6",
    "#0077b6",
    "#ff4d6d",
    "#ffb703",
    "#8338ec",
    "#06d6a0",
    "#f72585",
  ];

  return (
    <section className="importance-section">
      <Container>
        <h2 className="section-title text-white">
          ¿Por Qué Es Importante Nuestra Escuela?
        </h2>

        <p className="importance-subtitle">
          Como profesores de educación física, creemos en una formación integral
          que promueva la salud, el juego y los valores.
          <strong>
            {" "}
            Nuestra escuela impulsa movimiento, amistad y bienestar.{" "}
          </strong>
        </p>

        <Row className="g-4">
          {importancePoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <Col key={index} sm={6} lg={3} className="d-flex">
                <Card className="importance-card flex-fill">
                  <div
                    className="importance-icon"
                    style={{ color: colors[index % colors.length] }}
                  >
                    <Icon size={36} />
                  </div>
                  <Card.Body>
                    <Card.Title className="importance-title">
                      {point.title}
                    </Card.Title>
                    <Card.Text className="importance-text">
                      {point.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default ImportanceSection;
