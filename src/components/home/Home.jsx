import React from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../canvas/canvas';
import Nav from '../nav/nav';


function Home(){

    return(
        <div> 
            <Nav/>           
            <Canvas/>
            <Link to="/video"> 
            <button>Take a selfie</button>
            </Link>
        </div>
    )
}
export default Home;