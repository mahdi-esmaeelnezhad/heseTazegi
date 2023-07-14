import React from "react";
import "./Header.css"
import { LinkContainer } from "react-router-bootstrap"

import { Container , Navbar , Nav } from "react-bootstrap"

const Header = () =>{
    return(
    <div>
        <Navbar className="Navbar" variant="dark">
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand>
                    ME ARTICLE
                </Navbar.Brand>
                </LinkContainer>
                <Nav>
                    <LinkContainer to="/cart">
                    <Nav.Link >
                        <i className="fa fa-shopping-cart"></i>
                    </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/account">
                    <Nav.Link >
                    <i className="fa fa-user"></i>
                    </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default Header