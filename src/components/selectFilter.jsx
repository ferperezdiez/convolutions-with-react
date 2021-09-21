import React from "react";
import { useDispatch } from "react-redux";
import Kernels from "../Kernels/kernels";
import Sobel from "../Sobel/sobel";
import { addSobel, changeIndex, changeKernel } from "../redux/actions";





export default function SelectFilter(){
    
    const dispatch = useDispatch()
    function clicked(i){        
        dispatch(changeIndex(i))
        dispatch(addSobel({}))
        dispatch(changeKernel(Kernels[i]))
    }
    function clickedSobed(){
        dispatch(addSobel(Sobel))
    }



    return ( 
        <div> 
            { Kernels?.map((kernel, idx) => <button key={idx} onClick={() => 
                   clicked(idx)}>{kernel.name}</button> )} 
            <button onClick={() => 
                   clickedSobed()} >Sobel</button>
        </div> 
    )
}