import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import ShoppingCartProduct from '../../components/ShoppingCartProduct';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const OrderDetailsPageComponent = ({ fetchOrderDetails, orderDelivered }) => {
    const { id } = useParams();
    const [order, setOrder] = useState({})
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [isDelivered, setIsDelivered] = useState(false)
    useEffect(() => {
        fetchOrderDetails(id)
            .then((res) => {
                setOrder(res.order)
            })
            .catch(err => {
                console.log(err.response.data.message ? err.response.data.message : err.response.data);
            })
    }, [isDelivered])

    // console.log(order);
    return (
        <Container>
            <Row className='my-5'>
                <h3>Order Details</h3>
                <Col md={8}>
                    <Row>
                        <Col md={6}>
                            <h4>Shipping</h4>
                            <p><strong>Name:</strong> {order.user?.name}</p>
                            <p><strong>Address:</strong> {order.user?.address}</p>
                            <p><strong>Phone:</strong> {order.user?.phone}</p>
                            {order?.isDelivered ? <Alert variant="success">
                                Delivered
                            </Alert> : <Alert variant="danger">
                                Not delivered
                            </Alert>}

                        </Col>
                        <Col md={6}>
                            <h4>Payment Method</h4>
                            <Form.Select aria-label="Default select payment" value={order?.paymentMethod} disabled={true} className='my-3'>
                                <option>Select Payment Method</option>
                                <option value="Paypal">Paypal</option>
                                <option value="COD">COD = CASH ON DELIVERY</option>
                            </Form.Select>
                            {order?.isPaid ? <Alert variant="success">
                                Paid on {order.createdAt.substring(0, 10)}
                            </Alert> : <Alert variant="danger">
                                Not Paid
                            </Alert>}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <h4>Order items</h4>
                            {
                                order.cartItems?.map((item, idx) => (
                                    <ShoppingCartProduct key={idx} item={item} />
                                ))
                            }

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
                                <Button variant="danger" disabled={buttonDisabled} size="lg" onClick={() => orderDelivered(id).then(res => {
                                    if (res === "Order delivered successfully") {
                                        setIsDelivered(true);
                                    }
                                }).catch(err => {
                                    console.log(err.response.data.message ? err.response.data.message : err.response.data);
                                })}>

                                    {order?.isDelivered ? <span>Delivered</span> : <span>Mark as Delivered</span>}
                                </Button>

                            </div>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default OrderDetailsPageComponent;