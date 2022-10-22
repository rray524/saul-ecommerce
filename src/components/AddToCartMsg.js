import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AddToCartMsg = () => {
    const [show, setShow] = useState(true);
    if (show) {
        return (
            <>
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>The product was added to your cart</Alert.Heading>
                    <Button variant="success">Go back</Button>{" "}
                    <Link to="/cart">
                        <Button variant="danger">Go to cart</Button>
                    </Link>
                </Alert>
            </>
        );
    }

};

export default AddToCartMsg;