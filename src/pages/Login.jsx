import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Container className='my-5'>
            <Row>
                <Col md={6} className="mx-auto">
                    <h1>Login</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>


                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email address"
                                name="emailAddress"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="yourPass"

                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="validationCustom03">
                            <Form.Check
                                required
                                type="checkbox"
                                placeholder="Enter your password"
                                name="yourPass"
                                label="Do not logout"

                            />

                        </Form.Group>

                        <br />
                        <Row>
                            <Col>
                                <p>You are not Registered yet?, <Link to="/register">Register</Link></p>
                            </Col>
                        </Row>

                        <Button type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> Login
                        </Button>
                        <br /><br />
                        <Alert variant="danger">
                            wrong credentials
                        </Alert>

                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;