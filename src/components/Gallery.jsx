// src/components/Gallery/Gallery.jsx
import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "../data/coloniaData";

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  const galleryImageStyle = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 0.3s ease",
  };

  return (
    <>
      <Container className="my-5 py-5">
        <h2
          className="text-center mb-5"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Galería de Momentos
        </h2>
        <Row className="g-3">
          {galleryImages.map((image, index) => (
            <Col key={index} md={4} xs={6}>
              <img
                src={image.url}
                alt={image.alt}
                className="gallery-img"
                style={galleryImageStyle}
                onClick={() => {
                  setLightboxImage(index);
                  setLightboxOpen(true);
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        show={lightboxOpen}
        onHide={() => setLightboxOpen(false)}
        size="lg"
        centered
      >
        <Modal.Body
          style={{ padding: 0, background: "#000", position: "relative" }}
        >
          <Button
            variant="light"
            onClick={() => setLightboxOpen(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 10,
            }}
          >
            <X size={24} />
          </Button>
          <Button
            variant="light"
            onClick={() =>
              setLightboxImage(
                (lightboxImage - 1 + galleryImages.length) %
                  galleryImages.length
              )
            }
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <ChevronLeft size={24} />
          </Button>
          <img
            src={galleryImages[lightboxImage].url}
            alt={galleryImages[lightboxImage].alt}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "80vh",
              objectFit: "contain",
            }}
          />
          <Button
            variant="light"
            onClick={() =>
              setLightboxImage((lightboxImage + 1) % galleryImages.length)
            }
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
          >
            <ChevronRight size={24} />
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Gallery;
