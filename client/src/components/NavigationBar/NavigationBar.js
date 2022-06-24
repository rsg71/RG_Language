import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"

export default function NavigationBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">RG Language</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>

                        <NavDropdown title="Languages" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/spanish">Spanish</NavDropdown.Item>
                                <NavDropdown.Item href="/french">French</NavDropdown.Item>
                                <NavDropdown.Item href="/portuguese">Portuguese</NavDropdown.Item>
                                <NavDropdown.Item href="/german">German</NavDropdown.Item>
                                <NavDropdown.Item href="/italian">Italian</NavDropdown.Item>
                                <NavDropdown.Item href="/swedish">Swedish</NavDropdown.Item>
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
