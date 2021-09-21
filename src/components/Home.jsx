import React from 'react';
import Canvas from './canvas';
import SelectFilter from './selectFilter';
import Video from './video/video';

function Home(){

    return(
        <div>            
            <SelectFilter/>
            <Canvas/> 
            <Video/>
        </div>
    )
}
export default Home;