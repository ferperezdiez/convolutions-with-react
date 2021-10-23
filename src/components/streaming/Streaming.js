import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

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
            setTimeout(processCamera, 20)
        
    }

    return(
        <div>
            <video ref={video} playsInlin autoPlay></video>
            <canvas ref={canvas} width="640" height="480" />
        </div>
    )
}