// src/components/Countdown/Countdown.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-11-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const labels = {
    days: "Días",
    hours: "Horas",
    minutes: "Min",
    seconds: "Seg",
  };

  return (
    <section className="countdown-section">
      <Container>
        <h2 className="section-title text-white mb-5">¡Comienza en!</h2>
        <Row className="justify-content-center">
          {Object.entries(countdown).map(([key, value], index) => (
            <Col xs={6} md={3} key={key} className="text-center mb-3">
              <motion.div
                className="countdown-box"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h1 className="countdown-number">{value}</h1>
                <p className="countdown-label">{labels[key]}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Countdown;
