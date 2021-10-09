
let userLang = navigator.language || navigator.userLanguage; 
userLang = userLang.split('').splice(0,2).join('')

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
        name: userLang === 'es' ? 'máscara de desenfoque 5x5' : 'blur mask 5x5'
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
        name: userLang === 'es' ? 'defensoque gaussiano' : 'Gaussian blur'
    },
    {
        kernel: [
                [ 3, 0,-3],
                [ 0, 0, 0],
                [-3, 0, 3] 
        ],
        divider: 1,
        posNeg: 1,
        name: userLang === 'es' ? 'detección de bordes (I)' : 'border detection (I)'
    },
    {
        kernel: [
            [0, 1,0],
            [1,-4,1],
            [0, 1,0],  
            ],
        divider: 1,
        posNeg: 1,
        name: userLang === 'es' ? 'detección de bordes (II)' : 'border detection (II)'  
    },
    {
        kernel: [
            [-1,-1,-1],
            [-1, 8,-1],
            [-1,-1,-1],  
            ],
        divider: 1,
        posNeg: 1,
        name: userLang === 'es' ? 'detección de bordes (III)' : 'border detection (III)'
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
        name: userLang === 'es' ? 'desenfoque de cuadro' : 'frame blur'
    },
    {
        kernel: [
            [0,1,0],
            [1,-10,1],
            [0,1,0],  
            ],
        divider: 5,
        posNeg: -1,
        name: userLang === 'en' ? 'lighting' : 'iluminación'
    },
    {
        kernel: [
            [-1,-1,-1],
            [-1,9,-1],
            [-1,-1,-1]  
            ],
         divider: 1,
        posNeg: 1,
       name: userLang === 'en' ? 'sharper' : 'nitidez' 
    },
    {
        kernel: [
            [-2, -1, 0,],
            [-1,  1, 1,],
            [0,  1, 2]  
            ],
         divider: 1,
        posNeg: 1,
       name: userLang === 'es' ? 'Límites definidos' : 'sharp border'
    },
    {
        kernel: [
            [-1, 0,1],
            [0, 1, 0],
            [0, 0, 1]  
            ],
         divider: 3,
        posNeg: 1,
       name: userLang === 'en' ? 'darken' : 'oscurecer'
    },
];


export default Kernels;

