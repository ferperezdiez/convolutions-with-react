import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { addFile, addImage } from "../../redux/actions";
import './video.css'



export default function Video(){
    
    let userLang = navigator.language || navigator.userLanguage; 
    userLang = userLang.split('').splice(0,2).join('')
    const dispatch = useDispatch()
    const videoRef = useRef()
    
    const videoConstraints = {
        facingMode: "user"
      };

    const screenShot = () => {
        let img = videoRef.current.getScreenshot()
        dispatch(addFile(null))
        dispatch(addImage(img))
    }

    return(
        <div >
           <div className="videoContainer">
               <Webcam className="img-fluid video" ref={videoRef} 
                    videoConstraints={videoConstraints}/>
                <Link className="buttonVideo" to="/">
                    <button className="btn btn-primary " onClick={screenShot}>ScreenShot</button>
                </Link> 
           </div>
           <div className="videoContainer">
                <Link to="/"className="buttonVideo2">
                        <button className="btn btn-primary ">
                            {userLang === 'en' ? 'BACK' : 'VOLVER'}</button>
                </Link>                
            </div>
       </div>
        
    )
}