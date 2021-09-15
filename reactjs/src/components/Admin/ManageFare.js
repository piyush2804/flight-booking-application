import React, { Component } from 'react'
import NavigationBar from '../NavigationBar';
import { Container } from 'react-bootstrap';
import { Card, Form, Button, Col, Row ,Table} from 'react-bootstrap'
import axios from 'axios';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
class ManageFare extends Component {
    constructor(props) {
        super(props);
        this.state = {
          flights: [],
          id: 0,
          flight_name: '', fare: 0
        };
    }
    componentDidMount() {
        axios.get("http://localhost:8084/")
          .then((res) => {
            this.setState({
              flights: res.data,
              
            })
          })
          
      }
      submit(event, id) {
        event.preventDefault();

          axios.put("http://localhost:8084/",
            {
              id: this.state.id,
              flight_name: this.state.flight_name,
              fare: this.state.fare
            }).then(toast.dark('flight updated successfully',{position: toast.POSITION.TOP_CENTER}))
            .then(() => {
              this.componentDidMount();
            })
    
      }
    render() {
        console.log(this.state.flights)
        return (
            <div className="bg" style={{ padding: "0px" }}>
            <NavigationBar />
            <br />
            
            <Row>
                <Col>
            <Container style={{ paddingBottom: "0px" }}>
                <br />
                <br />
                <br />
                <Card style={{ opacity: "0.95" ,marginLeft:"30px"}} className={"border border-primary bg-dark text-white"}>
                    <Card.Header className="y">Manage Fare</Card.Header>
                    <Form  id="flightFormId" onSubmit={(e) => this.submit(e, this.state.id)}>
                                <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                    <Form.Label>Fare id</Form.Label>
                                    <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="id" required onChange={(e) => this.setState({ id: e.target.value })}>
                                        <option value="-" hidden>-</option>
                                        <option value="IG-26" >IG-26</option>
                                        <option value="AI-25">AI-25</option>
                                        <option value="SJ-20">SJ-20</option>
                                        <option value="GF-22">GF-22</option>
                                        <option value="AAI-10">AAI-10</option>
                                        <option value="VIS-11">VIS-11</option>
                                        <option value="ALL-5">ALL-5</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                    <Form.Label>Flight Name</Form.Label>
                                    <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="flight_name" required onChange={(e) => this.setState({ flight_name: e.target.value })}>
                                    <option value="-" hidden>-</option>
                                            <option value="IndiGo" >IndiGo</option>
                                            <option value="Air-India">Air India</option>
                                            <option value="SpiceJet">SpiceJet</option>
                                            <option value="Go-First">Go First</option>
                                            <option value="AirAsia-India">AirAsia India</option>
                                            <option value="Vistara">Vistara</option>
                                            <option value="Alliance-Air">Alliance Air</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                    <Form.Label>Flight Fare</Form.Label>
                                    <Form.Control type="text" placeholder="" name="fare" style={{ borderLeftWidth: '30px' }} onChange={(e) => this.setState({ fare: e.target.value })} required />
                                </Form.Group>
                        <br />
                        <Form.Group style={{ width: '10%', margin: 'auto' }}>
                            <Button variant="warning" type="submit" style={{}}>
                                <b>Update</b>
                            </Button>
                        </Form.Group>
                    </Form>
                    <Card.Body>
                    </Card.Body>
                </Card>
            </Container>
            </Col>
            <Col>
            <div>
          <Container style={{ paddingBottom: "10px" ,marginLeft:"-30px",marginTop:"60px"}}>
            <Card style={{opacity:"0.95"}}  className={"border border-primary bg-dark text-white"}>
           <Card.Body>
                <Table  bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>Id/Flight</th>
                      <th>Fare(in Rs)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.flights.length === 0 ?
                      <tr>
                        <td colSpan="3">No Flight Available</td>
                      </tr> :
                      this.state.flights.map((flight) => (
                        <tr key={flight.id}>
                          <td>({flight.id})....... {flight.flight_name}</td>
                          <td>{flight.fare}</td>
                        </tr>))
                    }
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Container>
        </div>
        </Col>
        </Row>
        </div>
        )
    }
}
export default ManageFare
