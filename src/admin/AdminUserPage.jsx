import React from 'react';
import UserPageComponent from './components/UserPageComponent';
import axios from 'axios';

const AdminUserPage = () => {

    const fetchUsers = async () => {
        const { data } = await axios.get("/api/users");
        return data
    }

    const deleteUser = async (id) => {
        const { data } = await axios.delete(`/api/users/${id}`);
        return data.message;

    }
    return (
        <UserPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />
    );
};

export default AdminUserPage;