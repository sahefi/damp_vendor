import { Button, Form, Image } from "react-bootstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      onSubmit({ email, password });
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-4" controlId="formEmail">
        <Form.Label>Email :</Form.Label>
        <Form.Control
          type="email"
          placeholder="Type here..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formPassword">
        <Form.Label>Password :</Form.Label>
        <Form.Control
          type="password"
          placeholder="Type here..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide your password.
        </Form.Control.Feedback>
      </Form.Group>

      <div className="text-end mb-4">
        <Link
          to="/forgot-password"
          className="text-primary text-decoration-none small"
        >
          *Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        className="w-100 mt-3 fw-bold"
        style={{
          backgroundColor: "#dc3545",
          border: "none",
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Login
      </Button>

      <div className="text-center mt-3 mb-4">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="text-primary fw-bold text-decoration-none"
        >
          Sign up here!
        </Link>
      </div>

      <Button
        variant="light"
        className="w-100 mt-3 d-flex align-items-center justify-content-center gap-2 border"
        style={{
          backgroundColor: "#f8f9fa",
          color: "#212529",
          border: "1px solid #dee2e6",
          width: "100%",
          padding: "8px",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Image src="icon/google.svg" alt="Google Icon" width={20} height={20} />
        Login with Google
      </Button>
    </Form>
  );
};

export default LoginForm;
