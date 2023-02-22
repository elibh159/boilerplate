import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Register from "../components/register";
import Login from "../components/login";

const AuthLayout: () => JSX.Element = () => {
  return (
    <Container fluid className='text-center'>
      <Row className='justify-content-center align-items-center m-5'>
        <Col md={6}>
          <Register />
        </Col>
        <Col md={6}>
          <Login />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthLayout;