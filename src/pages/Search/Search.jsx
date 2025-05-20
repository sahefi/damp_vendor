import { Card, Col, Container, Row } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import SearchFilter from "./components/SearchFilter";
import StarRating from "../../components/StarRating";
import { searchData as mockResults } from "./data/SearchData";

const Search = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    category: "Semua Kategori",
  });
  const [hovered, setHovered] = useState(null);

  const cardStyle = {
    transition: "transform 0.3s ease, boxShadow 0.3s ease",
    cursor: "pointer",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    zIndex: 10,
  };

  useEffect(() => {
    if (!keyword.trim()) return;

    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        setTimeout(() => {
          let filteredResults = [...mockResults];

          if (filters.category !== "Semua Kategori") {
            const categoryMap = {
              Fotografer: (item) => item.title.toLowerCase().includes("foto"),
              Venue: (item) => item.title.toLowerCase().includes("venue"),
              "Makeup Artist": (item) =>
                item.title.toLowerCase().includes("mua") ||
                item.title.toLowerCase().includes("makeup"),
              Dekorasi: (item) => item.title.toLowerCase().includes("dekor"),
              Catering: (item) => item.title.toLowerCase().includes("catering"),
              Pakaian: (item) => item.title.toLowerCase().includes("pakaian"),
              Undangan: (item) => item.title.toLowerCase().includes("undangan"),
            };

            const categoryFilter = categoryMap[filters.category];
            if (categoryFilter) {
              filteredResults = filteredResults.filter(categoryFilter);
            }
          }

          if (keyword) {
            const lowerKeyword = keyword.toLowerCase();
            filteredResults = filteredResults.filter(
              (item) =>
                item.title.toLowerCase().includes(lowerKeyword) ||
                item.organizer.toLowerCase().includes(lowerKeyword) ||
                item.location.toLowerCase().includes(lowerKeyword)
            );
          }

          setSearchResults(filteredResults);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [keyword, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <Container className="py-4">
      <Col lg={9}>
        <h3 className="mb-2">Semua hasil pencarian</h3>
        <h5 className="mb-4">Hasil pencarian untuk: "{keyword}"</h5>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Mencari hasil terbaik untuk Anda...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <Row>
            {searchResults.map((result) => (
              <Col key={result.id} xs={12} md={6} lg={4} className="mb-4">
                <Link to={"/detail"}>
                  <Card
                    className="h-100 shadow-sm rounded-4"
                    style={
                      hovered === result.id
                        ? { ...cardStyle, ...cardHoverStyle }
                        : cardStyle
                    }
                    onMouseEnter={() => setHovered(result.id)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => handleCardClick(result.id)}
                  >
                    <Card.Img
                      variant="top"
                      src={result.image}
                      style={{
                        height: "180px",
                        objectFit: "cover",
                        borderTopLeftRadius: "1rem",
                        borderTopRightRadius: "1rem",
                      }}
                    />
                    <Card.Body>
                      <Card.Title className="fs-6">{result.title}</Card.Title>
                      <div className="text-muted mb-2">{result.organizer}</div>
                      <div className="text-decoration-line-through text-muted small">
                        {result.originalPrice}
                      </div>
                      <div className="fw-bold mb-2">{result.price}</div>
                      <div className="d-flex align-items-center justify-content-between">
                        <span className="text-muted small">
                          <i className="bi bi-geo-alt me-1"></i>{" "}
                          {result.location}
                        </span>
                        <StarRating rating={result.rating} />
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <i
              className="bi bi-search"
              style={{ fontSize: "3rem", color: "#6c757d" }}
            ></i>
            <p className="mt-3">Tidak ada hasil ditemukan untuk "{keyword}".</p>
            <p>Coba kata kunci yang berbeda atau ubah filter pencarian Anda.</p>
          </div>
        )}
      </Col>
      <Col lg={3}>
        <SearchFilter onFilterChange={handleFilterChange} />
      </Col>
    </Container>
  );
};

export default Search;
