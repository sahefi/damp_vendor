import { Button, Form, Image } from "react-bootstrap";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const RegisterForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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

      <Form.Group className="mb-2" controlId="formPhone">
        <Form.Label>Telepon :</Form.Label>
        <Form.Control
          placeholder="Type here..."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Please provide your phone number.
        </Form.Control.Feedback>
      </Form.Group>

      <Button
        type="submit"
        style={{
          backgroundColor: "#dc3545",
          border: "none",
          width: "100%",
          padding: "10px",
          marginTop: "20px",
          fontWeight: "bold",
        }}
      >
        Register
      </Button>

      <div className="text-center mt-3 mb-4">
        Already have an account?{" "}
        <Link
          to="/login"
          className="fw-bold text-decoration-none"
          style={{ color: "#6610f2" }}
        >
          Sign in here!
        </Link>
      </div>

      <Button
        variant="light"
        className="d-flex align-items-center justify-content-center w-100 mt-4 gap-2"
        style={{
          backgroundColor: "#f8f9fa",
          color: "#212529",
          border: "1px solid #dee2e6",
          padding: "8px",
        }}
      >
        <Image
          src="icon/google.svg"
          alt="Google Icon"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
        Register with Google
      </Button>
    </Form>
  );
};

export default RegisterForm;
