import React from 'react';
import Form from 'react-bootstrap/Form';

const price = () => {
    return (
        <>
            <Form.Label>Filter: <strong>Price no greater than $540</strong></Form.Label>
            <Form.Range min={10} max={1000} step={10} />
        </>
    );
};

export default price;