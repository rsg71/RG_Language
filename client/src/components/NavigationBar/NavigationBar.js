import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap";
import {Link} from 'react-router-dom';

export default function NavigationBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">RG Language</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {/* <Nav.Link href="/login">Login</Nav.Link> */}
                        {/* <Nav.Link href="/signup">Signup</Nav.Link> */}

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
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
