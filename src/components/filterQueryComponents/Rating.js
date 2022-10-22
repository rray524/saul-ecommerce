import React from 'react';
import Form from 'react-bootstrap/Form';
import StarsRating from 'stars-rating'

const rating = () => {
    return (
        <><Form.Label><strong>Rating:</strong></Form.Label>
            {Array.from({ length: 5 }).map((_, idx) => (
                <Form.Check key={idx} type="checkbox" id={`check-api-${idx}`}>
                    <Form.Check.Input type="checkbox" isValid />
                    <Form.Check.Label>
                        <StarsRating
                            count={5}
                            size={24}
                        />
                    </Form.Check.Label>
                </Form.Check>
            ))}

        </>
    );
};

export default rating;