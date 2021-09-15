import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import { Dropdown, NavItem, NavLink } from 'react-bootstrap';
function NavigationBar() {
    let user = JSON.parse(localStorage.getItem("user-info"));
    const history = useHistory();
    function Logout() {
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Link to="" className="navbar-brand" style={{ color: '#0583FF' }}><span className="qq"><b>Flight Booking</b></span></Link>
                <Nav className="me-auto">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                {
                                user.email==="piyush@gmail.com" ?
                                <>
                                <Link to={"add"} className="nav-link">Manage Flights</Link>

                                <Link to={"manage-fare"} className="nav-link">Manage Fare</Link>
                                <Link to={"admin-book-list"} className="nav-link">Manage Bookings</Link>
                                </> : 
                                <>
                                <Link to={"search"} className="nav-link">Search-Flights</Link>
                                <Link to={"checkin"} className="nav-link">Booked-Flights</Link>
                                </>
                                }
                            </> : <>
                                <Link to={"search"} className="nav-link">Search-Flights</Link>
                                <Link to={"login"} style={{  marginLeft: '965px' }} className="nav-link">Login</Link>
                                <Link to={"signup"} className="nav-link">Sign-Up</Link>

                            </>
                    }
                </Nav>
                {localStorage.getItem("user-info") ?
                <Dropdown as={NavItem}>
                    {localStorage.getItem("user-info") ? <Dropdown.Toggle as={NavLink}><span className="qq">{user.email}</span></Dropdown.Toggle> :
                        <Dropdown.Toggle as={NavLink}>User</Dropdown.Toggle>}
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={Logout}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>:null}
            </Navbar>
        </div>
    )
}


export default NavigationBar
