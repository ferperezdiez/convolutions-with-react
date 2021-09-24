import { ADD_FILE, ADD_IMAGE, ADD_SOBEL, CHANGE_INDEX, CHANGE_KERNEL } from "./actionsName";

export function changeIndex (index){
    return (dispatch) => {
        dispatch({
            type: CHANGE_INDEX,
            payload: index
        })
    }
}

export function changeKernel (kernel){
    return (dispatch) => {
        dispatch({
            type: CHANGE_KERNEL,
            payload: kernel
        })
    }
}

export function addSobel (sobel){
    return (dispatch) => {
        dispatch({
            type: ADD_SOBEL,
            payload: sobel
        })
    }
}

export function addImage (image){
    return (dispatch) => {
        dispatch({
            type: ADD_IMAGE,
            payload: image
        })
    }
}

export function addFile (file){
    return (dispatch) => {
        dispatch({
            type: ADD_FILE,
            payload: file
        })
    }
}




