// src/components/Hero/Hero.jsx
import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { heroSlides } from "../data/coloniaData";

const Hero = () => {
  return (
    <div style={{ marginTop: "56px" }}>
      <Carousel fade interval={5000}>
        {heroSlides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div style={{ position: "relative" }}>
              <img
                className="d-block w-100"
                src={slide.url}
                alt={slide.title}
                style={{
                  height: "90vh",
                  objectFit: "cover",
                  filter: "brightness(0.6)",
                }}
              />

              {/* Overlay degradado suave */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.3), rgba(0,0,0,0.75))",
                }}
              ></div>
            </div>

            <Carousel.Caption style={{ bottom: "25%" }}>
              <motion.h1
                className="section-title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  color: "white",
                  fontSize: "3.5rem",
                  textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
                }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  fontSize: "1.5rem",
                  color: "#f1f1f1",
                  marginBottom: "2rem",
                  textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
                }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Button
                  href="#inscripcion"
                  className="btn-primary-custom"
                  size="lg"
                >
                  <Sparkles size={22} style={{ marginRight: "8px" }} />
                  ¡Reservá tu Lugar!
                </Button>
              </motion.div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
