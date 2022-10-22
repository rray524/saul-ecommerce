import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import AddToCartMsg from '../components/AddToCartMsg';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import StarsRating from 'stars-rating';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import Alert from 'react-bootstrap/Alert';
import ImageZoom from 'js-image-zoom';


const ProductDetails = () => {
    useEffect(() => {
        const options = {
            zoomWidth: 500,
            offset: { vertical: 0, horizontal: 10 }
        };
        new ImageZoom(document.getElementById("first"), options);
        new ImageZoom(document.getElementById("second"), options);
        new ImageZoom(document.getElementById("third"), options);
    })
    return (
        <Container>
            <Row>
                <br />
                <AddToCartMsg />
                <Col md="4" style={{ zIndex: 1000 }}>
                    <div id="first"><Image fluid src="/imgs/tablet-category.jpg" /></div>
                    <div id="second"><Image fluid src="/imgs/mobile-category.jpg" /></div>
                    <div id="third"><Image fluid src="/imgs/toy-category.jpg" /></div>
                </Col>
                <Col md="8">
                    <Row>
                        <Col md="8">
                            <ListGroup variant="flush">
                                <ListGroup.Item> <h1>Product Name</h1> </ListGroup.Item>
                                <ListGroup.Item>
                                    <StarsRating
                                        count={5}
                                        size={24}
                                        value={4.5}
                                        edit={false}
                                    />{"(1)"}
                                </ListGroup.Item>
                                <ListGroup.Item>Price: <strong>$345</strong></ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac Porta ac consectetur ac Porta ac consectetur ac Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>

                            <h3 className='my-4'>Review:</h3>
                            <ListGroup variant="flush">
                                {Array.from({ length: 5 }).map((item, idx) => (
                                    <>
                                        <ListGroup.Item>
                                            <h5>John Doe</h5>
                                            <br />
                                            <StarsRating
                                                count={5}
                                                size={24}
                                                value={4.5}
                                                edit={false}
                                            />

                                            20-09-2022<br />
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae possimus officiis architecto in dolorem. Eveniet facilis aliquid ut quasi!</p>
                                        </ListGroup.Item>
                                        <br />
                                    </>

                                ))}
                            </ListGroup>

                            <br />
                            <Alert variant="danger">
                                Please login first to create a review
                            </Alert>

                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Write a review!</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a review here"
                                        style={{ height: '100px' }}
                                    />
                                </Form.Group>

                                <Form.Select aria-label="Default select rating">
                                    <option>Your rating</option>
                                    <option value="1">1 (worst)</option>
                                    <option value="2">2 (very bad)</option>
                                    <option value="3">3 (bad)</option>
                                    <option value="4">4 (moderate)</option>
                                    <option value="5">5 (very good)</option>
                                </Form.Select>
                                <br />
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <br />
                        </Col>
                        <Col md="4">
                            <ListGroup>
                                <ListGroup.Item>Status: In stock</ListGroup.Item>
                                <ListGroup.Item>Price: <strong>$345</strong></ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Select aria-label="Default select example">
                                        <option>Quantity</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Form.Select>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Button variant="danger">Add to cart</Button>
                                </ListGroup.Item>

                            </ListGroup>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );
};

export default ProductDetails;