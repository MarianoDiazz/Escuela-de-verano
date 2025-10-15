// src/components/Pricing/Pricing.jsx
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { Check } from "lucide-react";
import { pricingPlans } from "../data/coloniaData";

const Pricing = () => {
  const pricingCardStyle = {
    transition: "transform 0.3s ease",
    height: "100%",
    position: "relative",
  };

  return (
    <div
      id="precios"
      style={{
        background: "linear-gradient(135deg, #fff5f7 0%, #ffe6f0 100%)",
        padding: "5rem 0",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Planes y Precios
        </h2>
        <p
          className="text-center mb-5"
          style={{ fontSize: "1.1rem", color: "#6c757d" }}
        >
          Elegí el turno y plan que mejor se adapte a tus necesidades
        </p>
        <Row className="g-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <Col key={index} md={6} lg={3}>
              <Card
                className="pricing-card text-center h-100"
                style={{
                  ...pricingCardStyle,
                  border: plan.popular ? "3px solid #dc3545" : "none",
                }}
              >
                {plan.popular && (
                  <Badge
                    bg="danger"
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "0.8rem",
                      padding: "0.4rem 1rem",
                    }}
                  >
                    MÁS POPULAR
                  </Badge>
                )}
                <Card.Body className="p-4">
                  <Card.Title
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {plan.name}
                  </Card.Title>
                  <div className="mb-4">
                    <h2
                      style={{
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        color: plan.popular ? "#dc3545" : "#0d6efd",
                      }}
                    >
                      {plan.price}
                    </h2>
                    <p style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                      {plan.period}
                    </p>
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      textAlign: "left",
                      fontSize: "0.9rem",
                    }}
                  >
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="mb-2"
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                        }}
                      >
                        <Check
                          size={18}
                          color="#198754"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.variant}
                    size="lg"
                    href="#inscripcion"
                    className="w-100 mt-4"
                  >
                    Elegir Plan
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-center mt-5">
          <Badge
            bg="warning"
            text="dark"
            style={{ fontSize: "1rem", padding: "1rem 2rem" }}
          >
            💰 15% OFF por hermanos | 10% OFF pago adelantado
          </Badge>
        </div>
        {/* <div className="text-center mt-3">
          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            * Para bebés, se solicita flotadores individuales para brazos (no
            incluidos)
          </p>
        </div> */}
      </Container>
    </div>
  );
};

export default Pricing;
