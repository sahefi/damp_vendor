import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomBreadcrumb from "./components/CustomBreadCrumb";
import React from "react";
import StarRating from "../../components/StarRating";
import { detailData } from "./data/detailData";

const Detail = () => {
  const navigate = useNavigate();
  const breadcrumbItems = [
    { label: "Home", href: "#" },
    { label: "Vendor", href: "#" },
    { label: "Jakarta" },
  ];

  const data = detailData;

  const handleChatRedirect = () => {
    // Navigate to the chat page
    navigate('/pemesanan');
  };

  return (
    <Container className="py-4">
      <div className="mb-5">
        <CustomBreadcrumb items={breadcrumbItems} />
      </div>

      <Row className="mb-4">
        <Col md={8}>
          <Card className="border-0 h-100">
            <Card.Img
              src={data.images[0]}
              alt="Wedding Package"
              className="rounded h-100"
              style={{ objectFit: "cover" }}
            />
          </Card>
        </Col>
        <Col md={4}>
          <Row className="h-50 mb-2">
            <Col>
              <Card className="border-0 h-100">
                <Card.Img
                  src={data.images[1]}
                  alt="Wedding Package"
                  className="rounded h-100"
                  style={{ objectFit: "cover" }}
                />
              </Card>
            </Col>
          </Row>
          <Row className="h-50">
            <Col>
              <Card className="border-0 h-100">
                <Card.Img
                  src={data.images[2]}
                  alt="Wedding Package"
                  className="rounded h-100"
                  style={{ objectFit: "cover" }}
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8}>
          <h2 className="mb-2">{data.title}</h2>
          <p className="text-muted">by {data.vendor}</p>
        </Col>
        <Col md={4}>
          <Card className="border-0">
            <Card.Body className="d-flex align-items-center">
              <img
                src="img/detail_profile.png"
                alt="Vendor Profile"
                className="rounded-circle me-3"
                style={{ width: "60px", height: "60px" }}
              />
              <div>
                <h5 className="mb-0">{data.vendorInfo.name}</h5>
                <p className="mb-0 text-muted">
                  {data.vendorInfo.location} · {data.vendorInfo.category}
                </p>
                <div className="d-flex">
                  <StarRating rating={data.vendorInfo.rating} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card className="border-0 shadow-none mb-4">
            <Card.Body>
              <h4 className="mb-3">Detail</h4>
              {data.details.map((section, index) => (
                <div key={index} className="mb-4">
                  <h5>{section.title}</h5>
                  {section.items.map((item, idx) => (
                    <p key={idx} className="mb-2 text-muted">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </Card.Body>
          </Card>

          <Card className="border-0 shadow-none">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="mb-0">
                  Ulasan {data.vendorInfo.rating.toFixed(1)} (
                  {data.vendorInfo.reviews})
                </h4>
                <StarRating rating={data.vendorInfo.rating} />
              </div>

              <div className="flex-column gap-5 d-flex">
                {[1, 2].map((item, index) => (
                  <div key={index} className="mb-4 pb-4">
                    <div className="d-flex align-items-center mb-2">
                      <img
                        src="/img/detail_profile.png"
                        alt="Reviewer"
                        className="rounded-circle me-3"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <div>
                        <h6 className="mb-0">Anonim</h6>
                        <p className="text-muted mb-0">1 minggu lalu</p>
                      </div>
                    </div>
                    <p className="mt-2">
                      Lorem ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <div className="mt-3">
                      <div
                        className="bg-light p-3 rounded border-start border-4"
                        style={{
                          border: "#D9D9D9",
                        }}
                      >
                        <div className="mb-2 fw-bold text-secondary">
                          Balasan Pemilik Vendor
                        </div>
                        <p className="text-muted mb-0 small fst-italic">
                          Lorem ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                          when an unknown.
                        </p>
                        <small className="text-muted d-block mt-1">
                          1 minggu lalu
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card
            className="border-0 shadow-sm sticky-top"
            style={{ top: "20px" }}
          >
            <Card.Body>
              <h5 className="mb-3">Harga</h5>
              <p className="text-muted">
                <s>{data.discountedPrice}</s>
              </p>
              <h3 className="mb-4 mt-0">{data.price}</h3>

              <Button
                className="w-100 py-2"
                onClick={handleChatRedirect}
                style={{
                  color: "#fff",
                  backgroundColor: "#C5203C",
                  border: "#C5203C",
                }}
              >
                Pesan
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;