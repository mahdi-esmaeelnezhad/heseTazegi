import React from "react";
import "./Footer.css"

import { Container , Row , Col } from "react-bootstrap"

const Footer = () =>{
    return(
        <footer>
            <Container>
                <Row>
                    <Col  className="text-center">Footer</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer