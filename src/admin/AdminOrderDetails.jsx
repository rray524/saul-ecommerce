import axios from 'axios';
import React from 'react';

import OrderDetailsPageComponent from './components/OrderDetailsPageComponent';

const AdminOrderDetails = () => {

    const fetchOrderDetails = async (id) => {
        const { data } = await axios.get(`/api/orders/order/${id}`)
        return data;
    }

    const orderDelivered = async (id) => {
        const { data } = await axios.patch(`/api/orders/orderDelivered/${id}`)
        return data;
    }

    return (
        <OrderDetailsPageComponent fetchOrderDetails={fetchOrderDetails} orderDelivered={orderDelivered} />
    );
};

export default AdminOrderDetails;