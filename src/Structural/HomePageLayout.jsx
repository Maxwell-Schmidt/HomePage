import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import logo from '../Assets/logo.png';


function HomePageLayout(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                    <img
                        alt="Max Schmidt Logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                        Homepage of Maxwell Schmidt
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="featured">Featured</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                    <Outlet/>
            </div>
        </div>
    );
}

export default HomePageLayout;