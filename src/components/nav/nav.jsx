import React from 'react';
import { Link } from 'react-router-dom';
import SelectFilter from '../selectFilter/selectFilter';
import SendResume from '../sendResume/sendResume';
import UploadPic from '../uploadPicture/uploadPicture';

export default function Nav(){
    return (
        <div>
            <SelectFilter/>
            <Link to="/upload">
                <button>Try with another image</button>
            </Link>
            <Link to="/resume">
                <button>Get my resume</button>
            </Link>
            <div>
                <Link to="/video">
                <button>Try with a selfie</button>
                </Link>
            </div>
        </div>
    )
}