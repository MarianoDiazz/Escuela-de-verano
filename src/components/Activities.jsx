// src/components/Activities/Activities.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { activities } from "../data/coloniaData";
import { motion } from "framer-motion";

const Activities = () => {
  return (
    <section
      id="actividades"
      className="activities-section position-relative py-5"
    >
      {/* Ola decorativa superior */}
      <svg
        className="wave-top"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          d="M0,160L60,144C120,128,240,96,360,85.3C480,75,600,85,720,112C840,139,960,181,1080,176C1200,171,1320,117,1380,90.7L1440,64V0H0Z"
        ></path>
      </svg>

      <Container>
        <h2 className="section-title text-center mb-5">Nuestras Actividades</h2>

        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const isEven = index % 2 === 0;

          return (
            <Row
              key={index}
              className={`align-items-center mb-5 ${
                isEven ? "" : "flex-row-reverse"
              }`}
            >
              <Col md={6}>
                <motion.div
                  className="activity-visual d-flex justify-content-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div
                    className="activity-icon"
                    style={{
                      background: `linear-gradient(135deg, ${activity.color}, #ffa751)`,
                    }}
                  >
                    <Icon size={80} color="#fff" />
                  </div>
                </motion.div>
              </Col>

              <Col md={6}>
                <motion.div
                  className="activity-text"
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="fw-bold mb-3">{activity.name}</h3>
                  <p className="lead text-muted">{activity.description}</p>
                </motion.div>
              </Col>
            </Row>
          );
        })}
      </Container>

      {/* Ola decorativa inferior */}
      <svg
        className="wave-bottom"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          d="M0,128L48,112C96,96,192,64,288,53.3C384,43,480,53,576,80C672,107,768,149,864,160C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64V200H0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Activities;
