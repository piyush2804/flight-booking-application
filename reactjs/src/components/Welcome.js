import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button} from 'react-bootstrap';
import '../App.css'
import NavigationBar from './NavigationBar';
import { Container } from 'react-bootstrap';
class Welcome extends Component {
    constructor(props){
        super(props);
        this.Submit=this.Submit.bind(this);
    }
    Submit(){
        this.props.history.push('/search');
    }
    render() {
        return (
            <div className="bg">
           
            <NavigationBar/>
            <br/>
            <br/>
            <Container style={{paddingBottom:"200px"}} >
            <br/>
            <br/>
            <br/>
            <div>
                <Jumbotron style={{marginLeft:"100px"}} >
                    <h1 className="x">Search a flight</h1>
                    <br/>
                    <p>
                        <Button onClick={this.Submit}variant="primary">
                            Search
                        </Button> 
                    </p>

                </Jumbotron>
            </div>
            </Container>
            </div>
        )
    }
}

export default Welcome
