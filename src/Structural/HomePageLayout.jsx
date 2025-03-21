import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";


function HomePageLayout(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Homepage of Maxwell Schmidt
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="featured">Featured</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                    <Outlet/>
            </div>
        </div>
    );
}

export default HomePageLayout;