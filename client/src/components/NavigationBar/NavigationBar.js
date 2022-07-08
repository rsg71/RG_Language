import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../App';
import API from '../../utils/API';


export default function NavigationBar({ setCurrentUser }) {


    let navigate = useNavigate();
    let currentUser = useContext(CurrentUserContext);
    // console.log("currentUser: ", currentUser);


    const handleClose = () => {
        let item = document.getElementById("basic-navbar-nav");
        let btnItem = document.getElementById("navbar-toggler-btn");

        item.classList.remove("show");
        btnItem.classList.add("collapsed");
    }

    const handleLogout = () => {
        API.logout()
            .then(res => {
                console.log(res);
                setCurrentUser(null);
                navigate("/")
            })
            .catch(err => {
                console.log(err);
            })
    }

    const isCurrentUser = currentUser !== null;
    const homepageUrl = isCurrentUser ? "/user-home" : "/";


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">RG Language</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler-btn" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={homepageUrl}>Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" onClick={handleClose}>About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        {!isCurrentUser &&
                            <>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                            </>
                        }

                        {!isCurrentUser &&
                            <NavDropdown title="Languages" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/spanish">Spanish</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/french">French</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/portuguese">Portuguese</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/german">German</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/italian">Italian</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/swedish">Swedish</NavDropdown.Item>
                                {/* <NavDropdown.Item href="/secret"> Secret</NavDropdown.Item> */}
                            </NavDropdown>
                        }
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}

                    {currentUser !== null &&
                        <span style={{ fontSize: "larger" }}>
                            <DropdownButton
                                as={ButtonGroup}
                                align={{ lg: 'start' }}
                                title="My account"
                                id="dropdown-menu-align-responsive-1"
                            >
                                <Dropdown.Item eventKey="1" onClick={() => navigate("/user-profile")}>
                                    User profile
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={handleLogout}>
                                    Logout
                                </Dropdown.Item>
                            </DropdownButton>
                        </span>
                    }

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
