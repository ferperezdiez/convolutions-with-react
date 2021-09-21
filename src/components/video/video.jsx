import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { addImage } from "../../redux/actions";



export default function Video(){
    const [onOff, setOnOff] = useState(false)
    const [image, setImage] = useState(null)
    const webRef = useRef()
    const dispatch = useDispatch()

    const videoConstraints = {
        facingMode: "user"
      };

    const screenShot = () => {
        let img = webRef.current.getScreenshot()
        setImage(img)
        dispatch(addImage(img))
    }
  
    const turn = () => {
        setOnOff(!onOff)
    }
    console.log(onOff)
    return(
        <div>
            <button onClick={turn}>{onOff ? 'Off' : 'On'}</button>
           {onOff ? 
           <div>
               <Webcam ref={webRef} videoConstraints={videoConstraints}/> 
                <button onClick={screenShot}>ScreenShot</button>
           </div>
           : null}
           <img src={image}/>
        </div>
    )
}