import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import picture from '../images/foto1.jpg';
 


function Canvas(){

const [image, setImage] =  useState(null)  
let canvas = useRef()
let result = useRef()
const sobel = useSelector(state => state.sobel)
const kernel = useSelector(state => state.kernel.kernel)
const divider = useSelector(state => state.kernel.divider)
const posNeg = useSelector(state => state.kernel.posNeg)
let name = useSelector(state => state.kernel.name)
let screenShot = useSelector(state => state.image)
 
useEffect(()=>{
    let image = new Image();
    image.src =screenShot? screenShot : picture;
    image.onload = ()=> setImage(image);
}, [screenShot])

useEffect(()=>{
    if(image && canvas && result){
        const ctx = canvas.current.getContext("2d");       
        ctx.drawImage(image,0, 0, image.width, image.height);
        blackAndWhite(canvas)
        convolutions(canvas, result)
    }
}, [image, canvas, kernel, blackAndWhite])

    function blackAndWhite(canvas){
        const ctx = canvas.current.getContext("2d");       
        let imageData = ctx.getImageData(0, 0, image.width, image.height);
        let pixels = imageData.data;
        for(let p=0; p < pixels.length; p +=4){
            let red = pixels[p];
            let green = pixels[p+1];
            let blue = pixels[p+2];
            //let alpha = pixels[p+3];
            let gray = (red + green + blue)/3
            
            pixels[p] = gray;
            pixels[p+1] = gray;
            pixels[p+2] = gray;
        }
        ctx.putImageData(imageData, 0, 0)
    }

    
    
    function convolutions(canvasFont, canvasDestination){
        let ctxFont = canvasFont.current.getContext("2d");
        let ImageDataFont = ctxFont.getImageData(0, 0, image.width, image.height)
        let FontPixels = ImageDataFont.data       

        let ctxDestination = canvasDestination.current.getContext("2d");
        let ImageDataDestination = ctxDestination.getImageData(0, 0, image.width, image.height)
        let DestinationPixels = ImageDataDestination.data

        
        for(let y=1; y < image.height; y++){
            for(let x=1; x < image.width; x++){
                let idx = ((y*image.width)+ x) * 4;
                let result=0;
                let resultY=0;
                let resultX=0;
                for(let kernelY=0; kernelY < kernel.length; kernelY++){
                    for(let kernelX=0; kernelX < kernel[kernelY].length ; kernelX++){
                        if(!sobel.kernelY){
                            result += kernel[kernelY][kernelX] * (FontPixels[(((y+(kernelY-1)) * 
                            image.width)+ x+(kernelX-1)) * 4])
                        }
                        else {
                            resultY += sobel.kernelY[kernelY][kernelX] * (FontPixels[(((y+(kernelY-1)) * 
                                image.width)+ x+(kernelX-1)) * 4])
                            resultX += sobel.kernelX[kernelY][kernelX] * (FontPixels[(((y+(kernelY-1)) * 
                                image.width)+ x+(kernelX-1)) * 4])
                        }
                        
                    }
                }
              
                if(sobel.kernelY) {
                    result = Math.sqrt((resultY * resultY)+(resultX * resultX))
                    result = result > 30 ? result : 0                   
               }                

                DestinationPixels[idx] = sobel.divider? sobel.posNeg*(result/sobel.divider) : posNeg*(result/divider)
                DestinationPixels[idx+1] = sobel.posNeg? sobel.posNeg*(result/sobel.divider) : posNeg*(result/divider)
                DestinationPixels[idx+2] = sobel.divider? sobel.posNeg*(result/sobel.divider) : posNeg*(result/divider)
                DestinationPixels[idx+3]= 255
            }
        }
            
        ctxDestination.putImageData(ImageDataDestination, 0, 0)        
    } 
    return(       
        <div>
            <canvas ref={canvas} 
            width={image? image.width : 400} height={image? image.height : 556+80}>original</canvas>
           <canvas ref={result} 
            width={image? image.width : 400} height={image? image.height : 556+80}>{name}</canvas>
             {!sobel.name? name : sobel.name}
        </div>   
    )
}
export default Canvas;