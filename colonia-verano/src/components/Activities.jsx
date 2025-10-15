// src/components/Activities/Activities.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { activities } from "../data/coloniaData";

const Activities = () => {
  const activityCardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    height: "100%",
    border: "none",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <Container className="my-5 py-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
      >
        Nuestras Actividades
      </h2>
      <Row className="g-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <Col key={index} md={4}>
              <Card className="activity-card" style={activityCardStyle}>
                <Card.Body className="p-4">
                  <Icon size={56} color={activity.color} className="mb-3" />
                  <Card.Title
                    style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    {activity.name}
                  </Card.Title>
                  <Card.Text style={{ color: "#6c757d" }}>
                    {activity.description}
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

export default Activities;
