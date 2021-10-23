
export const  blackAndWhite = (canvas, image) => {
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