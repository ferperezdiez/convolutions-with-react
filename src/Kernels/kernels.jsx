


const Kernels = [
    {
        kernel: [
            [0,0,0],
            [0,1,0],
            [0,0,0] 
        ],
        divider: 1,
        posNeg: 1,
        name: 'original'
    },       
    {
        kernel: [
            [1,4,6,4,1],
            [4,16,24,16,4],
            [6,24,-476,24,6],
            [4,16,24,16,4],
            [1,4,6,4,1]
        ],
        divider: 256,
        posNeg: -1,
        name: 'máscara de desenfoque 5x5'
    }, 
    {
        kernel: [
                [1, 4, 6, 4,1],
                [4,16,24,16,4],
                [6,24,36,24,6],
                [4,16,24,16,4],
                [1, 4, 6, 4,1]
        ],
        divider: 256,
        posNeg: 1,
        name: 'defensoque gaussiano'
    },
    {
        kernel: [
                [ 3, 0,-3],
                [ 0, 0, 0],
                [-3, 0, 3] 
        ],
        divider: 1,
        posNeg: 1,
        name: 'detección de bordes (I)'
    },
    {
        kernel: [
            [0, 1,0],
            [1,-4,1],
            [0, 1,0],  
            ],
        divider: 1,
        posNeg: 1,
        name: 'detección de bordes (II)'   
    },
    {
        kernel: [
            [-1,-1,-1],
            [-1, 8,-1],
            [-1,-1,-1],  
            ],
        divider: 1,
        posNeg: 1,
        name: 'detección de bordes (III)'
    },
    {
        kernel: [
            [0,-1, 0],
            [-1,5,-1],
            [0,-1, 0],  
            ],
        divider: 1,
        posNeg: 1,
        name: 'enfoque'   
    },
    {
        kernel: [
            [1,1,1],
            [1,1,1],
            [1,1,1],  
            ],
        divider: 9,
        posNeg: 1,
        name: 'desenfoque de cuadro'
    },
    {
        kernel: [
            [1,2,1],
            [2,4,2],
            [1,2,1],  
            ],
        divider: 16,
        posNeg: 1,
        name: 'desenfoque gaussiano 3x3' 
    },
    {
        kernel: [
            [0,1,0],
            [1,-10,1],
            [0,1,0],  
            ],
        divider: 5,
        posNeg: -1,
        name: 'lighting' 
    },
    {
        kernel: [
            [-1,-1,-1],
            [-1,9,-1],
            [-1,-1,-1]  
            ],
         divider: 1,
        posNeg: 1,
       name: 'sharper' 
    },
    {
        kernel: [
            [-2, -1, 0,],
            [-1,  1, 1,],
            [0,  1, 2]  
            ],
         divider: 1,
        posNeg: 1,
       name: 'repujado' 
    },
];


export default Kernels;

