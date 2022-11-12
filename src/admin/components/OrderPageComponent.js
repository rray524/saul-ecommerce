
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import AdminLinkComponent from '../../components/admin/AdminLinkComponent';
import Spinner from 'react-bootstrap/Spinner';

const OrderPageComponent = ({ fetchOrders }) => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchOrders()
            .then(res => {
                setOrders(res)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data.message ? err.response.data.message : err.response.data);
            })
    }, [])
    console.log(orders)
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <AdminLinkComponent />
                </Col>
                <Col md={10}>
                    <h3 className='my-4'> Orders</h3>
                    {isLoading ? <div className="spinner-parent">
                        <Spinner animation="grow" variant="success" />
                    </div> : <Table striped bordered hover className='my-5'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User</th>
                                <th>Date</th>
                                <th>Total</th>
                                <th>Delivered</th>
                                <th>Payment</th>
                                <th>Order Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.user?.name}</td>
                                    <td>{item.createdAt.substring(0, 10)}</td>
                                    <td>{item.orderTotal.cartSubTotal}</td>
                                    <td>{item.isDelivered ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}</td>
                                    <td>{item?.paymentMethod}</td>
                                    <td><Link to={`/admin/order-details/${item._id}`}>Order Details</Link></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>}
                </Col>
            </Row>
        </Container>
    );
};

export default OrderPageComponent;