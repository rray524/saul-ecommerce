import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import AdminLinkComponent from '../../components/admin/AdminLinkComponent';
import Spinner from 'react-bootstrap/Spinner';


const UserPageComponent = ({ fetchUsers, deleteUser }) => {

    const [users, setUsers] = useState([])
    const [userRemove, setUserRemove] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const deleteProduct = async (id) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            const result = await deleteUser(id);
            if (result === "User removed successfully") {
                setUserRemove(!userRemove);
            }
            // console.log(userRemove)
            // alert('User deleted successfully');
            // setCounter(counter + 1);
        }
    }
    useEffect(() => {

        fetchUsers()
            .then(res => {
                setUsers(res.users)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err.response.data.message ? err.response.data.message : err.response.data);
            })

    }, [userRemove])

    return (
        <Container>

            <Row>
                <Col md={2}>
                    <AdminLinkComponent />
                </Col>
                <Col md={10}>
                    <h3 className='my-4'> Orders </h3>
                    {isLoading ? <div className="spinner-parent">
                        <Spinner animation="grow" variant="success" />
                    </div> : <Table striped bordered hover className='my-5'>
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

                            {users.map((item, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        {item.isAdmin ? <i className="bi bi-check-lg text-success"></i> : <i className="bi bi-x-lg text-danger"></i>}
                                    </td>
                                    <td>
                                        <Link to={`/admin/edit-user/${item._id}`}><Button variant='primary' size="sm"><i className="bi bi-pencil-square"></i></Button></Link> / <Button variant='danger' size="sm" onClick={() => deleteProduct(item._id)}><i className="bi bi-x-square-fill"></i></Button>
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

export default UserPageComponent;