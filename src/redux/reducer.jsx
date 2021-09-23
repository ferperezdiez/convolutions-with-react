import { ADD_FILE, ADD_IMAGE, ADD_SOBEL, CHANGE_INDEX, CHANGE_KERNEL } from "./actionsName"

const initialState = {
     kernel:{
        kernel: [
            [0,0,0],
            [0,1,0],
            [0,0,0] 
        ],
        divider: 1,
        posNeg: 1,
        name: 'original'
    },
    sobel:{},
    image:null,
 
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case CHANGE_INDEX: {            
            return {
                ...state,
                index: action.payload
            }
        }
        case CHANGE_KERNEL: {            
            return {
                ...state,
                kernel: action.payload
            }
        }
        case ADD_SOBEL: {
            return {
                ...state,
                sobel: action.payload
            }
        }
        case ADD_IMAGE: {
            return {
                ...state,
                image: action.payload
            }
        }
        case ADD_FILE: {
            return {
                ...state,
                file: action.payload
            }
        }
        default: {
            return state
        }
}
}
