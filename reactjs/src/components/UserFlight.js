import React, { Component } from 'react'
import { Card, Form, Button, Col, Row } from 'react-bootstrap'
import axios from 'axios';
import '../App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Moment from 'moment';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
class UserFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: []
        };
        this.state = { dept: '', arr: '', date: '', show: false };
        this.submitFlight = this.submitFlight.bind(this);
        this.flightChange = this.flightChange.bind(this);
        this.flightChange2 = this.flightChange2.bind(this);

    }
    submitFlight(event) {
        // alert(this.state.from + this.state.to + this.state.date);
        event.preventDefault();

        const flight = {
            dept: this.state.dept,
            arr: this.state.arr,
            date: this.state.date
        };
        axios.post("http://localhost:8080/flight/search", flight)
            .then(response => {
                if (response.data != null) {
                    this.setState({ show: true });
                }
                else {
                    console.log("hi")
                    this.setState({ show: true });
                }
            }).then((data) => this.setState({ flights: data }));
        console.log(this.state.flights)

    }
    flightChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    flightChange2(event) {
        Moment.locale('en');

        this.setState({ [event.target.name]: Moment(event.target.value).format('D-MMM-yyyy') });

    }
    render() {
        return (

            <div className="bg" style={{ padding: "0px" }}>
                <NavigationBar />
                <br />
                <br />
                <Container style={{ paddingBottom: "50px" }}>
                    <br />
                    <br />
                    <br />
                    <Card style={{ opacity: "0.8" ,width:"80%",margin:"auto"}} className={"border border-primary bg-dark text-white"}>
                        <Card.Header className="y">Search Flights</Card.Header>

                        <Form onSubmit={this.submitFlight} id="flightFormId">
                            <Row>
                                <Col>
                                    <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                        <Form.Label>Departure Airport</Form.Label>
                                        <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="dept" onChange={this.flightChange} required >
                                            <option value="-" hidden>-</option>
                                            <option value="Bangalore" >Bangalore (BLR)</option>
                                            <option value="Delhi">Delhi (DEL)</option>
                                            <option value="Hyderabad">Hyderabad (HYD)</option>
                                            <option value="Kolkata">Kolkata (CCU)</option>
                                            <option value="Mumbai">Mumbai (BOM)</option>
                                            <option value="Pune">Pune (PNQ)</option>
                                            <option value="Chennai">Chennai (MAA)</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                        <Form.Label>Destination Airport</Form.Label>
                                        <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="arr" onChange={this.flightChange} required >
                                            <option value="-" hidden>-</option>
                                            <option value="Bangalore" >Bangalore (BLR)</option>
                                            <option value="Delhi">Delhi (DEL)</option>
                                            <option value="Hyderabad">Hyderabad (HYD)</option>
                                            <option value="Kolkata">Kolkata (CCU)</option>
                                            <option value="Mumbai">Mumbai (BOM)</option>
                                            <option value="Pune">Pune (PNQ)</option>
                                            <option value="Chennai">Chennai (MAA)</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                        <Form.Label>Planning on</Form.Label>
                                        <Form.Control type="date" placeholder="" name="date" style={{ borderLeftWidth: '30px' }} onChange={this.flightChange2} required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <br />
                            <Form.Group style={{ width: '10%', margin: 'auto' }}>
                                <Button variant="primary" type="submit">
                                    Search
                                </Button>
                            </Form.Group>

                        </Form>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                    <br />
                    <div className="bg">
                        <Router>
                            <Route>
                                {this.state.show ? this.props.history.push('/flight-list') : ""}
                            </Route>
                        </Router>


                    </div>

                    <br className="bg" />
                    <br className="bg" />
                </Container>
            </div>
            
        )
    }
}

export default UserFlight
