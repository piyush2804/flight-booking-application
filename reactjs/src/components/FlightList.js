import React, { Component } from 'react'
import { Card, Table ,Button} from 'react-bootstrap'
import axios from 'axios'
import { withRouter } from 'react-router'
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
class FlightList extends Component {
    constructor(props){
        
        super(props);
        this.state={
            flights:[]
        };
        this.selectedflight=this.selectedflight.bind(this)
        
    }
    componentDidMount(){
        this.getFlights();
    }

    selectedflight(id){

        axios.post("http://localhost:8080/flight/select", {"id":id});
        
        this.props.history.push('/login');
 
    }
    async getFlights(){
        console.log("componentdidmount")
        await axios.get("http://localhost:8080/flight/list")
        .then(response=>response.data)
        .then((data)=>this.setState({flights: data}));
        
    }

    render() {

        return (
            <div className="bg">
            <NavigationBar/>
            <br/>
            <br/>
            <Container style={{paddingBottom:"130px",paddingTop:"10px"}}>
            <Card style={{opacity:"0.9",width:"90%",margin:"auto"}} className={"border border-primary bg-dark text-white"}>
                <Card.Header>Available Flights</Card.Header>
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Flight</th>
                                <th>From - to</th>
                                <th>Departure Date</th>
                                <th>Departure Time</th>
                                <th>Arrival Time</th>
                                <th>Fare</th>
                                <th>Book</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.flights.length === 0 ?
                           <tr>
                               <td colSpan="10">No Flight Available</td>
                           </tr>:
                           this.state.flights.map((flight)=>(
                           <tr key={flight.id}>
                               <td>{flight.id}</td>
                               <td>{flight.flight_name}</td>
                               <td>{flight.dept} to {flight.arr}</td>
                               <td>{flight.date}</td>
                               <td>{flight.departure}</td>
                               <td>{flight.arrival}</td>
                               <td>{flight.fare}</td>
                               <td><Button onClick={()=>this.selectedflight(flight.id)}>Book</Button></td>
                           </tr>))
                           }
                        </tbody>

                    </Table>
                </Card.Body>
            </Card>
            </Container>
            </div>
        )
    }
}

export default withRouter(FlightList)
