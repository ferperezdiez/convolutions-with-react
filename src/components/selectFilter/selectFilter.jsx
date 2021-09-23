import React from "react";
import { useDispatch } from "react-redux";
import Kernels from "../../Kernels/kernels";
import Sobel from "../../Sobel/sobel";
import { addSobel, changeIndex, changeKernel } from "../../redux/actions";


export default function SelectFilter(){

    
    const kerSrb = [...Kernels, ...Sobel]
    const dispatch = useDispatch()
    function clicked(i){        
        dispatch(addSobel({}))
        dispatch(changeIndex(i))
        if (i < Kernels.length) dispatch(changeKernel(Kernels[i]))
        else dispatch(addSobel(Sobel[i - Kernels.length]))
    }
    

 
    return ( 
        <select onChange={(e) => clicked(e.target.value)}>
            { kerSrb?.map((kernel, idx) => {                
                    return <option key={idx} value={idx} >{kernel.name}</option>
            })}
        </select>
    )
}