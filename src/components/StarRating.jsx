import React from 'react';

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

export default StarRating;