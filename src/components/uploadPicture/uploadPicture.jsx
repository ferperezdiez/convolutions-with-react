import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { addImage } from '../../redux/actions';

export default function UploadPic(){
 
    const dispatch = useDispatch()
    const [selectedFile, setSelectedFile] = useState(null)
    
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
   
    return (
        <div>
            <h5>Prueba los filtros con una imagen</h5>
            <form encType="multipart/form-data" onSubmit={(e) => upload(e)}>
                <input type="file" onChange={selectFile} /> 
                    <button>enviar</button>    
            </form>
        </div>
    )
}