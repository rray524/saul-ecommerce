import React from 'react';
import AdminLinkComponent from '../components/admin/AdminLinkComponent';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const AdminAnalytics = () => {
    const data = [
        {
            name: '1:00 AM',
            "2022 YEAR": 5999,
            "2021 YEAR": 4345,
        },
        {
            name: '2:00 AM',
            "2022 YEAR": 5678,
            "2021 YEAR": 4000,
        },
        {
            name: '3:00 AM',
            "2022 YEAR": 6789,
            "2021 YEAR": 4200,
        },
        {
            name: '4:00 AM',
            "2022 YEAR": 4577,
            "2021 YEAR": 4100,
        },
        {
            name: '5:00 AM',
            "2022 YEAR": 3456,
            "2021 YEAR": 1234,
        },
        {
            name: '6:00 AM',
            "2022 YEAR": 2345,
            "2021 YEAR": 1234,
        },
        {
            name: '7:00 AM',
            "2022 YEAR": 6789,
            "2021 YEAR": 3456,
        },
        {
            name: '8:00 AM',
            "2022 YEAR": 7900,
            "2021 YEAR": 2345,
        },
        {
            name: '9:00 AM',
            "2022 YEAR": 9000,
            "2021 YEAR": 2345,
        },
        {
            name: '10:00 AM',
            "2022 YEAR": 6754,
            "2021 YEAR": 3400,
        },
        {
            name: '11:00 AM',
            "2022 YEAR": 4533,
            "2021 YEAR": 1245,
        },
        {
            name: '12:00 PM',
            "2022 YEAR": 6500,
            "2021 YEAR": 4300,
        },
        {
            name: '1:00 PM',
            "2022 YEAR": 5672,
            "2021 YEAR": 3000,
        },
        {
            name: '2:00 PM',
            "2022 YEAR": 7890,
            "2021 YEAR": 1289,
        },
        {
            name: '3:00 PM',
            "2022 YEAR": 5698,
            "2021 YEAR": 3452,
        },
        {
            name: '4:00 PM',
            "2022 YEAR": 9870,
            "2021 YEAR": 4567,
        },
        {
            name: '5:00 PM',
            "2022 YEAR": 2390,
            "2021 YEAR": 569,
        },
        {
            name: '6:00 PM',
            "2022 YEAR": 3490,
            "2021 YEAR": 4300,
        },
        {
            name: '7:00 PM',
            "2022 YEAR": 3490,
            "2021 YEAR": 4300,
        },
        {
            name: '8:00 PM',
            "2022 YEAR": 3490,
            "2021 YEAR": 4300,
        },
        {
            name: '9:00 PM',
            "2022 YEAR": 3490,
            "2021 YEAR": 1300,
        },
        {
            name: '10:00 PM',
            "2022 YEAR": 18000,
            "2021 YEAR": 6770,
        },
        {
            name: '11:00 PM',
            "2022 YEAR": 9099,
            "2021 YEAR": 1279,
        },
        {
            name: '12:00 AM',
            "2022 YEAR": 13490,
            "2021 YEAR": 3300,

        },
    ];
    return (
        <Container>
            <Row>
                <Col md={2}>
                    <AdminLinkComponent />
                </Col>
                <Col md={10} className="mt-5">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={1500}
                            height={600}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" tick={{ stroke: 'red', strokeWidth: 1 }} label={{ value: "TIME" }} />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" tick={{ stroke: 'green', strokeWidth: 1 }} label={{ value: "REVENUE $", angle: -90, position: "insideLeft" }} />
                            <Tooltip />
                            <Legend />
                            <Line yAxisId="left" strokeWidth={3} type="monotone" dataKey="2021 YEAR" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line yAxisId="right" strokeWidth={4} type="monotone" dataKey="2022 YEAR" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>

            </Row>
            <Row>
                <Col md={10} className="mt-5">
                    <h1>Black Friday Cumulative Revenue 11/26/2022 VS 11/27/2021</h1>
                    <Form.Group controlId="firstDateToCompare">
                        <Form.Label>Select First Date To Compare</Form.Label>
                        <Form.Control
                            type="date"
                            name="firstDateToCompare"
                            placeholder="First Date To Compare"
                        />
                    </Form.Group>
                    <br />
                    <Form.Group controlId="secondDateToCompare">
                        <Form.Label>Select Second Date To Compare</Form.Label>
                        <Form.Control
                            type="date"
                            name="secondDateToCompare"
                            placeholder="Second Date To Compare"
                        />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminAnalytics;