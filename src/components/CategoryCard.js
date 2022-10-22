import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const CategoryCard = ({ category, idx }) => {

    const images = [
        "/imgs/carousel-1.jpg",
        "/imgs/carousel-2.jpg",
        "/imgs/carousel-3.jpg",
        "/imgs/Electronics.webp",
        "/imgs/drone.webp",
        "/imgs/cos.webp"

    ]
    return (
        <Card>
            <Card.Img variant="top" src={images[idx]} style={{ height: "250px", objectFit: "cover" }} />
            <Card.Body>
                <Card.Title>{category}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <LinkContainer to="/product-list">
                    <Button variant="primary">Go to category</Button>
                </LinkContainer>

            </Card.Body>
        </Card>
    );
};

export default CategoryCard;