import React from 'react';
import OrderPageComponent from './components/OrderPageComponent';
import axios from 'axios';

const AdminOrderPage = () => {
    const fetchOrders = async () => {
        const { data } = await axios.get("/api/orders/admin")
        return data.orders;
    }

    return (
        <OrderPageComponent fetchOrders={fetchOrders} />
    );
};

export default AdminOrderPage;