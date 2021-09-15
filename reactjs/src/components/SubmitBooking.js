import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
class SubmitBooking extends Component {
    constructor(props) {
        super(props);
        this.state = { disable: false };
        this.state = {
            inputFields: [{ first: '', last: '', gender: '', flight_id: 0, email: JSON.parse(localStorage.getItem('user-info')).email }]
        };
        this.submitDetails = this.submitDetails.bind(this);
        this.flightChange = this.flightChange.bind(this);
        this.handleAddFields = this.handleAddFields.bind(this);
        this.handleRemoveFields = this.handleRemoveFields.bind(this);
    }
    flightChange = (index, event) => {
        console.log(index);
        const values = [...this.state.inputFields];
        values[index][event.target.name] = event.target.value;
        this.setState({ inputFields: values });

    }
    submitDetails(event) {
        event.preventDefault();
        console.log(this.state.inputFields)
        axios.post("http://localhost:8081/book/add", this.state.inputFields);
        this.setState({ disable: true })
        window.location.href="http://localhost:3001/";
        // window.location.href="http://localhost:3000/pay";


    }
    handleAddFields() {
        this.setState({ disable: false })
        console.log("hello")
        const values = [...this.state.inputFields, { first: '', last: '', gender: '', flight_id: 0, email: JSON.parse(localStorage.getItem('user-info')).email }];
        this.setState({ inputFields: values })
    }
    handleRemoveFields(index) {
        this.setState({ disable: false })
        console.log("hello")
        const values = [...this.state.inputFields];
        values.splice(index, 1)
        this.setState({ inputFields: values })
    }
    render() {
        return (
            <div>
                <Card style={{opacity:"0.85",width:"90%",margin:"auto"}} className={"border border-primary bg-dark text-white"}>
                    <Card.Header>Add Details</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.submitDetails}>
                            {
                                this.state.inputFields.map((inputField, index) =>
                                    <div key={index}>
                                        <Row>
                                            <Col>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" style={{ borderLeftWidth: '30px' }} placeholder="" name="first" onChange={event => this.flightChange(index, event)} required />
                                            </Col>
                                            <Col>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" style={{ borderLeftWidth: '30px' }} placeholder="" name="last" onChange={event => this.flightChange(index, event)} required />
                                            </Col>
                                            <Col>
                                                <Form.Group style={{ width: '100%', margin: 'auto' }}>
                                                    <Form.Label>Gender</Form.Label>
                                                    <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="gender" onChange={event => this.flightChange(index, event)} required >
                                                        <option value="-" hidden>-</option>
                                                        <option value="male" >Male</option>
                                                        <option value="female">Female</option>
                                                        <option value="others">Others</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Button
                                                    onClick={this.handleAddFields}
                                                    style={{ width: "100%", margin: "30px auto" }} variant="primary" >
                                                    Add</Button>
                                            </Col>
                                            <Col>
                                                <Button
                                                    onClick={() => this.handleRemoveFields(index)}
                                                    style={{ width: "100%", margin: "30px auto" }} variant="warning" >
                                                    Delete</Button>
                                            </Col>
                                        </Row>
                                        <Row>

                                        </Row>
                                    </div>
                                )
                            }
                            <Button type="submit" style={{ width: "100%", margin: '6.5px auto' }} variant="success">Submit</Button>

                        </Form>
                    </Card.Body>
                </Card>
                <br />
            </div>
        )
    }
}

export default SubmitBooking
