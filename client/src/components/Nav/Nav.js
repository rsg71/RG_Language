import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"

export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">RG Language</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Usage" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Languages</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FAQ</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
