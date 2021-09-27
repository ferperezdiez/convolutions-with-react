import React from 'react';
import { Link } from 'react-router-dom';
import SelectFilter from '../selectFilter/selectFilter';
import SendResume from '../sendResume/sendResume';
import UploadPic from '../uploadPicture/uploadPicture';

export default function Nav(){
    return (
        <div>
            <SelectFilter/>
            <UploadPic/>
            <SendResume/>
            <div>
                <h5>prueba los filtros con una selfie</h5>
                <Link to="/video">
                <button>Take a selfie</button>
                </Link>
            </div>
        </div>
    )
}