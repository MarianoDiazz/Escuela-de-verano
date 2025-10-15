import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "1.5rem", fontWeight: "bold" }}
        >
          🌞 Colonia Lemua
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            variant="light"
            href="#inscripcion"
            style={{ fontWeight: "bold" }}
          >
            ¡Inscribite Ya!
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
