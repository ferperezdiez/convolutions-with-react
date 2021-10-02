import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../../redux/actions';
import { Redirect } from 'react-router';
import './upLoadPicture.css';
import { Link } from 'react-router-dom';


export default function UploadPic(){
    const image = useSelector(state => state.image)
    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState(undefined)
    dispatch(addImage(selectedFile))
    function selectFile(e){
        let file = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
            setSelectedFile(e.target.result)
        };
    }
    
    function upload(e){
        e.preventDefault()
        dispatch(addImage(selectedFile))
        
        }

    if(image){
        return <Redirect to='/'/>
    }
    else {
        return (
            
                <div className="formStyles">
                    <h5 className="margin upLoadH5">Prueba los filtros con una imagen</h5>
                    <form encType="upLoadForm multipart/form-data" onSubmit={(e) => upload(e)}>
                        <input className="form-control margin" id="formFileMultiple" type="file" onChange={selectFile} /> 
                        <button className="upLoadButton btn btn-primary margin ">enviar</button>    
                    </form>
                    <Link to="/">
                    <button className="upLoadButton btn btn-primary margin ">volver</button> 
                    </Link>
                </div>
          
    )}
}