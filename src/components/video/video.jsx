import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Webcam from "react-webcam";
import { addFile, addImage } from "../../redux/actions";
import './video.css'



export default function Video(){
    //const [onOff, setOnOff] = useState(true)
    
    const webRef = useRef()
    const dispatch = useDispatch()

    const videoConstraints = {
        facingMode: "user"
      };

    const screenShot = () => {
        let img = webRef.current.getScreenshot()
        
        dispatch(addFile(null))
        dispatch(addImage(img))
        //setOnOff(false)
    }
  
    // const turn = () => {
    //     setOnOff(!onOff)
    // }
   
    return(
       <div >
           <div className="videoContainer">
               <Webcam className="img-fluid video" ref={webRef} 
                    videoConstraints={videoConstraints}/>
                <Link className="buttonVideo" to="/">
                    <button className="btn btn-primary " onClick={screenShot}>ScreenShot</button>
                </Link> 
           </div>
           <div className="videoContainer">
                <Link to="/"className="buttonVideo2">
                        <button className="btn btn-primary ">volver</button>
                </Link>                
            </div>

       </div>
        
    )
}