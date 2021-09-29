import React from "react";
import { useDispatch } from "react-redux";
import Kernels from "../../Kernels/kernels";
import Sobel from "../../Sobel/sobel";
import { addSobel, changeIndex, changeKernel } from "../../redux/actions";
import { NavDropdown } from "react-bootstrap";


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
        <div className="col-4">
           
            <NavDropdown onChange={(e) => clicked(e.target.value)} title="Select a filter" id="basic-nav-dropdown">
           
            { kerSrb?.map((kernel, idx) => {   
                return  <NavDropdown.Item key={idx} value={idx} >{kernel.name}</NavDropdown.Item>
            
            
            })}
        </NavDropdown>
        </div>
    )
}