// src/components/Timeline/Timeline.jsx
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Sunrise, Sun } from "lucide-react";
import { schedule, scheduleAfternoon } from "../data/coloniaData";

const Timeline = () => {
  const TimelineSection = ({ title, icon: Icon, data }) => (
    <Col lg={6} className="mb-5">
      <div className="text-center mb-4">
        <Icon size={30} color="#007bff" className="me-2" />
        <h3 className="fw-bold d-inline">{title}</h3>
      </div>

      <div className="d-flex flex-column gap-4">
        {data.map((item, index) => {
          const ActivityIcon = item.icon;
          return (
            <Card
              key={index}
              className="shadow-sm border-0 timeline-card"
              style={{ overflow: "hidden" }}
            >
              <Card.Body className="d-flex align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                  style={{
                    backgroundColor: item.color,
                    width: "50px",
                    height: "50px",
                    color: "white",
                  }}
                >
                  <ActivityIcon size={24} />
                </div>
                <div>
                  <Badge bg="primary" className="mb-2">
                    {item.time}
                  </Badge>
                  <Card.Title className="mb-0" style={{ fontSize: "1.1rem" }}>
                    {item.activity}
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Col>
  );

  return (
    <section className="timeline-section py-5">
      <Container>
        <h2 className="section-title text-center mb-4">Un Día en la Escuela</h2>
        <p
          className="text-center text-muted mb-5 mx-auto"
          style={{ maxWidth: 700 }}
        >
          Nuestras jornadas están diseñadas para equilibrar el movimiento, el
          aprendizaje y la diversión, promoviendo hábitos saludables desde la
          mañana hasta la tarde.
        </p>

        <Row>
          <TimelineSection
            title="Turno Mañana"
            icon={Sunrise}
            data={schedule}
          />
          <TimelineSection
            title="Turno Tarde"
            icon={Sun}
            data={scheduleAfternoon}
          />
        </Row>
      </Container>
    </section>
  );
};

export default Timeline;
