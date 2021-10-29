import React from "react";
import { useDispatch } from "react-redux";
import Kernels from "../../Kernels/kernels";
import Sobel from "../../Sobel/sobel";
import { addSobel, changeIndex, changeKernel, changeName } from "../../redux/actions";
import { NavDropdown, NavItem, NavLink } from "react-bootstrap";
import './selectFilter.css';


export default function SelectFilter(){

    let userLang = navigator.language || navigator.userLanguage; 
    userLang = userLang.split('').splice(0,2).join('')
    const kerSrb = [...Kernels, ...Sobel]
    const dispatch = useDispatch()
    function clicked(i){   
        console.log(i)     
        dispatch(addSobel({}))
        dispatch(changeIndex(i))
        if (i < Kernels.length) {
            dispatch(changeKernel(Kernels[i]))
            dispatch(changeName(Kernels[i].name))
        }
        else {
            dispatch(addSobel(Sobel[i - Kernels.length]))
            dispatch(changeName(Sobel[i - Kernels.length].name))}
    }

    return ( 
      
            <NavDropdown className="btn btn-success btn-nav"  
                onSelect={clicked} title={ userLang === 'en' ? "Select a filter" : 
                "Selecciona un filtro"} id="basic-nav-dropdown">           
                    { kerSrb?.map((kernel, idx) => {   
                    return  <NavItem key={idx} >
                                <NavLink eventKey={idx} title={kernel.name}>
                                    {kernel.name}</NavLink>
                            </NavItem> })}            
            </NavDropdown>
      
    )
}