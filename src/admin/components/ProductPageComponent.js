import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import AdminLinkComponent from '../../components/admin/AdminLinkComponent';
import Spinner from 'react-bootstrap/Spinner';

const ProductPageComponent = ({ fetchProducts, deleteProducts }) => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [productRemove, setProductRemove] = useState(false);

    useEffect(() => {
        fetchProducts()
            .then(res => {
                setProducts(res)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data.message ? err.response.data.message : err.response.data);
            })
    }, [productRemove])

    const deleteProduct = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const res = await deleteProducts(id);
            if (res === "Product removed successfully") {
                setProductRemove(true)
            }
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
                    {isLoading ? <div className="spinner-parent">
                        <Spinner animation="grow" variant="success" />
                    </div> : <Table striped bordered hover className='my-5'>
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
                            {products.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.category}</td>
                                    <td>
                                        <Link to={`/admin/edit-product/${item._id}`}><Button variant='primary' size="sm"><i className="bi bi-pencil-square"></i></Button></Link> / <Button variant='danger' size="sm" onClick={() => deleteProduct(item._id)}><i className="bi bi-x-square-fill"></i></Button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>}
                </Col>
            </Row>
        </Container>
    );
};

export default ProductPageComponent;