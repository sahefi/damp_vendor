import React, { useState, useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/edit-profile');
    };

    const handleLogout = () => {
        console.log('Logging out...');
    };

    // update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // responsive size adjustments
    const isSmall = windowWidth < 576; // xs breakpoint
    const isMedium = windowWidth >= 576 && windowWidth < 768; // sm breakpoint

    return (
        <div
            style={{
                backgroundColor: '#fff',
                width: '100%',
                paddingTop: isSmall ? 2 : 5,
                boxShadow: '0 3px 6px -3px rgba(0, 0, 0, 0.3)',
                fontSize: isSmall ? 12 : 14,
                transition: 'all 0.3s ease',
            }}
        >
            <Container fluid className="py-2 px-3">
                <Row
                    className="align-items-center justify-content-between"
                    style={{ flexWrap: 'wrap' }}
                >
                    {/* Logo */}
                    <Col xs="auto" className="d-flex align-items-center mb-2 mb-md-0">
                        <a href="/">
                            <img
                                src="/img/logo.png"
                                alt="Verka.id"
                                style={{
                                    height: isSmall ? 40 : 60,
                                    transform: isSmall ? 'translate(-300px, -5px)' : 'translate(50px, -10px)',
                                    transition: 'all 0.3s ease',
                                }}
                            />
                        </a>
                    </Col>

                    {/* Search Bar */}
                    <Col xs={12} md={6} className="mb-2 mb-md-0" style={{zIndex:0}}>
                        <InputGroup>
                            <Form.Control
                                placeholder="Search"
                                className="custom-search-input"
                                style={{
                                    fontSize: isSmall ? 12 : 14,
                                    height: isSmall ? 30 : 38,
                                    borderRadius: 10,
                                }}
                            />
                        </InputGroup>
                        <div
                            style={{
                                fontSize: isSmall ? 9 : 11,
                                color: '#999',
                                paddingTop: 6,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            Fotografer lamaran &nbsp; backdrop lamaran &nbsp; mua akad
                        </div>
                    </Col>

                    {/* Buttons + Profile */}
                    <Col xs="auto" className="d-flex align-items-center gap-2" style={{ transform: isSmall ? 'translate(250px, -90px)' : 'translate(0, -6px)' }}>
                        <Button
                            variant="outline-danger"
                            style={{
                                borderRadius: 10,
                                padding: isSmall ? '2px 10px' : '4px 16px',
                                borderColor: '#C5203C',
                                color: '#C5203C',
                                outline: 'none',
                                boxShadow: 'none',
                                fontSize: isSmall ? 12 : 14,
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
                                padding: isSmall ? '2px 10px' : '4px 16px',
                                backgroundColor: '#C5203C',
                                border: '1px solid #C5203C',
                                color: 'white',
                                outline: 'none',
                                boxShadow: 'none',
                                fontSize: isSmall ? 12 : 14,
                            }}
                        >
                            Daftar
                        </Button>

                        {/* Profile Dropdown */}
                        <Dropdown
                            show={showDropdown}
                            onToggle={() => setShowDropdown(!showDropdown)}
                            align="end"
                            style={{ zIndex: 1050, position: 'relative' }}
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
                                    src="/img/vendor_1.jpg"
                                    alt="Profile"
                                    style={{
                                        width: isSmall ? 28 : 36,
                                        height: isSmall ? 28 : 36,
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        border: '2px solid #C5203C',
                                        transition: 'all 0.3s ease',
                                    }}
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                style={{
                                    marginTop: 10,
                                    borderRadius: 10,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                                    padding: '8px 0',
                                    zIndex: 20000,  
                                    position: 'absolute',
                                    minWidth: 180,
                                }}
                            >
                                <Dropdown.Item
                                    onClick={handleProfileClick}
                                    style={{
                                        fontWeight: 500,
                                        padding: '10px 20px',
                                        color: '#333',
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
