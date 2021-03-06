import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addImage } from '../../redux/actions';
import { Redirect } from 'react-router';
import './upLoadPicture.css';
import { Link } from 'react-router-dom';


export default function UploadPic(){

    let userLang = navigator.language || navigator.userLanguage; 
    userLang = userLang.split('').splice(0,2).join('')
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
            <>
                <div className="formStyles">
                    <h5 className="margin upLoadH5">
                        {userLang === 'es'? 'Prueba los filtros con otra imagen' :
                        'Try the filters with another image'}</h5>
                    <form encType="upLoadForm multipart/form-data" className="uploadForm"
                        onSubmit={(e) => upload(e)}>
                        <input className="form-control margin" id="formFileMultiple" 
                            type="file" onChange={selectFile} /> 
                        <button className="upLoadButton btn btn-primary margin">
                            {userLang === 'en'? 'SEND' :
                            'ENVIAR'}</button>    
                    </form>
                </div>
                <div className="uploadLink">
                     <Link to="/" >
                    <button className=" btn btn-primary margin2">
                        {userLang === 'en' ? 'BACK' :
                        'VOLVER'}</button> 
                    </Link>
                </div>
          </>
    )}
}