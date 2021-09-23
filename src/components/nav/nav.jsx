import React from 'react';
import SelectFilter from '../selectFilter/selectFilter';
import UploadPic from '../uploadPicture/uploadPicture';

export default function Nav(){
    return (
        <div>
            <SelectFilter/>
            <UploadPic/>
        </div>
    )
}