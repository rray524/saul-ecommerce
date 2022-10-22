import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const Register = () => {
    const [validated, setValidated] = useState(false);

    const onChange = () => {
        const password = document.querySelector("input[name=yourPass]");
        const confirmPassword = document.querySelector("input[name=yourPassRepeat]");

        if (confirmPassword.value === password.value) {
            confirmPassword.setCustomValidity("")
        }
        else {
            confirmPassword.setCustomValidity("Password do not match");
        }
    }

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
                    <h1>Register</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Enter your name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Your Name"
                                name="fullName"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Enter Your Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter your email address"
                                name="emailAddress"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid email address</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter your password"
                                name="yourPass"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a valid password</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Repeat your password again"
                                name="yourPassRepeat"
                                minLength={6}
                                onChange={onChange}
                            />
                            <Form.Control.Feedback type="invalid">Both password should match</Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Row>
                            <Col>
                                <p>Do you have an account already?, <Link to="/login">Login</Link></p>
                            </Col>
                        </Row>

                        <Button type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> Register now
                        </Button>
                        <br /><br />
                        <Alert variant="danger">
                            User email is already registered
                        </Alert>
                        <Alert variant="success">
                            User created successfully
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;