import React from 'react';
import Form from 'react-bootstrap/Form';

const category = () => {
    return (
        <Form>
            <Form.Label><strong>Categories:</strong></Form.Label>
            {Array.from({ length: 5 }).map((_, idx) => (
                <Form.Check key={idx} type="checkbox" id={`check-api2-${idx}`}>
                    <Form.Check.Input type="checkbox" isValid />
                    <Form.Check.Label style={{ cursor: "pointer" }}>
                        Category - {idx}
                    </Form.Check.Label>
                </Form.Check>
            ))}
        </Form>
    );
};

export default category;