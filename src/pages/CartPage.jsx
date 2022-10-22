import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import ShoppingCartProduct from '../components/ShoppingCartProduct';
import { Link } from 'react-router-dom';

const CartPage = () => {
    return (
        <>

            <Container>
                <Row className='my-5'>
                    <h2>Shopping Cart</h2>
                    <Col md={8}>
                        <ListGroup variant="flush">
                            {Array.from({ length: 2 }).map((_, idx) => (
                                <ShoppingCartProduct key={idx} />
                            ))}
                        </ListGroup>

                        <Alert variant="success">
                            Your cart is empty
                        </Alert>
                    </Col>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item> <h4>Subtotal (2 products )</h4> </ListGroup.Item>
                            <ListGroup.Item> <h6>Price: <strong>$340</strong></h6> </ListGroup.Item>
                            <ListGroup.Item>
                                <Link to="/user/user-cart-details">
                                    <Button variant="primary">Proceed to Checkout</Button>
                                </Link>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CartPage;