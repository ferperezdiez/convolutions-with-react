
const Sobel = 
{
    kernelY: [
            [-1, 0, 1],
            [-2, 0, 2],
            [-1, 0, 1]
    ],
    kernelX: [
            [-1,-2,-1],
            [ 0, 0, 0],
            [ 1, 2, 1]
    ]               
}

export default Sobel;