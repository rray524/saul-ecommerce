import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import ShoppingCartProduct from '../../components/ShoppingCartProduct';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';

const UserOrderDetails = () => {
    return (
        <Container>
            <Row className='my-5'>
                <h3>Order Details</h3>
                <Col md={8}>
                    <Row>
                        <Col md={6}>
                            <h4>Shipping</h4>
                            <p><strong>Name:</strong> John Doe</p>
                            <p><strong>Address:</strong> street#21, house#34</p>
                            <p><strong>Phone:</strong> 343434</p>
                            <Alert variant="danger">
                                Not delivered
                            </Alert>
                        </Col>
                        <Col md={6}>
                            <h4>Payment Method</h4>
                            <Form.Select aria-label="Default select payment" className='my-3'>
                                <option>Select Payment Method</option>
                                <option value="1">Paypal</option>
                                <option value="2">COD = CASH ON DELIVERY</option>
                            </Form.Select>
                            <Alert variant="success">
                                Paid on 3-3-2022
                            </Alert>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <h4>Order items</h4>
                            <ShoppingCartProduct />
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>

                    <ListGroup>
                        <ListGroup.Item>
                            <h4>Order Summary</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Items price (after tax): <strong>$700</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            shipping: <strong>included</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            tax: <strong>included</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Total price: <strong>$100</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <div className="d-grid gap-2">
                                <Button variant="danger" size="lg">
                                    Pay for the order
                                </Button>
                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default UserOrderDetails;