import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid #ddd', paddingTop: 30, paddingBottom: 30, overflow: 'hidden' }}>
      <Container>
        <Row className="mb-4 align-items-start">
          {/* Logo */}
          <Col xs={12} md={2} className="mb-3 mb-md-0">
            <img src="/img/logo.png" alt="Verka.id" style={{ height: 40 }} />
          </Col>

          {/* Verka Indonesia */}
          <Col xs={6} md={2}>
            <strong>Verka Indonesia</strong>
            <ul className="list-unstyled mt-2" style={{ fontSize: 14, color: '#666' }}>
              <li>Tentang Verka</li>
              <li>Karir</li>
              <li>Hubungi Kami</li>
            </ul>
          </Col>

          {/* Berita */}
          <Col xs={6} md={2}>
            <strong>Berita</strong>
            <ul className="list-unstyled mt-2" style={{ fontSize: 14, color: '#666' }}>
              <li>Blog</li>
              <li>Aplikasi Verka</li>
            </ul>
          </Col>

          {/* Layanan Konsumen */}
          <Col xs={6} md={3}>
            <strong>Layanan Konsumen</strong>
            <ul className="list-unstyled mt-2" style={{ fontSize: 14, color: '#666' }}>
              <li>Pusat Bantuan</li>
              <li>Call Center</li>
            </ul>
          </Col>

          {/* Hubungi Kami (2x) */}
          <Col xs={6} md={3}>
            <strong>Hubungi Kami</strong>
            <ul className="list-unstyled mt-2" style={{ fontSize: 14, color: '#666' }}>
              <li>cs@verka.id</li>
              <li>081230876111</li>
            </ul>
            <strong>Hubungi Kami</strong>
            <ul className="list-unstyled mt-2" style={{ fontSize: 14, color: '#666' }}>
              <li>cs@verka.id</li>
              <li>081230876111</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={8} xs={12} style={{ fontSize: 12, color: '#999' }}>
            © 2022 Verka.id, All rights reserved
          </Col>
          <Col md={4} xs={12} className="text-md-end mt-2 mt-md-0">
            <FaFacebookF style={{ fontSize: 20, marginRight: 15, cursor: 'pointer', color: '#555' }} />
            <FaTwitter style={{ fontSize: 20, marginRight: 15, cursor: 'pointer', color: '#555' }} />
            <FaInstagram style={{ fontSize: 20, cursor: 'pointer', color: '#555' }} />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
