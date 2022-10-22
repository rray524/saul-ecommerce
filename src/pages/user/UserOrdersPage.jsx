import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


const UserOrdersPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3 className='my-4'>My Orders</h3>
                    <Table striped bordered hover className='my-5'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Delivered</th>
                                <th>Order Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>Mark</td>
                                    <td>12-09-2022</td>
                                    <td>1</td>
                                    <td><i class={item}></i></td>
                                    <td><Link to="/user/user-order-details">Order Details</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default UserOrdersPage;