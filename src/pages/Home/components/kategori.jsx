import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

const Kategori = ({ listKategori, loading, dummyArray }) => {
    const navigate = useNavigate();

    const toKatalog = (name) => {
        // navigate('/katalog', { state: { categoryName: name } });
    };

    return (
        <Container className="pt-5 mt-lg-5 px-3">
            {/* Header Kategori */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '1rem',
                    marginLeft: 20,
                    fontSize: '1.5rem',
                    fontWeight: 500,
                }}
            >
                Kategori Vendor
            </div>

            {/* Kategori Grid */}
            <div className="category">
                {!loading ? (
                    <Row className="py-4 justify-content-center">
                        {listKategori.map((item, i) => {
                            const IconComponent = FaIcons[item.icon] || FaIcons.FaQuestionCircle;
                            return (
                                <Col key={i} xs={6} sm={4} md={3} lg={2} style={{ marginBottom: '1rem' }}>
                                    <div
                                        onClick={() => toKatalog(item.name)}
                                        title={item.name}
                                        style={{
                                            backgroundColor: '#fff',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '1rem',
                                            padding: '1rem',
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: '4rem',
                                                color: '#333',
                                                lineHeight: 1,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                width: '100%',
                                            }}
                                        >
                                            <IconComponent />
                                        </div>
                                        <p
                                            style={{
                                                marginTop: '0.75rem',
                                                marginBottom: 0,
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {item.name}
                                        </p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>
                ) : (
                    <Row
                        style={{ minWidth: '1250px', width: '100%' }}
                        className="py-4 justify-content-center"
                    >
                        {dummyArray.map((_, idx) => (
                            <Col key={idx} xs={6} sm={4} md={3} lg={2} style={{ marginBottom: '1rem' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '1rem',
                                        padding: '1rem',
                                        backgroundColor: '#fff',
                                        textAlign: 'center',
                                    }}
                                >
                                    <div style={{ overflow: 'hidden' }}>
                                        <div
                                            className="skeleton"
                                            style={{
                                                width: '100px',
                                                height: '100px',
                                                borderRadius: '1rem',
                                                backgroundColor: '#e0e0e0',
                                            }}
                                        />
                                    </div>
                                    <p
                                        className="skeleton"
                                        style={{
                                            marginTop: '0.75rem',
                                            marginBottom: 0,
                                            height: '10px',
                                            borderRadius: '1rem',
                                            width: '60%',
                                            backgroundColor: '#e0e0e0',
                                        }}
                                    ></p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                )}
            </div>

            {/* Banner below categories */}
            <div
                style={{
                    backgroundColor: '#F4DFE1',
                    borderRadius: '1rem',
                    padding: '1.5rem 2rem',
                    marginTop: '2rem',
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: '#333',
                    maxWidth: '1100px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                Daftarkan Vendor Anda!! Anda akan mendapatkan banyak manfaat apabila mendaftarkan vendor anda di situs kami.{' '}
                <span style={{ color: '#D6336C', cursor: 'pointer', fontWeight: '700' }}>Daftar Sekarang</span>
            </div>
        </Container>
    );
};

export default Kategori;
