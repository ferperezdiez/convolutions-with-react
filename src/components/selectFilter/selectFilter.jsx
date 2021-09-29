import React from "react";
import { useDispatch } from "react-redux";
import Kernels from "../../Kernels/kernels";
import Sobel from "../../Sobel/sobel";
import { addSobel, changeIndex, changeKernel } from "../../redux/actions";
import { Col, NavDropdown, NavItem, NavLink } from "react-bootstrap";


export default function SelectFilter(){
    
    const kerSrb = [...Kernels, ...Sobel]
    const dispatch = useDispatch()
    function clicked(i){   
        console.log(i)     
        dispatch(addSobel({}))
        dispatch(changeIndex(i))
        if (i < Kernels.length) dispatch(changeKernel(Kernels[i]))
        else dispatch(addSobel(Sobel[i - Kernels.length]))
    }

    return ( 
        <Col className="md-4">
            <NavDropdown onSelect={clicked} title="Select a filter" id="basic-nav-dropdown">           
                { kerSrb?.map((kernel, idx) => {   
                return  <NavItem key={idx} >
                            <NavLink eventKey={idx} title={kernel.name}>{kernel.name}</NavLink>
                        </NavItem> })}            
                </NavDropdown>
        </Col>
    )
}