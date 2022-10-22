import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import StarsRating from 'stars-rating';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductForList = ({ images, idx }) => {
    return (
        <Card className='mb-3'>
            <Row>
                <Col lg={5}>
                    <Card.Img variant="top" src={"/imgs/" + images[idx] + "-category.jpg"} style={{ height: "250px", objectFit: "cover" }} />
                </Col>
                <Col lg={7}>
                    <Card.Body>
                        <Card.Title>Product name</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Text>
                            <StarsRating
                                count={5}
                                size={24}
                                value={5}
                            />
                        </Card.Text>
                        <Card.Text className='h4'>
                            $124
                        </Card.Text>
                        <LinkContainer to="/product-details">
                            <Button variant="primary">See Product</Button>
                        </LinkContainer>

                    </Card.Body>
                </Col>
            </Row>


        </Card>
    );
};

export default ProductForList;