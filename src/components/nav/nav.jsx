import { Button, Col, Container, Navbar } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectFilter from '../selectFilter/selectFilter';
import './nav.css'

export default function Nav(){

    var width = window.innerWidth
  
    return (
        
        <Navbar bg="light" expand="lg" >
                <Container className="d-inline-flex p-2 bd-highlight">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                            <div className={width > 850 ?"row container-fluid" : "block"}>
                                <Col className="col md-4">
                                    <SelectFilter />
                                </Col>
                            <div className={width > 850 ?"row container-fluid" : "block"}>
                            </div>
                                <Col className="col md-4">
                                    <Link to="/upload" className="link">
                                        <Button >Try with another image</Button>
                                    </Link>
                                </Col>
                                <Col className="md-4">
                                    <Link to="/video">
                                        <Button >Try with a selfie</Button>
                                    </Link>
                                </Col>
                                <Col className="md-4">
                                    <Link to="/repository">
                                        <Button>Repository</Button>
                                    </Link>
                                </Col>
                                <Col className="col md-4">
                                    <Link to="/resume">
                                        <Button >Get my resume</Button>
                                    </Link>
                                </Col >
                            </div>
              
                </Navbar.Collapse>
            </Container>
          
        </Navbar>
    )
}