import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import AdminLinkComponent from '../components/admin/AdminLinkComponent';


const AdminUserPage = () => {
    const deleteProduct = () => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            alert('User deleted successfully');
        }
    }
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <AdminLinkComponent />
                </Col>
                <Col md={10}>
                    <h3 className='my-4'> Orders</h3>
                    <Table striped bordered hover className='my-5'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Is Admin</th>
                                <th>Edit/Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>Mark Ram</td>
                                    <td>rray524@gmail.com</td>
                                    <td><i class={item}></i></td>
                                    <td>
                                        <Link to="/admin/edit-user"><Button variant='primary' size="sm"><i className="bi bi-pencil-square"></i></Button></Link> / <Button variant='danger' size="sm" onClick={deleteProduct}><i className="bi bi-x-square-fill"></i></Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminUserPage;