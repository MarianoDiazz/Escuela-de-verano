// src/components/Navigation.jsx
import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home">🌞 Escuela de Verano</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Button href="#inscripcion" className="btn-primary-custom">
            ¡Inscribite Ya!
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
