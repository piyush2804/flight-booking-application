import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from '../NavigationBar'
import '../../App.css'
import {Card,Table,Button} from 'react-bootstrap'
import axios from 'axios'
import {useState,useEffect} from 'react'
function AdminFlightList() {
    const [flights, setFlights] = useState([])
    useEffect(() => {
        getFlights();
        
    }, [])
    async function getFlights(){
        console.log("componentdidmount")
        await axios.get("http://localhost:8080/flight/getflights")
        .then(response=>response.data)
        .then((data)=>setFlights(data));
    }
    return (
        <div className="bg">
            <NavigationBar />
            <br />
            <br />
            <br />
            <br />
            <Container style={{paddingBottom:"100px"}}>
            
            <Card style={{opacity:"0.87"}}className={"border border-primary bg-dark text-white"}>
                <Card.Header>Available Flights</Card.Header>
                
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Flight</th>
                                <th>From/To</th>
                                <th>Departure Date</th>
                                <th>Time</th>
                                <th>Fare</th>
                            </tr>
                        </thead>
                        <tbody>
                        {flights.length === 0 ?
                           <tr>
                               <td colSpan="8">No Flight Available</td>
                           </tr>:
                           flights.map((flight)=>(
                           <tr key={flight.id}>
                               <td >{flight.id}</td>
                               <td>{flight.flight_name}</td>
                               <td>{flight.dept} To {flight.arr}</td>
                               <td>{flight.date}</td>
                               <td>{flight.departure} - {flight.arrival}</td>
                               <td>{flight.fare}</td>
                           </tr>))
                           }
                        </tbody>

                    </Table>
                    
                </Card.Body>
                
            </Card>

            </Container>
            <br />
        </div>
    )
}

export default AdminFlightList
