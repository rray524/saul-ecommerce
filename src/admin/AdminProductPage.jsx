import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import AdminLinkComponent from '../components/admin/AdminLinkComponent';


const AdminProductPage = () => {

    const deleteProduct = () => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            alert('Product deleted successfully');
        }
    }
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <AdminLinkComponent />
                </Col>
                <Col md={10}>
                    <h3 className='my-4'> Product List {" "}
                        <LinkContainer to="/admin/create-product">
                            <Button variant='primary' size="lg">Create New</Button>
                        </LinkContainer>
                    </h3>
                    <Table striped bordered hover className='my-5'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Edit/Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {[{ name: "Panasonic", price: "$234", category: "Electronics" }, { name: "Vivo", price: "$1234", category: "Mobile" }, { name: "Samsung", price: "$534", category: "Tablet" }].map((item, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <Link to="/admin/edit-product"><Button variant='primary' size="sm"><i className="bi bi-pencil-square"></i></Button></Link> / <Button variant='danger' size="sm" onClick={deleteProduct}><i className="bi bi-x-square-fill"></i></Button>
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

export default AdminProductPage;