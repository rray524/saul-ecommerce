import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Navbar.Brand>Saul E-COMMERCE</Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <InputGroup>
                                <DropdownButton id="dropdown-basic-button" title="All">

                                    <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Book</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Cars</Dropdown.Item>
                                    <Dropdown.Item href="#/action-1">Mobile</Dropdown.Item>

                                </DropdownButton>
                                <Form.Control aria-label="Search Product" placeholder='Search in shop....' />
                                <Button variant="warning"><i className="bi bi-search"></i></Button>
                            </InputGroup>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/admin/order-page" eventKey="/admin/order-page">
                                Admin
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login" eventKey="/login">
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/register" eventKey="/register">
                                Register
                            </Nav.Link>
                            <NavDropdown
                                id="nav-dropdown"
                                title="User Name"
                            >
                                <NavDropdown.Item as={Link} to="/user/user-order" eventKey="/user/user-order">My Order</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/user/user-profile" eventKey="/user/user-profile">My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/cart" eventKey="/cart">
                                <i className="bi bi-bag-heart me-1"></i>
                                Cart
                                <Badge pill bg="success" className='ms-1'>
                                    2
                                </Badge>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;