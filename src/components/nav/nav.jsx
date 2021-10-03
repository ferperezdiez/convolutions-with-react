import { Button, Container, Navbar } from 'react-bootstrap';
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
                            <div className={width > 850 ?"divSelect row container-fluid" : "block"}>
                                <div className="col">
                                    <SelectFilter />
                                </div>
                            </div>
                            <div className={width > 850 ?"divLnks row container-fluid" : "block"}>
                                <div className="col">
                                    <Link to="/upload" className="link">
                                        <Button >Try with another image</Button>
                                    </Link>
                                </div>
                                <div className="col ">
                                    <Link to="/video">
                                        <Button >Try with a selfie</Button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/repository">
                                        <Button>Repository</Button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/resume">
                                        <Button >Get my resume</Button>
                                    </Link>
                                </div >
                            </div>
              
                </Navbar.Collapse>
            </Container>
          
        </Navbar>
    )
}