// src/components/Team/Team.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { teamMembers } from "../data/coloniaData";

const Team = () => {
  return (
    <Container className="my-5 py-5">
      <motion.h2
        className="text-center mb-5"
        style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Nuestro Equipo
      </motion.h2>

      <Row className="g-4 justify-content-center">
        {teamMembers.map((member, index) => (
          <Col md={4} sm={6} xs={12} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                className="text-center shadow-sm border-0"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
              >
                <Card.Body className="p-4">
                  {member.image ? (
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "130px",
                        height: "130px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: "1rem",
                        border: "4px solid #0078d7",
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
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
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.3, duration: 0.5 }}
                  >
                    <Card.Title
                      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      {member.name}
                    </Card.Title>
                    <Card.Text style={{ color: "#6c757d" }}>
                      {member.role}
                    </Card.Text>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Team;
