import { Card, Col, Container, Row } from "react-bootstrap";

import AuthSwiper from "../../components/authSwiper";
import LoginForm from "./components/Form";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = ({ email, password }) => {
    console.log("Login attempt with:", { email, password });
    navigate("/", { replace: true });
    localStorage.setItem('isLogin', 'true');
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
                  <h2 className="fw-bold mb-4">Login</h2>
                  <LoginForm onSubmit={onSubmit} />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
