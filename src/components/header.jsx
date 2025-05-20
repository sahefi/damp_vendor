import React, { useCallback, useEffect, useState } from "react";
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
import Swal from 'sweetalert2';

const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLogin') === 'true';
        setIsLogin(loginStatus);
    }, []);

    const handleProfileClick = () => {
        navigate('/edit-profile');
    };

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        setIsLogin(false);
        navigate('/');
    };

    // update window width on resize
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // responsive size adjustments
    const isSmall = windowWidth < 576; // xs breakpoint
    // const isMedium = windowWidth >= 576 && windowWidth < 768; // sm breakpoint
    const currentPath = location.pathname;
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (currentPath === "/search") {
            const params = new URLSearchParams(location.search);
            const keyword = params.get("keyword");
            if (keyword) {
                setSearchTerm(keyword);
            }
        }
    }, [currentPath, location.search]);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    const debouncedSearch = useCallback(
        debounce((term) => {
            if (term === "") navigate("/", { replace: true });

            if (term.trim()) {
                navigate(`/search?keyword=${encodeURIComponent(term)}`);
            }
        }, 500),
        [navigate]
    );

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        debouncedSearch(value);
    };
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
                    <Col xs={12} md={6} className="mb-2 mb-md-0" style={{ zIndex: 0 }}>
                        <Form
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (searchTerm.trim()) {
                                    navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
                                }
                            }}
                        >
                            <InputGroup>
                                <Form.Control
                                    placeholder="Search"
                                    className="custom-search-input"
                                    style={{
                                        fontSize: isSmall ? 12 : 14,
                                        height: isSmall ? 30 : 38,
                                        borderRadius: 10,
                                    }}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onKeyPress={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            if (searchTerm.trim()) {
                                                navigate(`/search?keyword=${encodeURIComponent(searchTerm)}`);
                                            }
                                        }
                                    }}
                                />
                            </InputGroup>
                        </Form>
                        <div
                            style={{
                                fontSize: isSmall ? 9 : 11,
                                color: "#999",
                                paddingTop: 6,
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setSearchTerm("Fotografer lamaran");
                                    navigate("/search?keyword=Fotografer%20lamaran");
                                }}
                            >
                                Fotografer lamaran
                            </span>{" "}
                            &nbsp;
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setSearchTerm("backdrop lamaran");
                                    navigate("/search?keyword=backdrop%20lamaran");
                                }}
                            >
                                backdrop lamaran
                            </span>{" "}
                            &nbsp;
                            <span
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setSearchTerm("mua akad");
                                    navigate("/search?keyword=mua%20akad");
                                }}
                            >
                                mua akad
                            </span>
                        </div>
                    </Col>

                    <Col
                        xs="auto"
                        className="d-flex align-items-center gap-2"
                        style={{ transform: isSmall ? 'translate(250px, -90px)' : 'translate(0, -6px)' }}
                    >
                        {!isLogin ? (
                            <>
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
                                    onClick={() => navigate('/login')}
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
                                    onClick={() => navigate('/register')}
                                >
                                    Daftar
                                </Button>
                            </>
                        ) : (
                            // Profile Dropdown
                            <Dropdown
                                show={showDropdown}
                                onToggle={() => setShowDropdown(!showDropdown)}
                                align="end"
                                style={{ zIndex: 1050, position: 'relative', transform: isSmall ? 'translate(100px, 0px)' : 'translate(0, 0)' }}
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
                                        onClick={() => {
                                            Swal.fire({
                                                title: 'Apakah Anda yakin?',
                                                text: 'Anda akan keluar dari akun ini.',
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#C5203C',
                                                cancelButtonColor: '#aaa',
                                                confirmButtonText: 'Ya, logout',
                                                cancelButtonText: 'Batal'
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    handleLogout();
                                                }
                                            });
                                        }}
                                        style={{
                                            fontWeight: 500,
                                            padding: '10px 20px',
                                            color: '#333',
                                            backgroundColor: 'transparent',
                                        }}
                                        className="custom-dropdown-item"
                                    >
                                        Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
