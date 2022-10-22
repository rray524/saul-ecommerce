import React from 'react';
import CarouselSlider from '../components/CarouselSlider';
import CategoryCard from '../components/CategoryCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
    const categories = [
        "mobile",
        "laptop",
        "drone",
        "cosmetics",
        "book",
        "electronics"
    ]
    return (
        <>
            <CarouselSlider />
            <Container>
                <Row className='g-4 my-5'>

                    {
                        categories.map((category, idx) => (
                            <Col md={4} sm={4} xs={6} key={idx}>
                                <CategoryCard category={category} idx={idx} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>

        </>
    );
};

export default Home;