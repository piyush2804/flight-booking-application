import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Card, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
toast.configure();
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {}
        };
        this.state = { email: '', password: '', show: true };
        this.submitInput = this.submitInput.bind(this);
        this.loginInput = this.loginInput.bind(this);
    }
    componentDidMount() {
        if (localStorage.getItem('user-info')) {
            this.props.history.push('/book-flight')
        }
    }
    loginInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    async submitInput(event) {
        // alert(this.state.from + this.state.to + this.state.date);
        event.preventDefault();
        const credential = {
            email: this.state.email,
            password: this.state.password,

        };
        await axios.post("http://localhost:8081/book/login", credential)
            .then(response => {
                if (response.data.email != null) {
                    console.log(response.data)
                    this.setState({credentials: response.data})
                    this.setState({ show: true });
                }
                else {
                    console.log("hi")
                    this.setState({ show: false });
                }
            });

            if(this.state.show){
        console.log(this.state.credentials.email)
        
        if(this.state.credentials.email==="piyush@gmail.com"){
            localStorage.setItem("user-info", JSON.stringify(this.state.credentials)) ;
            toast.success("login success! hello admin",{position: toast.POSITION.TOP_CENTER});
            this.props.history.push('/add')
        }
        else if(this.state.show){ 
            localStorage.setItem("user-info", JSON.stringify(this.state.credentials)) ;
            toast.success("login success! hello user",{position: toast.POSITION.TOP_CENTER});
            this.props.history.push('/search')
    }
    else{
        toast.error("invalid credentials try again",{position: toast.POSITION.TOP_CENTER});
    }
}
else{
    toast.error("invalid credentials try again",{position: toast.POSITION.TOP_CENTER});
}
    }
    render() {

        return (
            <div className="bg">
                <NavigationBar />
                <br />
                <br />
                <br />
                <br />
                <br />
                <Container style={{paddingBottom:"80px"}}>
                    <Card style={{ width: "35%", margin: "auto" ,opacity:"0.8"}} className={"border border-primary bg-dark text-white"}>
                        <Card.Header className="y">Login</Card.Header>

                        <Form onSubmit={this.submitInput} id="flightFormId">


                            <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                <Form.Label>Email-id</Form.Label>
                                <Form.Control type="email" style={{ borderLeftWidth: '30px' }} name="email" onChange={this.loginInput} required >

                                </Form.Control>
                            </Form.Group>

                            <Form.Group style={{ width: '80%', margin: 'auto' }}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" style={{ borderLeftWidth: '30px' }} name="password" onChange={this.loginInput} required >
                                </Form.Control>
                            </Form.Group>
                            <br />
                            <Form.Group style={{ width: '10%', marginLeft: "50px" }}>
                                <Button className="border-primary" variant="dark" type="submit" style={{marginLeft:"133px" }}>
                                    <span style={{color: "white" }}>Login</span>
                                </Button>
                            </Form.Group>
                        </Form>
                        <Card.Body>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default withRouter(Login)
