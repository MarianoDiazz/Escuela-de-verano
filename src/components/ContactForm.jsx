// src/components/ContactForm/ContactForm.jsx
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { Send, HelpCircle } from "lucide-react";
import { contactInfo } from "../data/coloniaData";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    phone: "",
    email: "",
    allergies: "",
    message: "",
    selectedPlan: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `Hola! Quiero inscribir a mi hijo/a en la Escuela de Verano.\n\nDatos:\n- Niño/a: ${
      formData.childName
    }\n- Edad: ${formData.age} años\n- Padre/Madre: ${
      formData.parentName
    }\n- Teléfono: ${formData.phone}\n- Email: ${
      formData.email
    }\n- Plan de interés: ${
      formData.selectedPlan || "A definir"
    }\n- Alergias/Observaciones: ${
      formData.allergies || "Ninguna"
    }\n- Mensaje: ${formData.message || "Sin mensaje adicional"}`;
    window.open(
      `https://wa.me/${contactInfo.whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <div
      id="inscripcion"
      style={{
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        padding: "5rem 0",
      }}
    >
      <Container>
        <h2
          className="text-center mb-4 text-white"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          ¡Inscribí a tu Hijo/a Ahora!
        </h2>
        <p
          className="text-center text-white mb-5"
          style={{ fontSize: "1.1rem" }}
        >
          Completá el formulario y nos contactaremos a la brevedad por WhatsApp
        </p>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card
              style={{
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
              }}
            >
              <Card.Body className="p-4 p-md-5">
                <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Nombre del Niño/a *</Form.Label>
                        <Form.Control
                          type="text"
                          required
                          placeholder="Ej: Juan Pérez"
                          value={formData.childName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              childName: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Edad *</Form.Label>
                        <Form.Control
                          type="number"
                          required
                          min="2"
                          max="14"
                          placeholder="Ej: 8"
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Nombre del Padre/Madre *</Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Ej: María González"
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Teléfono *</Form.Label>
                        <Form.Control
                          type="tel"
                          required
                          placeholder="Ej: 3865-123456"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      {/* <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Ej: maria@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </Form.Group> */}
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label>Plan de Interés</Form.Label>
                    <Form.Select
                      value={formData.selectedPlan}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          selectedPlan: e.target.value,
                        })
                      }
                    >
                      <option value="">Seleccionar...</option>
                      <option value="Turno Mañana">
                        Turno Mañana (9:30-11:30)
                      </option>
                      <option value="Turno Tarde">
                        Turno Tarde (17:00-19:00)
                      </option>
                      {/* <option value="Completo + Nocturna">
                        Completo + Nocturna
                      </option>
                      <option value="Bebés (2-4 años)">Bebés (2-4 años)</option> */}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Alergias o Necesidades Especiales</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Ej: Alergia al maní, usa lentes, etc."
                      value={formData.allergies}
                      onChange={(e) =>
                        setFormData({ ...formData, allergies: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Mensaje Adicional</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Cualquier consulta o comentario adicional"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Alert variant="info" className="mb-4">
                    <HelpCircle size={20} style={{ marginRight: "10px" }} />
                    Al enviar, serás redirigido a WhatsApp con todos los datos
                    completados.
                  </Alert>

                  <Button
                    variant="success"
                    type="submit"
                    size="lg"
                    className="w-100"
                  >
                    <Send size={20} style={{ marginRight: "10px" }} />
                    Enviar Inscripción por WhatsApp
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
