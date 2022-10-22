import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';


const UserProfilePage = () => {
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
                    <h1>User Profile</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                placeholder="Your Name"
                                name="fullName"
                                defaultValue="John Doe"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control
                                disabled
                                type="email"
                                defaultValue="john@example.com"
                                name="emailAddress"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Your Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue="343252"
                                name="phoneNumber"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue="Road #21, Salt lake, Sector - 5"
                                name="address"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom05">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue="India"
                                name="countryName"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom06">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue="343252"
                                name="phoneNumber"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom07">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue="Kolkata"
                                name="cityName"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom08">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue="WB"
                                name="state"
                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom09">
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
                        <Form.Group controlId="validationCustom10">
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

                        <Button type="submit">
                            Update
                        </Button>
                        <br /><br />

                        <Alert variant="success">
                            User profile updated successfully
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfilePage;