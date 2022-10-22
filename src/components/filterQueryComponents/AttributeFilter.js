import React from 'react';
import Form from 'react-bootstrap/Form';

const AttributeFilter = () => {
    return (
        <>

            {[{ Color: ['green', 'red', 'cyan'] }, { Ram: ['1 TB', '2 TB', '3 TB', '4 TB'] }].map((item, idx) => (
                <>
                    <Form.Label key={idx} className="mb-3">
                        <strong>{Object.keys(item)}</strong>

                    </Form.Label>
                    <br />
                    {item[Object.keys(item)].map((i, idx) => (
                        <Form.Check
                            key={idx}
                            type="checkbox"
                            label={i}
                        />
                    ))}
                </>
            ))}


        </>
    );
};

export default AttributeFilter;