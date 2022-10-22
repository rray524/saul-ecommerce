import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import Table from 'react-bootstrap/esm/Table';
import Image from 'react-bootstrap/esm/Image';

const AdminEditProductPage = () => {
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
                    <h1>Edit Product</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                        <Form.Group controlId="validationCustom01">
                            <Form.Label>Product name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Product Name"
                                name="productName"
                                defaultValue="Low cost mobile cover at $100"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a name</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom02">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control required as="textarea" rows={3} />
                            <Form.Control.Feedback type="invalid">Product description required</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationCustom03">
                            <Form.Label>Count in stock</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Stock availability"
                                name="stock"
                                defaultValue="in-stock"

                            />
                        </Form.Group>
                        <Form.Group controlId="validationCustom04">
                            <Form.Label>Price $</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Price"
                                name="price"
                                defaultValue="100"

                            />

                        </Form.Group>
                        <Form.Group controlId="validationCustom05">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" type="select" aria-label="Default select product-create" required>
                                <option value="">Select Category</option>
                                <option value="1">Color</option>

                            </Form.Control>
                            <Form.Control.Feedback type="invalid">Please select a category</Form.Control.Feedback>
                        </Form.Group>

                        <Row>
                            <Col md={6} className="my-3">
                                <Form.Group controlId="validationCustom07">
                                    <Form.Label>Choose Attribute & set key</Form.Label>
                                    <Form.Control as="select" type="select" aria-label="Default select attribute_key" required>
                                        <option value="">Select Attribute</option>
                                        <option value="1">Green</option>

                                    </Form.Control>

                                </Form.Group>
                            </Col>
                            <Col md={6} className="my-3">
                                <Form.Group controlId="validationCustom08">
                                    <Form.Label>Choose Attribute & set value</Form.Label>
                                    <Form.Control as="select" type="select" aria-label="Default select attribute_value" required>
                                        <option value="">Select Attribute</option>
                                        <option value="1">Laptop</option>
                                        <option value="2">TV</option>
                                        <option value="3">Mobile</option>
                                        <option value="3">Tablet</option>
                                        <option value="3">Electronics</option>
                                    </Form.Control>

                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Table hover className='my-5'>
                                    <thead>
                                        <tr>
                                            <th>Attribute</th>
                                            <th>Value</th>
                                            <th>Delete</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: 3 }).map((item, idx) => (
                                            <tr key={idx}>
                                                <td>test</td>
                                                <td>Mark</td>
                                                <td><CloseButton /></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="validationCustom09">
                                    <Form.Label>Create new attribute</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Attribute Name"
                                        name="attribute_name"
                                    />

                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="validationCustom10">
                                    <Form.Label>Attribute value</Form.Label>
                                    <Form.Control

                                        type="text"
                                        placeholder="Attribute Value"
                                        name="attribute_value"
                                    />

                                </Form.Group>
                            </Col>
                            <Col md={12} className="mt-3">
                                <Alert variant='info'>After typing attribute key & value press enter.</Alert>
                            </Col>
                        </Row>

                        <br />
                        <Form.Group controlId="validationCustom07" className="mb-3">
                            <Form.Label>Upload images</Form.Label>
                            <Form.Control type="file" multiple required />
                        </Form.Group>
                        <Row>
                            <Col md={3}>
                                <Form.Group controlId="validationCustom08" className="mb-3" style={{ position: "relative" }}>
                                    <Form.Label>Images</Form.Label>
                                    <Image src='/imgs/carousel-3.jpg' fluid />
                                    <i style={{ fontSize: "23px", cursor: "pointer", position: "absolute", top: "19px", left: "-10px" }} className="bi bi-x-lg text-danger"></i>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="validationCustom08" className="mb-3" style={{ position: "relative" }}>
                                    <Form.Label>Images</Form.Label>
                                    <Image src='/imgs/carousel-3.jpg' fluid />
                                    <i style={{ fontSize: "23px", cursor: "pointer", position: "absolute", top: "19px", left: "-10px" }} className="bi bi-x-lg text-danger"></i>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="validationCustom08" className="mb-3" style={{ position: "relative" }}>
                                    <Form.Label>Images</Form.Label>
                                    <Image src='/imgs/carousel-3.jpg' fluid />
                                    <i style={{ fontSize: "23px", cursor: "pointer", position: "absolute", top: "19px", left: "-10px" }} className="bi bi-x-lg text-danger"></i>
                                </Form.Group>
                            </Col>
                        </Row>

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
                            Product created successfully
                        </Alert>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminEditProductPage;