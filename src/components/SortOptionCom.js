import React from 'react';
import Form from 'react-bootstrap/Form';

const SortOptionCom = () => {
    return (
        <Form.Select aria-label="Default select saulo-ecom">
            <option>SORT BY</option>
            <option value="1">Price: Low to high</option>
            <option value="2">Price: Hight to Low</option>
            <option value="3">Customer Rating</option>
            <option value="4">A-Z</option>
            <option value="5">Z-A</option>
        </Form.Select>
    );
};

export default SortOptionCom;