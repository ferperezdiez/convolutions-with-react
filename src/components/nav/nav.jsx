import { Button, Container, Navbar } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectFilter from '../selectFilter/selectFilter';
import './nav.css'

export default function Nav(){
    return (
        
        <Navbar bg="light" expand="lg" >
         
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse >
                            <div className="container justify-content">
                       
                            <SelectFilter />
                            <Link to="/upload" className="link">
                                <Button >Try with another image</Button>
                            </Link>
                            <Link to="/resume">
                                <Button >Get my resume</Button>
                            </Link>
                                <Link to="/video">
                                    <Button >Try with a selfie</Button>
                                </Link>
                     
                                </div>
              
                </Navbar.Collapse>
            </Container>
          
        </Navbar>
    )
}