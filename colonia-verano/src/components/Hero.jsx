// src/components/Hero/Hero.jsx
import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Sparkles } from "lucide-react";
import { heroSlides } from "../data/coloniaData";

const Hero = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <Carousel>
        {heroSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.url}
              alt={slide.title}
              style={{
                height: "90vh",
                objectFit: "cover",
                filter: "brightness(0.7)",
              }}
            />
            <Carousel.Caption style={{ bottom: "30%" }}>
              <h1
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
                }}
              >
                {slide.title}
              </h1>
              <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                {slide.subtitle}
              </p>
              <Button
                variant="danger"
                size="lg"
                href="#inscripcion"
                style={{ padding: "1rem 2rem", fontSize: "1.2rem" }}
              >
                <Sparkles size={24} style={{ marginRight: "10px" }} />
                ¡Reservá tu Lugar!
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
