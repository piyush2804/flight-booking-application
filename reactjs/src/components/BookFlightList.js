import React, { Component } from 'react'
import { Card, Table } from 'react-bootstrap'
import axios from 'axios'
import NavigationBar from './NavigationBar';
import SubmitBooking from './SubmitBooking';
import { Container } from 'react-bootstrap';
class BookFlightList extends Component {
    constructor(props) {

        super(props);
        this.state = {
            flights: []
        };
        this.state.show = false;

    }

    componentDidMount() {
        for(let i=0;i<10;i++){
            this.getFlights();
        }
        
    }
    async getFlights() {
        console.log("componentdidmount")
        await axios.get("http://localhost:8080/flight/list")
            .then(response => response.data)
            .then((data) => this.setState({ flights: data }));

    }

    render() {

        return (
            <div className="bg">
                <NavigationBar />
                <br />
                <br />
                <Container>
                    <Card style={{opacity:"0.85",width:"90%",margin:"auto"}}className={"border border-primary bg-dark text-white"}>
                        <Card.Header>Selected Flight</Card.Header>
                        <Card.Body>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Flight</th>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Departure Date</th>
                                        <th>Arrival Date</th>
                                        <th>Departure Time</th>
                                        <th>Arrival Time</th>
                                        <th>Fare</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.flights.length === 0 ?
                                        <tr>
                                            <td colSpan="8">No Flight Available</td>
                                        </tr> :
                                        this.state.flights.map((flight) => (
                                            <tr key={flight.id}>
                                                <td>{flight.id}</td>
                                                <td>{flight.flight_name}</td>
                                                <td>{flight.dept}</td>
                                                <td>{flight.arr}</td>
                                                <td>{flight.date}</td>
                                                <td>{flight.arrivaldate}</td>
                                                <td>{flight.departure}</td>
                                                <td>{flight.arrival}</td>
                                                <td>{flight.fare}</td>
                                            </tr>))
                                    }
                                </tbody>

                            </Table>
                        </Card.Body>
                    </Card>
                    <br />
                    <SubmitBooking/>
                </Container>
            </div>
        )
    }
}

export default BookFlightList
