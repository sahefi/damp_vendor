import React from 'react';
import { Card } from 'react-bootstrap';

const venues = [
    {
        id: 1,
        title: 'Jopan WO Nub',
        organizer: 'by Mantiko WO',
        originalPrice: 'IDR 45,000,000',
        price: 'IDR 40,500,000',
        image: '/img/vendor_1.png',
        location: 'Surabaya',
        rating: 5.0,
    },
    {
        id: 2,
        title: 'Jopan WO Nub',
        organizer: 'by Mantiko WO',
        originalPrice: 'IDR 45,000,000',
        price: 'IDR 40,500,000',
        image: '/img/vendor_1.png',
        location: 'Surabaya',
        rating: 4.5,
    },
    {
        id: 3,
        title: 'Jopan WO Nub',
        organizer: 'by Mantiko WO',
        originalPrice: 'IDR 45,000,000',
        price: 'IDR 40,500,000',
        image: '/img/vendor_1.png',
        location: 'Surabaya',
        rating: 4.5,
    },
    {
        id: 4,
        title: 'Jopan WO Nub',
        organizer: 'by Mantiko WO',
        originalPrice: 'IDR 45,000,000',
        price: 'IDR 40,500,000',
        image: '/img/vendor_1.png',
        location: 'Surabaya',
        rating: 4.5,
    },
];

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    return (
        <div style={{ color: '#ffc107' }}>
            {[...Array(fullStars)].map((_, i) => (
                <i key={i} className="bi bi-star-fill"></i>
            ))}
            {halfStar && <i className="bi bi-star-half"></i>}
            {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                <i key={i + 5} className="bi bi-star"></i>
            ))}
        </div>
    );
};

const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
};

const cardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    zIndex: 10,
};

const Rekomendasi = () => {
    // State untuk track hover index card (opsional)
    const [hovered, setHovered] = React.useState(null);

    return (
        <div className="container my-5" style={{ maxWidth: 1100 }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                    <h4 className="fw-bold mb-0">Rekomendasi Venue Untuk Anda</h4>
                    <p className="text-muted mb-0">Lihat rekomendasi venue berikut</p>
                </div>
                <a href="#" className="text-primary text-decoration-none fw-semibold">Lihat Semua</a>
            </div>
            <div className="row">
                {venues.map((venue) => (
                    <div key={venue.id} className="col-md-3 mb-4">
                        <Card
                            className="h-100 shadow-sm rounded-4"
                            style={hovered === venue.id ? {...cardStyle, ...cardHoverStyle} : cardStyle}
                            onMouseEnter={() => setHovered(venue.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <Card.Img
                                variant="top"
                                src={venue.image}
                                style={{
                                    height: '180px',
                                    objectFit: 'cover',
                                    borderTopLeftRadius: '1rem',
                                    borderTopRightRadius: '1rem',
                                }}
                            />
                            <Card.Body>
                                <Card.Title className="fs-18">{venue.title}</Card.Title>
                                <div className="text-muted mb-2">{venue.organizer}</div>
                                <div className="text-decoration-line-through text-muted small">
                                    {venue.originalPrice}
                                </div>
                                <div className="fw-bold mb-2">{venue.price}</div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="text-muted small">
                                        <i className="bi bi-geo-alt me-1"></i> {venue.location}
                                    </span>
                                    <StarRating rating={venue.rating} />
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rekomendasi;
