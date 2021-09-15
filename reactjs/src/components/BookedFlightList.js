import React from 'react'
import NavigationBar from './NavigationBar'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import { Table, Button, Card, Form } from 'react-bootstrap'
function BookedFlightList() {
    const [bookings, setBookings] = useState([{ id: 0, arr: '', dept: '', date: '', flight_name: '', ischeckedin: '', first: '', last: '', gender: '', flight_id: 0, email: JSON.parse(localStorage.getItem('user-info')).email }])
    const [name, setName] = useState([]);
    const [count, setCount] = useState(0);
    const history = useHistory();
    useEffect(() => {
        for (let i = 0; i < 100; i++) {
            axios.get("http://localhost:8081/book/getbooking")
                .then(response => response.data)
                .then((data) => setBookings(data));
        }
    }, [])
    function flightChange() {

        console.log(bookings);
        axios.post("http://localhost:8082/checkin/setcheckin", bookings);
        axios.delete("http://localhost:8081/book/delete")
        history.push('/checkin')

    }
    return (
        <div className="bg">
            <NavigationBar />
            <br />
            <br />
            <br />
            <br />
            <Container style={{ paddingBottom: "110px" }}>
                <Card style={{ opacity: "0.85" }} className={"border border-primary bg-dark text-white"}>
                    <Card.Header>Your Bookings</Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Flight</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Departure Date</th>
                                    <th>Seat</th>
                                    <th>Is Checked-in</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>

                                {bookings.length === 0 ?
                                    <tr>

                                        <td colSpan="9">No Bookings Available</td>

                                    </tr> :

                                    bookings.map((book) => (
                                        <tr key={book.id}>
                                            <td>{book.first} {book.last}</td>
                                            <td>{book.flight_name}</td>
                                            <td>{book.dept}</td>
                                            <td>{book.arr}</td>
                                            <td>{book.date}</td>
                                            <td><Form.Control as="select" style={{ width: "100%", marginRight: "-100px" }} name="seat" onChange={(e) => { setName(e.target.value); book.ischeckedin = "Yes"; setCount(count + 1) }} required >
                                                <option value="-" hidden>-</option>
                                                {name !== 1 ? <option value={1} >1</option> : <option value="1" disabled>1</option>}
                                                {name !== 2 ? <option value={2} >2</option> : <option value="2" disabled>2</option>}
                                                {name !== 3 ? <option value={3} >3</option> : <option value="3" disabled>3</option>}
                                                {name !== 4 ? <option value={4} >4</option> : <option value="4" disabled>4</option>}
                                                {name !== 5 ? <option value={5} >5</option> : <option value="5" disabled>5</option>}
                                                {name !== 6 ? <option value={6} >6</option> : <option value="6" disabled>6</option>}
                                                {name !== 7 ? <option value={7} >7</option> : <option value="7" disabled>7</option>}
                                                {name !== 8 ? <option value={8} >8</option> : <option value="8" disabled>8</option>}

                                            </Form.Control></td>
                                            <td>{book.ischeckedin}</td>

                                            <td>{book.email = JSON.parse(localStorage.getItem('user-info')).email}</td>

                                        </tr>

                                    ))
                                }
                            </tbody>

                        </Table>

                    </Card.Body>
                </Card><br />
                <Button style={{ width: "100%" }} variant="success" onClick={() => flightChange()}>Submit</Button>
            </Container>

            <br />
            <br />
        </div>
    )
}

export default BookedFlightList
