import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const cities = [
  { name: 'Vendor Yogyakarta', image: '/img/vendor_1.jpg' },
  { name: 'Vendor Jakarta', image: '/img/vendor_1.jpg' },
  { name: 'Vendor Bandung', image: '/img/vendor_1.jpg' },
  { name: 'Vendor Surabaya', image: '/img/vendor_1.jpg' },
  { name: 'Vendor Malang', image: '/img/vendor_1.jpg' },
  { name: 'Vendor Semarang', image: '/img/vendor_1.jpg' },
  { name: 'Vendor Medan', image: '/img/vendor_1.jpg' },
];

const VendorList = () => {
  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold">Vendor dari berbagai kota</h5>
        <a href="/vendor" className="text-primary text-decoration-none fw-semibold">Lihat Semua</a>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {cities.map((city, index) => (
          <Col key={index}>
            <Card className="text-white border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
              <Card.Img src={city.image} alt={city.name} style={{ height: '160px', objectFit: 'cover' }} />
              <Card.ImgOverlay className="d-flex align-items-end p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0))' }}>
                <Card.Text className="fw-bold">{city.name}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}        
      </Row>
    </Container>
  );
};

export default VendorList;
