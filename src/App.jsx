import { Route } from "react-router-dom";
import Home from './components/home/Home.jsx';
import React from "react";
import Video from "./components/video/video.jsx";
import UploadPic from "./components/uploadPicture/uploadPicture.jsx";
import SendResume from "./components/sendResume/sendResume.jsx";
import Repository from "./components/Repository/repository.jsx";
import Streaming from "./components/streaming/Streaming.jsx";


function App() {

  return (
    <div >
      <Route exact path='/upload' component={UploadPic}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/video" component={Video}/>
      <Route exact path="/resume" component={SendResume}/>
      <Route exact path="/repository" component={Repository}/>
      <Route exact path="/streaming" component={Streaming}/>
    </div>
  );
}

export default App;
