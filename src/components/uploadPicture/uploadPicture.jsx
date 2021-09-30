import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../../redux/actions';
import { Redirect } from 'react-router';
import './upLoadPicture.css';


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
            <div className="uploadContainer">
                <div className="formStyles">
                    <h5 className="margin">Prueba los filtros con una imagen</h5>
                    <form encType="multipart/form-data" onSubmit={(e) => upload(e)}>
                        <input className="form-control margin" id="formFileMultiple" type="file" onChange={selectFile} /> 
                        <button className="btn btn-primary margin">enviar</button>    
                    </form>
                </div>
            </div>
    )}
}