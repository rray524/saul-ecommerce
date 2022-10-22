import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const AdminLinkComponent = () => {
    return (
        <Nav className="flex-column my-5 bg-light">
            <Nav.Link as={Link} to="/admin/order-page">
                Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/user" eventKey="/admin/user">
                User List
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/products" eventKey="/admin/products">
                Products
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/analytics" eventKey="/admin/analytics">
                Analytics
            </Nav.Link>
            <Nav.Link as={Link} to="/admin/chart" eventKey="/admin/chart">
                Charts
            </Nav.Link>

        </Nav>
    );
};

export default AdminLinkComponent;