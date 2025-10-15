// src/components/Countdown/Countdown.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Countdown = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-01T00:00:00").getTime();
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

  const countdownBoxStyle = {
    background: "rgba(255,255,255,0.2)",
    borderRadius: "15px",
    padding: "1.5rem",
    backdropFilter: "blur(10px)",
  };

  const labels = {
    days: "Días",
    hours: "Horas",
    minutes: "Min",
    seconds: "Seg",
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        padding: "3rem 0",
        color: "white",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          ¡Comienza en!
        </h2>
        <Row className="justify-content-center">
          {Object.entries(countdown).map(([key, value]) => (
            <Col xs={6} md={3} key={key} className="text-center mb-3">
              <div style={countdownBoxStyle}>
                <h1 style={{ fontSize: "3rem", fontWeight: "bold", margin: 0 }}>
                  {value}
                </h1>
                <p style={{ margin: 0 }}>{labels[key]}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Countdown;
