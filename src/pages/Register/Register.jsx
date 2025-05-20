import { Card, Col, Container, Row } from "react-bootstrap";

import AuthSwiper from "../../components/authSwiper";
import React from "react";
import RegisterForm from "./components/Form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    console.log("Register attempt with:", { email, password });
    navigate("/", { replace: true });
  };

  return (
    <Container
      fluid
      style={{
        height: "calc(100dvh - 70px)",
      }}
    >
      <Row className="align-items-center justify-content-center h-100">
        <Col md={6}>
           <Card className="p-4 shadow" style={{ borderRadius: "15px" }}>
            <Row>
              <Col md={6}>
                <AuthSwiper />
              </Col>
              <Col md={6}>
                <div className="px-4 py-3">
                  <h2 style={{ fontWeight: "bold", marginBottom: "30px" }}>
                    Register
                  </h2>
                  <RegisterForm onSubmit={onSubmit} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
