import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { FaStar, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const renterInfo = {
    name: 'Grandhys Setyo Utomo',
    phone: '081230876156',
    email: 'grandhysetyo@gmail.com',
};

const detailsText = `
Room Accommodation
1 (one) night stay at King One Bedroom Suite for the Bride & Groom including breakfast for 2 (two) persons
1 (one) night stay at 2 (two) King Guest Rooms including breakfast for 2 (two) persons

Prior To Event
Food tasting for 6 (six) persons
Coffee break during technical meeting for 10 (ten) persons

On the Day
Buffet lunch or dinner for 100 (one hundred) persons. Any additional at IDR 500,000 net I person
Food stall selection for 100 (one hundred) portions Complimentary coffee break for 20 (twenty) persons during tea poi ceremony
2 (two) reception books 10 (ten) parking vouchers
Hospitality room for blessing ceremony or tea poi (based on availability)
Electricity usage of ceremony (max 5 hours)
`;

const vendor = {
    name: 'Maniro Wedding Organizer',
    location: 'Surabaya',
    description: 'Wedding Organizer',
    rating: 4,
    image: '/img/vendor_1.jpg', // ganti dengan path sebenarnya
};

const product = {
    title: 'Paket Pernikahan Adat Sunda',
    author: 'by Mariro WO',
    image: '/img/vendor_1.png', // ganti dengan path sebenarnya
};

const paymentDetails = {
    paket: 'IDR 40,500,000',
    biayaLayanan: 'IDR 10,000',
    total: 'IDR 40,510,000',
};

function renderStars(rating) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <FaStar
                key={i}
                color={i <= rating ? '#F4A261' : '#ddd'}
                style={{ marginRight: 2 }}
            />
        );
    }
    return stars;
}


export default function Pemesanan() {
    const navigate = useNavigate();
    const steps = ['Ajukan Sewa', 'Konfirmasi Vendor', 'Bayar', 'Hari Acara'];
    const activeStep = 1; // Contoh step aktif sampai index 1

    return (
        <Container fluid className="p-4" style={{ maxWidth: 1100 }}>
            <Button variant="link" className="mb-3 p-0" style={{ color: '#333', }}>
                &lt; Back
            </Button>

            <h4 className="mb-4">Ajukan Sewa</h4>

            {/* Progress Bar */}
            <Row
                className="mb-4 justify-content-center"
                style={{ maxWidth: 700 }}
            >
                {steps.map((step, idx) => {
                    const active = idx <= activeStep;
                    const isLast = idx === steps.length - 1;
                    return (
                        <Col
                            key={step}
                            className="d-flex align-items-center"
                            style={{ padding: 0, maxWidth: 150 }}
                        >
                            {/* Container vertikal untuk bulatan + label */}
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    width: 32,
                                }}
                            >
                                {/* Bulatan dengan icon */}
                                <div
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        border: `2px solid ${active ? '#a20e2c' : '#ccc'}`,
                                        backgroundColor: active ? '#a20e2c' : 'transparent',
                                        color: active ? 'white' : '#999',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {active ? <FaCheck size={16} /> : idx + 1}
                                </div>

                                {/* Label step */}
                                <small
                                    style={{
                                        marginTop: 6,
                                        color: active ? '#a20e2c' : '#999',
                                        fontWeight: active ? '600' : '400',
                                        fontSize: 12,
                                        userSelect: 'none',
                                        textAlign: 'center',
                                        whiteSpace: 'nowrap',
                                        width: 'max-content',
                                        maxWidth: 120,
                                        overflowWrap: 'break-word',
                                    }}
                                >
                                    {step}
                                </small>
                            </div>

                            {/* Garis horizontal, di sebelah kanan bulatan */}
                            {!isLast && (
                                <div
                                    style={{
                                        height: 2,
                                        flexGrow: 1,
                                        backgroundColor: idx < activeStep ? '#a20e2c' : '#ccc',
                                        marginLeft: 8,
                                        marginRight: 8,
                                        marginTop: -20, // supaya sejajar dengan tengah bulatan                                        
                                    }}
                                />
                            )}
                        </Col>
                    );
                })}
            </Row>

            <Row>
                {/* Left info */}
                <Col md={8}>
                    <h6>Informasi Penyewa</h6>
                    <p>
                        <strong>Nama Penyewa</strong>
                        <br />
                        {renterInfo.name}
                    </p>
                    <p>
                        <strong>No. Handphone Penyewa</strong>
                        <br />
                        <small className="text-muted">{renterInfo.phone}</small>
                    </p>
                    <p>
                        <strong>Email</strong>
                        <br />
                        <small className="text-muted">{renterInfo.email}</small>
                    </p>

                    <strong>Detail</strong>
                    <p className="text-muted" style={{ fontSize: 14, }}>
                        {detailsText}
                    </p>
                </Col>

                {/* Right card */}
                <Col md={4} style={{ marginTop: -140, zIndex: -1, }}>
                    <Card style={{ borderRadius: 12, boxShadow: '0 4px 12px rgb(0 0 0 / 0.1)' }}>
                        <Card.Body className="p-4 text-center">
                            {/* Profil Vendor */}
                            <div className="d-flex align-items-center mb-3">
                                <Image
                                    src={vendor.image}
                                    roundedCircle
                                    style={{ width: 56, height: 56, objectFit: 'cover', marginRight: 12 }}
                                />
                                <div className="text-start">
                                    <h6 className="mb-0">{vendor.name}</h6>
                                    <small className="text-muted d-block" style={{ fontSize: 12 }}>
                                        {vendor.location} &nbsp; {vendor.description}
                                    </small>
                                    <div className="d-flex mt-1">
                                        {renderStars(vendor.rating, 20)}
                                    </div>
                                </div>
                            </div>

                            {/* Gambar produk */}
                            <Image
                                src={product.image}
                                style={{ width: '100%', borderRadius: 12, objectFit: 'cover', marginBottom: 12 }}
                            />

                            {/* Judul produk & penulis */}
                            <Card.Title style={{ fontSize: 16, fontWeight: '600' }}>
                                {product.title}
                            </Card.Title>
                            <Card.Text className="text-muted" style={{ fontSize: 13, marginBottom: 16 }}>
                                by {product.author}
                            </Card.Text>

                            {/* Rincian pembayaran */}
                            <div
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '1rem 1.5rem',
                                    borderRadius: 12,
                                    boxShadow: '0 2px 6px rgb(0 0 0 / 0.08)',
                                    textAlign: 'left',
                                    marginBottom: 20,
                                    fontSize: 14,
                                    color: '#444',
                                }}
                            >
                                <h6 style={{ fontWeight: '600', marginBottom: 16, textAlign: 'center' }}>
                                    Rincian pembayaran pertama
                                </h6>

                                <Row className="mb-2">
                                    <Col>Paket</Col>
                                    <Col className="text-end fw-bold">{paymentDetails.paket}</Col>
                                </Row>
                                <Row className="mb-2">
                                    <Col>Biaya Layanan</Col>
                                    <Col className="text-end fw-bold">{paymentDetails.biayaLayanan}</Col>
                                </Row>

                                <hr style={{ margin: '12px 0' }} />

                                <Row>
                                    <Col>
                                        <strong>Total</strong>
                                    </Col>
                                    <Col className="text-end fw-bold" style={{ fontSize: 18 }}>
                                        {paymentDetails.total}
                                    </Col>
                                </Row>
                            </div>

                            {/* Tombol konfirmasi */}
                        </Card.Body>
                    </Card>
                </Col>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                    <div style={{ width: 345, display: 'flex', justifyContent: 'center' }}>
                        <Button
                            className="custom-red-button"
                            style={{ borderRadius: 12,width: 345, fontWeight: '600', fontSize: 16, cursor: 'pointer' }}
                            onClick={() => navigate('/pembayaran')}
                        >
                            Konfirmasi Vendor
                        </Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}
