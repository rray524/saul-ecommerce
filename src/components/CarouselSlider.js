import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { LinkContainer } from 'react-router-bootstrap';

const CarouselSlider = () => {
    return (
        <Carousel style={{ position: 'relative' }} fade={true}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/imgs/carousel-1.jpg"
                    alt="First slide"
                    style={{ height: "400px", objectFit: "cover" }}
                />
                <Carousel.Caption>
                    <LinkContainer to="/product-details" style={{ cursor: "pointer" }}>
                        <h3>First slide label</h3>
                    </LinkContainer>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/imgs/carousel-2.jpg"
                    alt="Second slide"
                    style={{ height: "400px", objectFit: "cover" }}
                />

                <Carousel.Caption>
                    <LinkContainer to="/product-details" style={{ cursor: "pointer" }}>
                        <h3>Second slide label</h3>
                    </LinkContainer>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/imgs/carousel-3.jpg"
                    alt="Third slide"
                    style={{ height: "400px", objectFit: "cover" }}
                />

                <Carousel.Caption>
                    <LinkContainer to="/product-details" style={{ cursor: "pointer" }}>
                        <h3>Third slide label</h3>
                    </LinkContainer>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselSlider;