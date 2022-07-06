import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../App';


export default function NavigationBar() {



    let currentUser = useContext(CurrentUserContext);
    console.log("currentUser: ", currentUser);


    const handleClose = () => {
        let item = document.getElementById("basic-navbar-nav");
        let btnItem = document.getElementById("navbar-toggler-btn");
       
        item.classList.remove("show");
        btnItem.classList.add("collapsed");
    }



    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">RG Language</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler-btn"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                        {/* <Nav.Link as={Link} to="/user-home">My Home</Nav.Link> */}

                        <NavDropdown title="Languages" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/spanish">Spanish</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/french">French</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/portuguese">Portuguese</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/german">German</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/italian">Italian</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/swedish">Swedish</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/secret"> Secret</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <span style={{ fontSize: "larger" }}><Link to="/user-profile"><i className="bi bi-person-circle" /></Link></span>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
