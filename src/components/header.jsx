import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    InputGroup,
    Dropdown,
} from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/edit-profile');
    };

    const handleLogout = () => {
        // TODO: handle logout logic (e.g. clear token)
        console.log('Logging out...');
    };

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
                        <a href="/">
                            <img
                                src="/img/logo.png"
                                alt="Verka.id"
                                style={{ height: 60, transform: 'translate(50px, -10px)' }}
                            />
                        </a>
                    </Col>

                    {/* Search Bar */}
                    <Col xs={12} md={6} className="mt-2 mt-md-0">
                        <InputGroup>
                            <Form.Control placeholder="Search" style={{ borderRadius: 5 }} />
                        </InputGroup>
                        <div
                            className=""
                            style={{ fontSize: 11, color: '#999', paddingTop: 6 }}
                        >
                            Fotografer lamaran &nbsp; backdrop lamaran &nbsp; mua akad
                        </div>
                    </Col>

                    {/* Buttons + Profile */}
                    <Col xs="auto" className="mt-2 mt-md-0">
                        <div
                            className="d-flex gap-2 align-items-center"
                            style={{ transform: 'translate(0px, -6px)' }}
                        >
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
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#C5203C';
                                    e.currentTarget.style.color = '#fff';
                                    e.currentTarget.style.borderColor = '#C5203C';
                                }}
                                onMouseLeave={(e) => {
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

                            {/* Profile Dropdown */}
                            <Dropdown
                                show={showDropdown}
                                onToggle={() => setShowDropdown(!showDropdown)}
                                align="end"
                                 style={{ zIndex: 1050, position: 'relative' }} // pastikan tampil di atas elemen lain
                            >
                                <Dropdown.Toggle
                                    as="div"
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    <img
                                        src="/img/vendor_1.jpg" // ganti path sesuai gambar kamu
                                        alt="Profile"
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            border: '2px solid #C5203C',
                                        }}
                                    />
                                </Dropdown.Toggle>

                                <Dropdown.Menu
                                    style={{
                                        marginTop: 10,
                                        borderRadius: 10,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                        padding: '8px 0',
                                        zIndex: 9999,
                                    }}
                                >
                                    <Dropdown.Item
                                        onClick={handleProfileClick}
                                        style={{
                                            fontWeight: 500,
                                            padding: '10px 20px',
                                            color: '#333',
                                            // Supaya tidak ada efek outline dan warna biru default saat klik/fokus:
                                            outline: 'none',
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                        }}
                                        className="custom-dropdown-item"
                                    >
                                        <div className="d-flex align-items-center gap-2">
                                            <img
                                                src="/img/vendor_1.jpg" 
                                                alt="Profile"
                                                style={{
                                                    width: 32,
                                                    height: 32,
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    border: '1px solid #C5203C',
                                                }}
                                            />
                                            <div style={{ lineHeight: 1.2 }}>                                                
                                                <div style={{ fontSize: 12, color: '#777' }}>Sabrina</div>
                                            </div>
                                        </div>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item
                                        onClick={handleLogout}
                                        style={{
                                            fontWeight: 500,
                                            padding: '10px 20px',
                                            color: '#333',
                                            // Supaya tidak ada efek outline dan warna biru default saat klik/fokus:
                                            outline: 'none',
                                            boxShadow: 'none',
                                            backgroundColor: 'transparent',
                                        }}
                                        className="custom-dropdown-item"
                                    >
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
