import React from 'react';
import ProductPageComponent from './components/ProductPageComponent';
import axios from 'axios';

const AdminProductPage = () => {

    const fetchProducts = async () => {
        const { data } = await axios.get("/api/products");
        return data.products;
    }

    const deleteProducts = async (id) => {
        const { data } = await axios.delete(`/api/products/admin/${id}`);
        return data.message;
    }

    return (
        <ProductPageComponent fetchProducts={fetchProducts} deleteProducts={deleteProducts} />
    );
};

export default AdminProductPage;