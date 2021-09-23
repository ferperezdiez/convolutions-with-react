import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { addFile, addImage } from "../../redux/actions";



export default function Video(){
    //const [onOff, setOnOff] = useState(true)
    const [image, setImage] = useState(null)
    const webRef = useRef()
    const dispatch = useDispatch()

    const videoConstraints = {
        facingMode: "user"
      };

    const screenShot = () => {
        let img = webRef.current.getScreenshot()
        setImage(img)
        dispatch(addFile(null))
        dispatch(addImage(img))
        //setOnOff(false)
    }
  
    // const turn = () => {
    //     setOnOff(!onOff)
    // }
   
    return(
        <div>
            {/* <button onClick={turn}>{onOff ? 'Off' : 'On'}</button> */}
           
           <div>
               <Webcam ref={webRef} videoConstraints={videoConstraints}/>
                <Link to="/">
                    <button onClick={screenShot}>ScreenShot</button>
                </Link> 
                <img src={image} alt={null}/>
           </div>
           
        </div>
    )
}