// src/components/Timeline/Timeline.jsx
import React from "react";
import { Container, Card, Badge, Row, Col, Alert } from "react-bootstrap";
import { Moon } from "lucide-react";
import {
  schedule,
  scheduleAfternoon,
  nightActivity,
} from "../data/coloniaData";

const Timeline = () => {
  const timelineItemStyle = {
    display: "flex",
    gap: "1.5rem",
    marginBottom: "2rem",
    alignItems: "flex-start",
  };

  const timelineIconStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    flexShrink: 0,
  };

  const TimelineSection = ({ title, scheduleData, icon }) => (
    <Col lg={6} className="mb-4">
      <h3 className="text-center mb-4 fw-bold">
        {icon} {title}
      </h3>
      {scheduleData.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} style={timelineItemStyle}>
            <div style={{ ...timelineIconStyle, background: item.color }}>
              <Icon size={28} />
            </div>
            <Card
              style={{
                flex: 1,
                border: "none",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <Card.Body>
                <Badge bg="primary" className="mb-2">
                  {item.time}
                </Badge>
                <Card.Title style={{ fontSize: "1.2rem", marginBottom: 0 }}>
                  {item.activity}
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </Col>
  );

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #e8f5e9 100%)",
        padding: "5rem 0",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Un Día en la Escuela
        </h2>
        <p
          className="text-center mb-5 text-muted"
          style={{ fontSize: "1.1rem" }}
        >
          Cada jornada está diseñada para combatir el sedentarismo y fomentar el
          deporte
        </p>

        <Row>
          <TimelineSection
            title="Turno Mañana"
            scheduleData={schedule}
            icon="🌅"
          />
          <TimelineSection
            title="Turno Tarde"
            scheduleData={scheduleAfternoon}
            icon="🌤️"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Timeline;
