import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const ShoppingCartProduct = () => {
    return (
        <>
            <ListGroup.Item>
                <Row style={{ alignItems: 'center' }}>
                    <Col md={2}>
                        <Image fluid src="/imgs/book-category.jpg" />
                    </Col>
                    <Col md={3}>
                        <h5>Lorem, ipsum dolor.</h5>
                    </Col>
                    <Col md={1}>
                        <strong>$85</strong>
                    </Col>
                    <Col md={3}>
                        <Form.Select aria-label="Default select quantity">
                            <option>Qty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </Col>
                    <Col md={3}>
                        <Button variant="secondary" onClick={() => (
                            window.confirm('Are you sure you want to delete this item?')
                        )}>
                            <i className="bi bi-archive-fill"></i>
                        </Button>
                    </Col>

                </Row>
            </ListGroup.Item>
        </>
    );
};

export default ShoppingCartProduct;