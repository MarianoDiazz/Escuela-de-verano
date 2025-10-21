// src/components/Pricing/Pricing.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  Volleyball,
  Users,
  Waves,
  ShieldCheck,
  HeartHandshake,
  SunMedium,
} from "lucide-react";

const Pricing = () => {
  const price = "$30.000 / mes";

  const features = [
    { icon: Volleyball, text: "Deportes y juegos grupales" },
    { icon: Users, text: "Supervisión de profesores titulados" },
    { icon: Waves, text: "Pileta y actividades acuáticas" },
    { icon: ShieldCheck, text: "Cobertura médica y seguros" },
    { icon: HeartHandshake, text: "Educación en valores y convivencia" },
    { icon: SunMedium, text: "Ambiente al aire libre y natural" },
  ];

  const plans = [
    { title: "Turno Mañana", schedule: "8:00 a 12:30", variant: "primary" },
    { title: "Turno Tarde", schedule: "14:00 a 18:30", variant: "info" },
  ];

  return (
    <section id="precios" className="pricing-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">
          Vení a disfrutar el verano
        </h2>
        <p
          className="text-center text-muted mb-5 mx-auto"
          style={{ maxWidth: 700 }}
        >
          En la <strong>Escuela de Verano</strong> cada jornada es una aventura:
          deportes, pileta, juegos, valores y amistad. Todo incluido en un solo
          plan.
        </p>

        {/* Sección de beneficios */}
        <Row className="g-4 mb-5 justify-content-center">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <Col xs={6} md={4} key={index} className="text-center">
                <div className="feature-card">
                  <div className="feature-icon">
                    <Icon size={32} />
                  </div>
                  <p>{item.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* Cards de precios */}
        <Row className="g-4 justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="plan-card text-center h-100 shadow-sm border-0">
                <Card.Body className="p-5 d-flex flex-column justify-content-between">
                  <div>
                    <h3 className="fw-bold text-primary mb-3">{plan.title}</h3>
                    <p className="text-muted mb-4">{plan.schedule}</p>
                    <h2 className="fw-bold text-accent display-5 mb-4">
                      {price}
                    </h2>
                    <p className="text-muted small mb-4">
                      Incluye todas las actividades, materiales y seguro.
                    </p>
                  </div>
                  <Button
                    variant={plan.variant}
                    size="lg"
                    href="#inscripcion"
                    className="fw-semibold w-100 rounded-pill plan-btn"
                  >
                    Inscribirme
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Descuento */}
        <div className="text-center mt-5">
          <div className="discount-banner">
            💰 <strong>15% OFF por hermanos</strong> | 10% OFF pago adelantado
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
