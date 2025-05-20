import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, InputGroup } from 'react-bootstrap';

const Header = () => {
    return (
        <div
            style={{
                backgroundColor: '#fff',
                width: '100%',
                paddingTop: 5,
                boxShadow: '0 3px 6px -3px rgba(0, 0, 0, 0.3)',
            }}
        >
            <Container fluid className="py-2 px-3">
                <Row className="align-items-center justify-content-between">
                    {/* Logo */}
                    <Col xs="auto" className="d-flex align-items-center">
                        <img
                            src="/img/logo.png"
                            alt="Verka.id"
                            style={{ height: 60 }}
                        />
                    </Col>

                    {/* Search Bar */}
                    <Col xs={12} md={6} className="mt-2 mt-md-0">
                        <InputGroup>
                            <Form.Control
                                placeholder="Search"
                                style={{ borderRadius: 5 }}
                            />
                        </InputGroup>
                        <div className="" style={{ fontSize: 11, color: '#999' }}>
                            Fotografer lamaran &nbsp; backdrop lamaran &nbsp; mua akad
                        </div>
                    </Col>

                    {/* Tombol */}
                    <Col xs="auto" className="d-flex align-items-center mt-2 mt-md-0 gap-2">
                        <Button
                            variant="outline-danger"
                            style={{
                                borderRadius: 10,
                                padding: '4px 16px',
                                borderColor: '#C5203C',
                                color: '#C5203C',
                                outline: 'none',
                                boxShadow: 'none',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = '#C5203C';
                                e.currentTarget.style.color = '#fff';
                                e.currentTarget.style.borderColor = '#C5203C';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = '#C5203C';
                                e.currentTarget.style.borderColor = '#C5203C';
                            }}
                        >
                            Masuk
                        </Button>
                        <Button
                            style={{
                                borderRadius: 10,
                                padding: '4px 16px',
                                backgroundColor: '#C5203C',
                                border: '1px solid #C5203C',
                                color: 'white',
                                outline: 'none',
                                boxShadow: 'none',
                            }}
                        >
                            Daftar
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
