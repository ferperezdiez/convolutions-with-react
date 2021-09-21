import React from 'react';
import Canvas from './canvas';
import SelectFilter from './selectFilter';

function Home(){

    return(
        <div>            
            <SelectFilter/>
            <Canvas/>
        </div>
    )
}
export default Home;