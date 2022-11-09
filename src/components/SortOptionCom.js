import React from 'react';
import Form from 'react-bootstrap/Form';

const SortOptionCom = () => {
    return (
        <Form.Select aria-label="Default select saulo-ecom">
            <option>SORT BY</option>
            <option value="price_1">Price: Low to high</option>
            <option value="price_-1">Price: High to Low</option>
            <option value="3">Customer Rating</option>
            <option value="name_1">A-Z</option>
            <option value="name_-1">Z-A</option>
        </Form.Select>
    );
};

export default SortOptionCom;