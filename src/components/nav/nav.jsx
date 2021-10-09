import {Container, Navbar } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectFilter from '../selectFilter/selectFilter';
import './nav.css'

export default function Nav(){

    var width = window.innerWidth
    let userLang = navigator.language || navigator.userLanguage; 
    userLang = userLang.split('').splice(0,2).join('')
  
    return (
        
        <Navbar bg="light" expand="lg" >
                <Container className="d-inline-flex p-2 bd-highlight">
                <Navbar.Toggle aria-controls="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 basic-navbar-nav" />
                <Navbar.Collapse >
                            <div className={width > 850 ?"row container-fluid divSelect" : 
                            "block"}>
                                <div className="col">
                                    <SelectFilter />
                                </div>
                            </div>
                            <div className={width > 850 ?" row container-fluid divLnks" : 
                            "block"}>
                                <div className="col">
                                    <Link to="/upload" className="link">
                                        <button className="btn btn-primary btn-nav" >
                                            { userLang === 'en' ? 'Try with an image' : 
                                            'Prueba con otra imagen'}</button>
                                    </Link>
                                </div>
                                <div className="col ">
                                    <Link to="/video">
                                        <button className="btn btn-primary btn-nav">
                                            { userLang === 'en' ? 'Try with a selfie' :
                                            'Prueba con una selfie'}</button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/repository">
                                        <button className="btn btn-primary btn-nav">
                                            { userLang === 'en' ? 'Repository' : 
                                            'Repositorio'}</button>
                                    </Link>
                                </div>
                                <div className="col">
                                    <Link to="/resume">
                                        <button className="btn btn-primary btn-nav">
                                            { userLang === 'en' ? 'Get my resume' : 
                                            'Obtén mi CV'}</button>
                                    </Link>
                                </div >
                            </div>
              
                </Navbar.Collapse>
            </Container>
          
        </Navbar>
    )
}