import React from 'react'
import NavigationBar from './NavigationBar'
import {Card,Table,Container } from 'react-bootstrap'
import axios from 'axios'
import {useState,useEffect} from 'react'
function Checkin() {
    const [flights, setFlights] = useState([])
    useEffect(() => {
        for(let i=0;i<100;i++){
        getBookings();
        }
    }, [])
    async function getBookings(){
        console.log("componentdidmount")
        await axios.get("http://localhost:8082/checkin/getadmincheckin")
        .then(response=>response.data)
        .then((data)=>setFlights(data));
    }
    return (
        <div className="bg">
            <NavigationBar/>
            <br />
            <br />
            <br />
            <br />
            <Container style={{paddingBottom:"110px"}}>
            <Card style={{opacity:"0.87"}}className={"border border-primary bg-dark text-white"}>
                <Card.Header>Manage Bookings</Card.Header>
                
                <Card.Body>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>From/To</th>
                                <th>Departure Date</th>
                                <th>isCheckedin</th>
                                <th>email</th>

                            </tr>
                        </thead>
                        <tbody>
                        {flights.length === 0 ?
                           <tr>
                               <td colSpan="8">No Details Available</td>
                           </tr>:
                           flights.map((flight)=>(
                           <tr key={flight.id}>
                               <td>{flight.id}</td>
                               <td>{flight.first} {flight.last}</td>
                               <td>{flight.dept} To {flight.arr}</td>
                               <td>{flight.date}</td>
                               <td>{flight.ischeckedin}</td>
                               <td>{flight.email}</td>

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

export default Checkin
