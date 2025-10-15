// src/components/Team/Team.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { teamMembers } from "../data/coloniaData";

const Team = () => {
  return (
    <Container className="my-5 py-5">
      <h2
        className="text-center mb-5"
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
      >
        Nuestro Equipo
      </h2>
      <Row className="g-4 justify-content-center">
        {teamMembers.map((member, index) => (
          <Col md={4} key={index}>
            <Card className="text-center shadow-sm" style={{ border: "none" }}>
              <Card.Body className="p-4">
                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    background: member.gradient,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem",
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  {member.initials}
                </div>
                <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {member.name}
                </Card.Title>
                <Card.Text style={{ color: "#6c757d" }}>
                  {member.role}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
