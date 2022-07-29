import React, { useContext, useState } from 'react'
import { Navbar, Nav, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../App';
import API from '../../utils/API';


export default function NavigationBar({ setCurrentUser }) {

    const [expanded, setExpanded] = useState(false);  // initially closed


    let navigate = useNavigate();
    let currentUser = useContext(CurrentUserContext);
    // console.log("currentUser: ", currentUser);


    const closeMenu = () => {
        setExpanded(false);
    }

    const toggleMenu = () => {
        setExpanded(!expanded)
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
            <Navbar bg="light" expand="lg" expanded={expanded}>
                <Navbar.Brand as={Link} to={isCurrentUser ? "/user-home" : "/"}>RG Language</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler-btn" onClick={toggleMenu} />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} onClick={closeMenu} to={homepageUrl} >Home</Nav.Link>
                        <Nav.Link as={Link} onClick={closeMenu} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} onClick={closeMenu} to="/contact">Contact</Nav.Link>
                        {!isCurrentUser &&
                            <>
                                <Nav.Link as={Link} onClick={closeMenu} to="/login">Login</Nav.Link>
                                <Nav.Link as={Link} onClick={closeMenu} to="/signup">Signup</Nav.Link>
                            </>
                        }

                        {/* {!isCurrentUser &&
                            <NavDropdown title="Languages" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} onClick={closeMenu} to="/spanish">Spanish</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={closeMenu} to="/french">French</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={closeMenu} to="/portuguese">Portuguese</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={closeMenu} to="/german">German</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={closeMenu} to="/italian">Italian</NavDropdown.Item>
                                <NavDropdown.Item as={Link} onClick={closeMenu} to="/swedish">Swedish</NavDropdown.Item>
                            </NavDropdown>
                        } */}
                    </Nav>
                    {/* <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}

                    {currentUser !== null &&
                        <span style={{ fontSize: "larger" }}>

                            <DropdownButton
                                as={ButtonGroup}
                                menuAlign={{ lg: 'left' }}
                                title="My account"
                                id="dropdown-menu-align-responsive-1"
                            >
                                <Dropdown.Item eventKey="1" onClick={() => { closeMenu(); navigate("/user-profile"); }}>
                                    User profile
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="2" onClick={() => { closeMenu(); handleLogout(); }}>
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
