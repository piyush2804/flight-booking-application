import './App.css';
import Welcome from './components/Welcome';
import {  Row, Col } from 'react-bootstrap';
import AdminFlight from './components/AdminFlight';
import FlightList from './components/FlightList';
import UserFlight from './components/UserFlight';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Login from './components/Login';
import BookFlightList from './components/BookFlightList';
import PaymentGateway from './components/PaymentGateway';
import BookedFlightList from './components/BookedFlightList';
import ManageBookings from './components/Admin/ManageBookings';
import ManageFare from './components/Admin/ManageFare';
import Checkin from './components/Checkin';
import Signup from './components/Signup';
function App() {
const marginTop={
  marginTop:"0px"
}
  return (
    <>
      <Router>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/add" exact component={AdminFlight}/>
              <Route path="/search" exact component={UserFlight}/>
              <Route path="/flight-list" exact component={FlightList}/>
              <Route path="/admin-book-list" exact component={ManageBookings}/>
              <Route path="/manage-fare" exact component={ManageFare}/>
              <Route path="/login" exact component={Login}/>
              <Route path="/signup" exact component={Signup}/>
              <Route path="/book-flight" exact component={BookFlightList}/>
              <Route path="/pay" exact component={PaymentGateway}/>
              <Route path="/booked-flights" exact component={BookedFlightList}/>
              <Route path="/checkin" exact component={Checkin}/>
              </Switch>
              
          </Col>
        </Row>

      </Router>
    </>
  );
}

export default App;
