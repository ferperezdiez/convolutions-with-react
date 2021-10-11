import {Container, Navbar } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';
import SelectFilter from '../selectFilter/selectFilter';
import './nav.css'

export default function Nav(){

    let userLang = navigator.language || navigator.userLanguage; 
    userLang = userLang.split('').splice(0,2).join('')
  
    return (
        
    <Navbar bg="light" expand="lg" >
        <Container className="d-inline-flex p-2 bd-highlight">
            <Navbar.Toggle aria-controls="row row-cols-lg-5 g-2 g-lg-3 basic-navbar-nav" />
                <Navbar.Collapse className="navbar-collapse collapse collap" >
                            <ul className="ulNav">
                                <li className="liNav">
                                    <SelectFilter />
                                </li>
                                <li className="liNav">
                                    <Link to="/upload" className="link">
                                        <button className="btn btn-primary btn-nav" >
                                            { userLang === 'en' ? 'Try with an image' : 
                                            'Prueba con otra imagen'}</button>
                                    </Link>
                                </li>
                                <li className="liNav">
                                    <Link to="/video">
                                        <button className="btn btn-primary btn-nav">
                                            { userLang === 'en' ? 'Try with a selfie' :
                                            'Prueba con una selfie'}</button>
                                    </Link>
                                </li>
                                <li className="liNav">
                                    <a href="https://api.whatsapp.com/send?phone=542215952135" 
                                        className="btn btn-primary btn-nav">
                                            
                                        {userLang === 'en' ? 'Contact me' : 'Contactarme'}
                                    </a>
                                </li>
                                <li className="liNav">
                                    <Link to="/repository">
                                        <button className="btn btn-primary btn-nav">
                                            { userLang === 'en' ? 'Repository' : 
                                            'Repositorio'}</button>
                                    </Link>
                                </li>
                                <li className="liNav">
                                    <Link to="/resume">
                                        <button className="btn btn-primary btn-nav">
                                            { userLang === 'en' ? 'Get my resume' : 
                                            'Obtén mi CV'}</button>
                                    </Link>
                                </li>
                            </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}