import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import { FaStar, FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const renterInfo = {
    name: 'Grandhys Setyo Utomo',
    phone: '081230876156',
    email: 'grandhysetyo@gmail.com',
};

const paymentOptions = [
    { id: 'qris', label: 'QRIS', logo: '/img/qris.png' },
    { id: 'bca', label: 'BCA', logo: '/img/bca.jpg' },
    { id: 'mandiri', label: 'MANDIRI', logo: '/img/mandiri.png' },
];


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

export default function Pembayaran() {
    const [selected, setSelected] = React.useState('qris');

    const navigate = useNavigate();
    const steps = ['Ajukan Sewa', 'Konfirmasi Vendor', 'Bayar', 'Hari Acara'];
    const activeStep = 2; // Contoh step aktif sampai index 1

    return (
        <Container fluid className="p-4" style={{ maxWidth: 1100 }}>
            <Button
                variant="link"
                className="mb-3 p-0"
                style={{ color: '#333' }}
                onClick={() => navigate('/pemesanan')}
            >
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
                                        border: `2px solid ${active ? '#C5203C' : '#ccc'}`,
                                        backgroundColor: active ? '#C5203C' : 'transparent',
                                        color: active ? 'white' : '#999',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 2,
                                    }}
                                >
                                    {active ? <FaCheck size={16} /> : idx + 1}
                                </div>

                                {/* Label step */}
                                <small
                                    style={{
                                        marginTop: 6,
                                        color: active ? '#C5203C' : '#999',
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
                                        backgroundColor: idx < activeStep ? '#C5203C' : '#ccc',
                                        marginLeft: 8,
                                        marginRight: 8,
                                        marginTop: -20, // supaya sejajar dengan tengah bulatan
                                        zIndex: 1,
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

                    <div style={{ maxWidth: 1100, }}>
                        <strong style={{ paddingBottom: 10, display: 'block' }}>Pilih Pembayaran</strong>
                        {paymentOptions.map((option) => (
                            <label
                                key={option.id}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    padding: '12px 16px',
                                    marginBottom: 12,
                                    borderRadius: 8,
                                    boxShadow: selected === option.id ? '0 0 10px rgba(0, 123, 255, 0.6)' : '0 2px 6px rgba(0,0,0,0.1)',
                                    border: selected === option.id ? '2px solid #007bff' : '1px solid #ddd',
                                    cursor: 'pointer',
                                    userSelect: 'none',
                                    backgroundColor: '#fff',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <img
                                        src={option.logo}
                                        alt={option.label}
                                        style={{ height: 40, objectFit: 'contain' }}
                                    />
                                    <span style={{ fontWeight: 600, fontSize: 16 }}>{option.label}</span>
                                </div>
                                <input
                                    type="radio"
                                    name="payment"
                                    checked={selected === option.id}
                                    onChange={() => setSelected(option.id)}
                                    style={{ width: 20, height: 20 }}
                                />
                            </label>
                        ))}
                    </div>
                </Col>

                {/* Right card */}
                <Col md={4} style={{ marginTop: -140 }}>
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
                        </Card.Body>
                    </Card>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop:10 }}>
                        <div style={{ width: 345, display: 'flex', justifyContent: 'center' }}>
                            <Button
                                className="w-100 custom-red-button"
                                style={{ borderRadius: 12, fontWeight: '600', fontSize: 16 }}
                                onClick={() => {
                                    Swal.fire({
                                        title: 'Konfirmasi Pembayaran',
                                        text: `Anda akan membayar sebesar ${paymentDetails.total}. Lanjutkan pembayaran?`,
                                        icon: 'question',
                                        showCancelButton: true,
                                        confirmButtonColor: '#C5203C',
                                        cancelButtonColor: '#aaa',
                                        confirmButtonText: 'Ya, bayar sekarang',
                                        cancelButtonText: 'Batal',
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            Swal.fire({
                                                title: 'Pembayaran Berhasil!',
                                                text: 'Terima kasih, pembayaran Anda telah diproses.',
                                                icon: 'success',
                                                confirmButtonColor: '#C5203C',
                                            })
                                        }
                                    });
                                }}
                            >
                                Bayar Sekarang
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
