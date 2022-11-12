import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';

const ShoppingCartProduct = ({ item }) => {
    console.log(item);
    return (
        <>
            <ListGroup.Item>
                <Row style={{ alignItems: 'center' }}>
                    <Col md={2}>
                        <Image fluid src={item.image.path} />
                    </Col>
                    <Col md={3}>
                        <h5>{item.name}</h5>
                    </Col>
                    <Col md={1}>
                        <strong>${item.price}</strong>
                    </Col>
                    <Col md={3}>
                        <Form.Select aria-label="Default select quantity" value={item.quantity} disabled={true}>
                            {
                                [...Array(item.stock).keys()].map((x, idx) => (
                                    <option key={idx} value={x + 1}>{x + 1}</option>
                                ))
                            }
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