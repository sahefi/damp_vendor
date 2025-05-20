import React, { useState } from 'react';
import { Row, Col, Card, Image, Button } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const vendor = {
  name: 'Maniro Wedding Organizer',
  location: 'Surabaya',
  description: 'Wedding Organizer',
  lastSeen: 'Aktif 10 jam lalu',
  website: 'http://www.marinowo.com/',
  instagram: 'Marino_id',
  socialMedia: 'Media Sosial',
  rating: 4,
  image: '/img/vendor_1.jpg',
};

const products = [
  {
    id: 1,
    title: 'Adat Jawa Dekorasi',
    author: 'by Maniro WO',
    image: '/img/vendor_1.png',
    rating: 4.5,
  },
  {
    id: 2,
    title: 'Adat Sunda Dekorasi',
    author: 'by Maniro WO',
    image: '/img/vendor_1.png',
    rating: 4.5,
  },
  {
    id: 3,
    title: 'Adat Jawa Dekorasi',
    author: 'by Maniro WO',
    image: '/img/vendor_1.png',
    rating: 4,
  },
  {
    id: 4,
    title: 'Adat Jawa Dekorasi',
    author: 'by Maniro WO',
    image: '/img/vendor_1.png',
    rating: 4,
  },
  {
    id: 5,
    title: 'Adat Jawa Dekorasi',
    author: 'by Maniro WO',
    image: '/img/vendor_1.png',
    rating: 5,
  },
  {
    id: 6,
    title: 'Adat Jawa Dekorasi',
    author: 'by Maniro WO',
    image: '/img/vendor_1.png',
    rating: 4.5,
  },
];

function renderStars(rating) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#F4A261" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#F4A261" />);
    } else {
      stars.push(<FaRegStar key={i} color="#F4A261" />);
    }
  }
  return stars;
}

export default function VendorProfile() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('profile'); // 'profile' | 'tentang' | 'ulasan'

  return (
    <Row className="p-4 g-4">
      {/* KONTEN KIRI */}
      <Col md={9}>
        {/* Menu Navigasi */}
        <div className="mb-3 d-flex gap-3">
          <Button
            className="no-focus"
            variant={activeSection === 'profile' ? 'danger' : 'outline-danger'}
            onClick={() => setActiveSection('profile')}
          >
            Produk
          </Button>
          <Button
            className="no-focus"
            variant={activeSection === 'ulasan' ? 'danger' : 'outline-danger'}
            onClick={() => setActiveSection('ulasan')}
          >
            Ulasan
          </Button>
          <Button
            className="no-focus"
            variant={activeSection === 'tentang' ? 'danger' : 'outline-danger'}
            onClick={() => setActiveSection('tentang')}
          >
            Tentang Kami
          </Button>
        </div>

        {/* Isi berdasarkan section */}
        {(activeSection === 'profile' || activeSection === 'tentang' || activeSection === 'ulasan') && (
          <Card className="p-3">
            {activeSection === 'profile' && (
              <>
                <h6>Menampilkan halaman 1 dari 10</h6>
                <Row className="g-3">
                  {products.map((product) => (
                    <Col md={4} sm={6} key={product.id}>
                      <Card
                        onClick={() => navigate('/detail')}
                        className="h-100"
                        style={{
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // box shadow halus
                          borderRadius: 10,
                          cursor:'pointer'
                        }}
                      >
                        <Card.Img
                          variant="top"
                          src={product.image}
                          style={{
                            height: '180px',
                            objectFit: 'cover',
                            borderTopLeftRadius: '1rem',
                            borderTopRightRadius: '1rem',
                          }}
                        />
                        <Card.Body>
                          <Card.Title style={{ fontSize: 14 }}>{product.title}</Card.Title>
                          <Card.Text style={{ fontSize: 12, color: '#777' }}>
                            {product.author}
                          </Card.Text>
                          <div>{renderStars(product.rating)}</div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </>
            )}

            {activeSection === 'tentang' && (
              <p>
                <strong>Tentang Kami:</strong> {vendor.description}. Website kami:{' '}
                <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                  {vendor.website}
                </a>
              </p>
            )}

            {activeSection === 'ulasan' && (
              <p><strong>Ulasan Pengguna:</strong> Belum ada ulasan untuk vendor ini.</p>
            )}
          </Card>
        )}
      </Col>

      {/* KONTEN KANAN */}
      <Col md={3}>
        <Card className="p-3 h-100" style={{ borderRadius: 10 }}>
          <div className="d-flex flex-column align-items-center text-center mb-3">
            <Image
              src={vendor.image}
              roundedCircle
              style={{ width: 80, height: 80, objectFit: 'cover' }}
            />
            <h6 className="mt-2 mb-0">{vendor.name}</h6>
            <small className="text-muted">{vendor.location}</small>
          </div>
          <p className="text-center" style={{ fontSize: 12 }}>{vendor.description}</p>
          <div className="d-flex justify-content-center mb-2">{renderStars(vendor.rating)}</div>
          <small className="text-muted text-center d-block mb-3">{vendor.lastSeen}</small>

          <Button className="custom-red-button mb-2" style={{ width: '100%', cursor:'pointer' }} onClick={() => navigate('/chat')}>
            Chat Vendor
          </Button>
          <Button className="custom-red-button" style={{ width: '100%' }} >
            Simpan Vendor
          </Button>

          <div style={{ fontSize: 12, color: '#555', marginTop: 20 }}>
            <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="d-block">
              {vendor.website}
            </a>
            <div>{vendor.instagram}</div>
            <div>{vendor.socialMedia}</div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
