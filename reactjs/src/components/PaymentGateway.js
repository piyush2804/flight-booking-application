import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
toast.configure();
function PaymentGateway() {
    const [name, setName] = useState({});
    const history = useHistory();

    function flightchange(event) {
        event.preventDefault();
        if(name=== JSON.parse(localStorage.getItem('user-info')).email){
        axios.post("http://localhost:8081/book/brn", { "email": JSON.parse(localStorage.getItem('user-info')).email })
        history.push('/booked-flights');
        }
        else{
            toast.error("wrong reference number");
        }

    }

    return (
        <div className="bg">

            <NavigationBar />
            <br />
            <br />
            <Container style={{paddingBottom:"100px"}}>

                <h2 style={{ color: 'black' }}><i>Congratulations! Your Booking is Confirmed.
                    <br />Your reference number is </i> <span style={{color:"#ff3c00"}}>{JSON.parse(localStorage.getItem('user-info')).email}</span></h2>

<br/><br/><br/>
                    <Form onSubmit={flightchange}>
                        <Form.Group style={{ width: '30%' }}>
                            <Form.Label><h6>Booking reference</h6></Form.Label>
                            <Form.Control type="text" placeholder="" name="date" onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <br/>
                        <Form.Group style={{ width: '10%'}}>
                            <Button variant="primary" type="submit" style={{}}>
                                Search
                            </Button>
                        </Form.Group>

                    </Form>
                    <br />
            </Container>
        </div>
    )

}


export default PaymentGateway
