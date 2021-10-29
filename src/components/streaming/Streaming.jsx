import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import SelectFilter from '../selectFilter/selectFilter';

import './streaming.css'

export default function Streaming (){

    
    const divider = useSelector(state => state.kernel.divider)
    const posNeg = useSelector(state => state.kernel.posNeg)
    let name = useSelector(state => state.name)
    const sobel = useSelector(state => state.sobel)
    const kernel = useSelector(state => state.kernel.kernel)
    var video = useRef();
    var canvas = useRef()

    
    useEffect((getVideo)=>{
        getVideo()
    },[name])

   

  
    
    var options = {
        audio: false,
        video: {width: 640, height: 480 }
    }
    
    let getVideo = () => {
        if(navigator.mediaDevices.getUserMedia(options)){
            navigator.mediaDevices.getUserMedia(options)
            .then(stream => {
                video.current.srcObject = stream
                
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
            
            for(let y=1; y < 480; y++){
                for(let x=1; x < 640; x++){
                    let idx = ((y*640)+ x) * 4;
                    let result=0;
                    let resultY=0;
                    let resultX=0;
                    for(let kernelY=0; kernelY < kernel.length; kernelY++){
                        for(let kernelX=0; kernelX < kernel[kernelY].length ; kernelX++){
                            if(!sobel.kernelY){
                                result += kernel[kernelY][kernelX] * (pixels[(((y+(kernelY-1)) * 
                                640)+ x+(kernelX-1)) * 4])
                            }
                            else {
                                resultY += sobel.kernelY[kernelY][kernelX] * (pixels[(((y+(kernelY-1)) * 
                                    640)+ x+(kernelX-1)) * 4])
                                resultX += sobel.kernelX[kernelY][kernelX] * (pixels[(((y+(kernelY-1)) * 
                                    640)+ x+(kernelX-1)) * 4])
                            }
                        }
                    }
                    for(let kernelY=0; kernelY < kernel.length; kernelY++)  {
                        for(let kernelX=0; kernelX < kernel[kernelY].length ; kernelX++){
                            if(!sobel.kernelY){
                                result += kernel[kernelY][kernelX] * (pixels[(((y+(kernelY-1)) * 
                                640)+ x+(kernelX-1)) * 4])
                            }
                            else {
                                resultY += sobel.kernelY[kernelY][kernelX] * (pixels[(((y+(kernelY-1)) * 
                                    640)+ x+(kernelX-1)) * 4])
                                resultX += sobel.kernelX[kernelY][kernelX] * (pixels[(((y+(kernelY-1)) * 
                                    640)+ x+(kernelX-1)) * 4])
                            }
                        }
                    }
                    if(sobel.kernelY) {
                        result = Math.sqrt((resultY * resultY)+(resultX * resultX))
                        result = result > 30 ? result : 0                   
                   } 
                   pixels[idx] = sobel.divider? sobel.posNeg*(result/sobel.divider) : posNeg*(result/divider)
                   pixels[idx+1] = sobel.posNeg? sobel.posNeg*(result/sobel.divider) : posNeg*(result/divider)
                   pixels[idx+2] = sobel.divider? sobel.posNeg*(result/sobel.divider) : posNeg*(result/divider)
                   pixels[idx+3]= 255
               }

                }

                imageData.data.set(pixels)
                ctx.putImageData(imageData, 0, 0)

                
                setTimeout(processCamera, 0.1); 
            }


        
    

            getVideo()

    return(
        <div>
            <SelectFilter/>
            <video className="videoStreaming" ref={video} playsInlin autoPlay></video>
            <canvas ref={canvas} width="640" height="480" />
        </div>
    )
}