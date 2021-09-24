import React from 'react';
import SelectFilter from '../selectFilter/selectFilter';
import SendResume from '../sendResume/sendResume';
import UploadPic from '../uploadPicture/uploadPicture';

export default function Nav(){
    return (
        <div>
            <SelectFilter/>
            <UploadPic/>
            <SendResume/>
        </div>
    )
}