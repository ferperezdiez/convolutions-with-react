import {Container, Navbar } from 'react-bootstrap';
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
                                        <button className="btn btn-primary btn-nav" >Try with an image</button>
                                    </Link>
                                </div>
                                <div className="col ">
                                    <Link to="/video">
                                        <button className="btn btn-primary btn-nav">Try with a selfie</button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/repository">
                                        <button className="btn btn-primary btn-nav">Repository</button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/resume">
                                        <button className="btn btn-primary btn-nav">Get my resume</button>
                                    </Link>
                                </div >
                            </div>
              
                </Navbar.Collapse>
            </Container>
          
        </Navbar>
    )
}