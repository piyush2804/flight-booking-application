import React from 'react'
import NavigationBar from '../NavigationBar'
import { Container } from 'react-bootstrap'
import '../../App.css'
import {Card,Table,Button,Row,Col,Form} from 'react-bootstrap'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
function ManageBookings() {
    const [flights, setFlights] = useState([])
    const [book, setBook]= useState({id:0,first:'',last:''})
    useEffect(() => {
        getBookings();
        
    }, [])
    async function submit(event,i){
        event.preventDefault();
console.log(i,book)
        axios.put("http://localhost:8082/checkin/update",
          {
            id:book.id,
            first: book.first,
            last: book.last
          }).then(toast.dark('name updated successfully',{position: toast.POSITION.TOP_CENTER}))
          .then(() => {
            getBookings();
          })
    }
    async function getBookings(){
        console.log("componentdidmount")
        await axios.get("http://localhost:8082/checkin/getadmincheckin")
        .then(response=>response.data)
        .then((data)=>setFlights(data));
    }
    async function delete2(id){
        confirmAlert({
            message: 'Are you sure? You want to cancel this booking?',
            buttons: [
              {
                label: 'Yes',
                onClick: () =>  axios.delete(`http://localhost:8082/checkin/${id}`).then(toast.success('booking deleted successfully'))
                .then(() => {
                    getBookings();
                })
                
              },
              {
                label: 'No',
                onClick: () => toast.error('deletion canceled')
              }
            ]
          });   
    }
    async function edit(id) {
        axios.get(`http://localhost:8082/checkin/update/${id}`)
          .then((res) => {
            setBook({
              id: res.data.id,
              first: res.data.first,
              last: res.data.last,
            //   gender:res.data.gender
            })
          })
          console.log(book.id)
      }
    return (
        <div className="bg">
        <NavigationBar />
        <br />
        <Form onSubmit={(e)=>submit(e,book.id)}>
                                        <Row>
                                            <Col>
                                            <Form.Group style={{ width: '50%', margin: 'auto',marginLeft:"330px" }}>
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" style={{ borderLeftWidth: '30px',margin:'auto'}} placeholder="" name="first" onChange={(e) => setBook({ id:book.id, first: e.target.value ,last: book.last})} value={book.first} required />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                            <Form.Group style={{ width: '50%', margin: 'auto',marginLeft:"120px" }}>
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" style={{ borderLeftWidth: '30px'}} placeholder="" name="last"  onChange={(e) => setBook({id:book.id, first: book.first, last: e.target.value })} value={book.last} required />
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Button onClick={(e)=>submit(e,book.id)}
                                                    style={{ width: "40%", margin: "30px auto" ,marginLeft:"-90px"}} variant="warning" >
                                                    Update</Button>
                                            </Col>
                                        </Row>            

                        </Form>

        <Container style={{paddingBottom:"10px"}}>
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
                                <th>email</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                        {flights.length === 0 ?
                           <tr>
                               <td colSpan="8">No Data Available</td>
                           </tr>:
                           flights.map((flight)=>(
                           <tr key={flight.id}>
                               <td>{flight.id}</td>
                               <td>{flight.first} {flight.last}</td>
                               <td>{flight.dept} To {flight.arr}</td>
                               <td>{flight.date}</td>
                               <td>{flight.email}</td>
                               <td><Button variant="warning" onClick={()=>edit(flight.id)}>edit</Button>
                                &nbsp;&nbsp;&nbsp;<Button variant="danger" onClick={()=>delete2(flight.id)}>Cancel</Button></td>
                           </tr>))
                           }
                        </tbody>

                    </Table>
                    
                </Card.Body>
                
            </Card>
        </Container>
        <br />
        <br /><br />
        <br />
        </div>
    )
}

export default ManageBookings
