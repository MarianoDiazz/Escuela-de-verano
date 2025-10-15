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
    "#dc3545",
    "#198754",
    "#28a745",
    "#0dcaf0",
    "#ffc107",
    "#fd7e14",
    "#6f42c1",
    "#d63384",
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "5rem 0",
        color: "white",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          ¿Por Qué Es Importante Nuestra Escuela?
        </h2>
        <p
          className="text-center mb-5"
          style={{ fontSize: "1.2rem", opacity: 0.9 }}
        >
          Como profesores de educación física, tenemos una tarea fundamental:{" "}
          <br />
          <strong>
            Sacar a los niños de las pantallas y fomentar el deporte para
            combatir el sedentarismo
          </strong>
        </p>

        <Row className="g-4">
          {importancePoints.map((point, index) => {
            const Icon = icons[index];
            return (
              <Col key={index} md={6} lg={3}>
                <Card
                  className="h-100 text-center"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "white",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "translateY(-10px)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "translateY(0)")
                  }
                >
                  <Card.Body className="p-4">
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        background: colors[index],
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <Icon size={36} />
                    </div>
                    <Card.Title
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {point.title}
                    </Card.Title>
                    <Card.Text style={{ fontSize: "0.9rem", opacity: 0.9 }}>
                      {point.description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ImportanceSection;
