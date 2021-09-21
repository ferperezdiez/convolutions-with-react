import React from "react";
import { useDispatch } from "react-redux";
import Kernels from "../Kernels/kernels";
import Sobel from "../Sobel/sobel";
import { addSobel, changeIndex, changeKernel } from "../redux/actions";


export default function SelectFilter(){
    
    const dispatch = useDispatch()
    function clicked(i){        
        dispatch(addSobel({}))
        dispatch(changeIndex(i))
        dispatch(changeKernel(Kernels[i]))
    }
    function clickedSobed(idx){
        dispatch(changeKernel(Kernels[0]))
        dispatch(addSobel(Sobel[idx]))
    }



    return ( 
        <div> 
            { Kernels?.map((kernel, idx) => <button key={idx} onClick={() => 
                   clicked(idx)}>{kernel.name}</button> )} 
           { Sobel?.map((Sob, idx) => <button onClick={() => 
                   clickedSobed(idx)} >{Sob.name}</button>)}
        </div> 
    )
}