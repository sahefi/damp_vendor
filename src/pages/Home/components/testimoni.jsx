import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    name: 'Vendor Marino',
    role: 'Wedding Organizer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    image: 'https://via.placeholder.com/50',
  },
  {
    name: 'Vendor Marino',
    role: 'Wedding Organizer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    image: '/img/tetsimoni_1.jpg',
  },
  {
    name: 'Vendor Marino',
    role: 'Wedding Organizer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    image: '/img/tetsimoni_1.jpg',
  },
  {
    name: 'Vendor Marino',
    role: 'Wedding Organizer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    image: '/img/tetsimoni_1.jpg',
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Testimoni = () => {
  return (
    <Container className="py-5" style={{ maxWidth: 1100 }}>
      <h5 className="mb-4 fw-bold">Kata pemilik vendor</h5>

      <Carousel
        responsive={responsive}
        infinite
        arrows
        autoPlay={false}
        keyBoardControl
        containerClass="carousel-container"
        itemClass="px-2"
      >
        {testimonials.map((item, index) => (
          <Card
            key={index}
            className="h-100"
            style={{
              borderRadius: '16px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
            }}
          >
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle me-3"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <Card.Title className="mb-0">{item.name}</Card.Title>
                  <Card.Subtitle className="text-muted">{item.role}</Card.Subtitle>
                </div>
              </div>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Carousel>

      <div className="text-center mt-5">
              <Button className="px-4 fw-bold custom-red-button">
                  Daftarkan Vendor Anda Sekarang
              </Button>
      </div>
    </Container>
  );
};

export default Testimoni;
