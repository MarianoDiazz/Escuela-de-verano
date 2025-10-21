// src/components/Team/Team.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { teamMembers } from "../data/coloniaData";

const Team = () => {
  return (
    <section className="team-section position-relative py-5">
      <div className="team-bg-bubbles"></div>

      <Container>
        <motion.h2
          className="text-center mb-5 section-title"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Conocé a Nuestro Equipo
        </motion.h2>

        <Row className="g-5 justify-content-center">
          {teamMembers.map((member, index) => (
            <Col
              key={index}
              md={4}
              sm={6}
              xs={12}
              className="d-flex justify-content-center"
            >
              <motion.div
                className="team-card text-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="team-photo-wrapper">
                  <motion.div
                    className="photo-halo"
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 18,
                      ease: "linear",
                    }}
                  ></motion.div>

                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="team-photo"
                    loading="lazy"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  <h3 className="team-name mt-3">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
