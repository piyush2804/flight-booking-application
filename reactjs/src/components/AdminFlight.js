import React, { Component } from 'react'
import { Card, Form, Button, Col, Row, Table } from 'react-bootstrap'
import axios from 'axios';
import Moment from 'moment';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import '../App.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
toast.configure();
class AdminFlight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      id: 0,
      flight_name: '', dept: '', arr: '', date: '', arrivaldate: '', fare: '', departure: '', arrival: '',
      fares: []
    };

    this.flightChange2 = this.flightChange2.bind(this);

  }
  componentDidMount() {
    axios.get("http://localhost:9000/flight/getflights")
      .then((res) => {
        this.setState({
          flights: res.data,
          id: 0,
          name: '',
          email: '',
          password: ''
        })
      })
    axios.get("http://localhost:8084/").then((res) => {
      this.setState({ fares: res.data })
    })
  }
  submit(event, id) {
    event.preventDefault();
    if (id === 0) {
      axios.post("http://localhost:8080/flight/", {
        flight_name: this.state.flight_name,
        dept: this.state.dept,
        arr: this.state.arr,
        date: this.state.date,
        arrivaldate: this.state.arrivaldate,
        fare: this.state.fare,
        departure: this.state.departure,
        arrival: this.state.arrival
      }).then(toast.success('flight added successfully', { position: toast.POSITION.TOP_CENTER }))
        .then((res) => {
          this.componentDidMount();
        })
    } else {
      axios.put("http://localhost:8080/flight/",
        {
          id: this.state.id,
          flight_name: this.state.flight_name,
          dept: this.state.dept,
          arr: this.state.arr,
          date: this.state.date,
          arrivaldate: this.state.arrivaldate,
          fare: this.state.fare,
          departure: this.state.departure,
          arrival: this.state.arrival
        }).then(() => {
          this.componentDidMount();
        })
      toast.success('flight updated successfully', { position: toast.POSITION.TOP_CENTER })
    }

  }
  delete(id) {
    confirmAlert({
      message: 'Are you sure? You want to delete this flight?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => axios.delete(`http://localhost:8080/flight/${id}`).then(toast.success('flight deleted successfully'))
            .then(() => {
              this.componentDidMount();
            })

        },
        {
          label: 'No',
          onClick: () => toast.error('deletion canceled')
        }
      ]
    });
  }
  edit(id) {
    axios.get(`http://localhost:8080/flight/admin/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          id: res.data.id,
          flight_name: res.data.flight_name,
          dept: res.data.dept,
          arr: res.data.arr,
          date: res.data.date,
          arrivaldate: res.data.arrivaldate,
          fare: res.data.fare,
          departure: res.data.departure,
          arrival: res.data.arrival
        })
      })
    console.log(this.state.date);
  }
  flightChange2(event) {
    Moment.locale('en');
    this.setState({ [event.target.name]: Moment(event.target.value).format('D-MMM-yyyy') });
  }
  render() {

    return (
      <div className="bg">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <NavigationBar />
        <br />
        <br />
        <Row>
          <Col>
            <Container style={{ paddingBottom: "0px" }}>

              <Card style={{ opacity: "0.87", width: "150%", marginLeft: "-90px" }} className={"border border-primary bg-dark text-white"}>

                <Card.Header className="y">Add Flights</Card.Header>
                <Form onSubmit={(e) => this.submit(e, this.state.id)} id="flightFormId">

                  <Form.Group style={{ width: '97%', margin: 'auto' }}>
                    <Row>
                      <Col>
                        <Form.Label>Airline Name</Form.Label>
                        <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="flight_name" onChange={(e) => this.setState({ flight_name: e.target.value })} value={this.state.flight_name} >
                          <option value="-" hidden>-</option>
                          <option value="IndiGo" >(IG-26) IndiGo</option>
                          <option value="Air-India"> (AI-25) Air India</option>
                          <option value="SpiceJet">(SJ-20) SpiceJet</option>
                          <option value="Go-First">(GF-22)Go First</option>
                          <option value="AirAsia-India">(AAI-10)AirAsia India</option>
                          <option value="Vistara">(VIS-11)Vistara</option>
                          <option value="Alliance-Air">(ALL-5)Alliance Air</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Label>Departure Airport</Form.Label>
                        <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="dept" onChange={(e) => this.setState({ dept: e.target.value })} value={this.state.dept} required >
                          <option value="-" hidden>-</option>
                          <option value="Bangalore" >Bangalore (BLR)</option>
                          <option value="Delhi">Delhi (DEL)</option>
                          <option value="Hyderabad">Hyderabad (HYD)</option>
                          <option value="Kolkata">Kolkata (CCU)</option>
                          <option value="Mumbai">Mumbai (BOM)</option>
                          <option value="Pune">Pune (PNQ)</option>
                          <option value="Chennai">Chennai (MAA)</option>
                        </Form.Control>
                      </Col>
                      <Col>
                        <Form.Label>Destination Airport</Form.Label>
                        <Form.Control as="select" style={{ borderLeftWidth: '30px' }} name="arr" onChange={(e) => this.setState({ arr: e.target.value })} value={this.state.arr} required >
                          <option value="-" hidden>-</option>
                          <option value="Bangalore" >Bangalore (BLR)</option>
                          <option value="Delhi">Delhi (DEL)</option>
                          <option value="Hyderabad">Hyderabad (HYD)</option>
                          <option value="Kolkata">Kolkata (CCU)</option>
                          <option value="Mumbai">Mumbai (BOM)</option>
                          <option value="Pune">Pune (PNQ)</option>
                          <option value="Chennai">Chennai (MAA)</option>
                        </Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Departure Date</Form.Label>
                        <Form.Control type="date" style={{ borderLeftWidth: '30px', color: "#00ffef" }} placeholder="" name="date" onChange={event => this.flightChange2(event)} required />
                      </Col>
                      <Col>
                        <Form.Label>Arrival Date</Form.Label>
                        <Form.Control type="date" style={{ borderLeftWidth: '30px', color: "#00ffef" }} placeholder="" name="arrivaldate" onChange={event => this.flightChange2(event)} required />
                      </Col>
                    </Row>

                    <Row>
                      <Col>

                        <Form.Label style={{ marginLeft: "-2px" }}>Departure Time</Form.Label>
                        <Form.Control type="time" autoComplete="off" style={{ borderLeftWidth: '30px', width: "100%", marginLeft: "0px", color: "#00ffef " }} placeholder="" name="departure" onChange={(e) => this.setState({ departure: e.target.value })} value={this.state.departure} required />
                      </Col>

                      <Col>
                        <Form.Label style={{ marginLeft: "-0px" }}>Arrival Time</Form.Label>
                        <Form.Control type="time" autoComplete="off" style={{ borderLeftWidth: '30px', width: "100%", marginLeft: "-0px", color: "#00ffef " }} placeholder="" name="arrival" onChange={(e) => this.setState({ arrival: e.target.value })} value={this.state.arrival} required />
                      </Col>


                      <Col>
                        <br />
                        <Button style={{ width: "100%", marginTop: "6.5px", marginLeft: "-0px" }} variant="primary" type="submit">
                          Add Flight
                        </Button>
                      </Col>

                    </Row>
                  </Form.Group>
                </Form>
                <Card.Body>
                </Card.Body>
              </Card>
              <br />
            </Container>
          </Col>
          <Col>
            <div className="col s6">
              <Container style={{ paddingBottom: "0px", marginLeft: "-33px" }}>
                <Card style={{ width: "380%", opacity: "0.95" }} className={"border border-primary bg-dark text-white"}>
                  <Card.Body>
                    <Table id="r" bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Flight</th>
                          <th>From/to</th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Fare</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.flights.length === 0 ?
                          <tr>
                            <td colSpan="6">No Flight Available</td>
                          </tr> :
                          this.state.flights.map((flight) => (
                            <tr key={flight.id}>
                              <td>{flight.id}</td>
                              <td>{flight.flight_name}</td>
                              <td>{flight.dept} to {flight.arr}</td>
                              <td>{flight.date}</td>
                              <td>{flight.departure}-{flight.arrival}</td>
                              <td>{flight.fare}</td>
                              <td><button onClick={(e) => this.edit(flight.id)} className="btn waves-effect waves-light" type="submit" name="action"><i id="d" className="material-icons">edit</i></button></td>
                              <td>
                                <button style={{ "backgroundColor": "red" }} onClick={(e) => this.delete(flight.id)} className="btn tiny waves-effect waves-light" type="submit" name="action">
                                  <i id="c" className="tiny material-icons">delete</i>
                                </button>
                              </td>
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

export default AdminFlight
