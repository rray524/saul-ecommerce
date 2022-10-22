import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const AdminEditUserPage = () => {
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
                <Col md={1} className="mx-auto"><Button variant="info"><Link to="/admin/products">Go Back</Link></Button></Col>
                <Col md={6}>
                    <h1>Edit User</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <br />
                        <Form.Group controlId="validationCustom01">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="User Name"
                                name="userName"
                                defaultValue="Rahul Ray"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Email address"
                                name="emailField"
                                defaultValue="rray524@gmail.com"

                            />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="validationCustom03">

                            <Form.Check
                                required
                                type="checkbox"
                                name="adminCheckbox"
                                label="Is Admin"

                            />

                        </Form.Group>
                        <br />
                        <Button type="submit">
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> UPDATE
                        </Button>
                        <br /><br />

                        <Alert variant="success">
                            User updated successfully
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminEditUserPage;