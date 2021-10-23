import React, { useEffect } from 'react';
import { useRef } from 'react';

import './streaming.css'

export default function Streaming (){

    


    var video = useRef();
    var canvas = useRef()

    
    useEffect(()=>{
        getVideo()
        
        
       
    },[])
    
    var options = {
        audio: false,
        video: {width: 640, height: 480 }
    }
    
    let getVideo = () => {
        if(navigator.mediaDevices.getUserMedia(options)){
            navigator.mediaDevices.getUserMedia(options)
            .then(stream => {
                video.current.srcObject = stream
                let boolean = true
                processCamera()
                
            })
            .catch(err => console.log(err))
        }
    }

    let processCamera = () => {

            let ctx = canvas.current.getContext('2d')
            ctx.drawImage(video.current, 0, 0, 640, 480, 0, 0, 640, 480)
            let imageData = ctx.getImageData(0, 0, 640, 480)
            let pixels = imageData.data
            for(let p=0; p < pixels.length; p +=4){
                let red = pixels[p];
                let green = pixels[p+1];
                let blue = pixels[p+2];
                let gray = (red + green + blue)/3
                pixels[p] = gray;
                pixels[p+1] = gray;
                pixels[p+2] = gray;
            }
            ctx.putImageData(imageData, 0, 0)

            
            setTimeout(processCamera, 20)

        
    }

    const  blackAndWhite = (canvas, image) => {
        const ctx = canvas.current.getContext("2d");       
        let imageData = ctx.getImageData(0, 0, image.width, image.height);
        let pixels = imageData.data;
        for(let p=0; p < pixels.length; p +=4){
            let red = pixels[p];
            let green = pixels[p+1];
            let blue = pixels[p+2];
            let gray = (red + green + blue)/3
            pixels[p] = gray;
            pixels[p+1] = gray;
            pixels[p+2] = gray;
        }
        ctx.putImageData(imageData, 0, 0)
    }

    return(
        <div>
            <video className="videoStreaming" ref={video} playsInlin autoPlay></video>
            <canvas ref={canvas} width="640" height="480" />
        </div>
    )
}