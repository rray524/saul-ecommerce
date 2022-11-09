import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import SortOptionCom from '../components/SortOptionCom';
import Price from '../components/filterQueryComponents/Price';
import Category from '../components/filterQueryComponents/Category';
import Rating from '../components/filterQueryComponents/Rating';
import AttributeFilter from '../components/filterQueryComponents/AttributeFilter';
import ProductForList from '../components/ProductForList';
import PaginationComponent from '../components/PaginationComponent';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios'

const ProductListPage = () => {
    axios.get("/api/products").then((res) => console.log(res.data))
    return (
        <Container>

            <Row>
                <Col xs={12} md={3} className="my-4">
                    <ListGroup>
                        <ListGroup.Item className='py-3'>
                            <SortOptionCom />
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3'>
                            <Price />
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3'>
                            <Rating />
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3'>
                            <Category />
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3'>
                            <AttributeFilter />
                        </ListGroup.Item>
                        <ListGroup.Item className='py-3'>
                            <Button variant="primary">Filter</Button>{' '}
                            <Button variant="danger">Reset</Button>{' '}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={12} md={9} className="my-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <ProductForList key={idx} idx={idx} images={["toy", "book", "mobile", "powerbank", "tablet"]} />
                    ))}
                    <br />
                    <PaginationComponent />
                </Col>
            </Row>
        </Container>
    );
};

export default ProductListPage;