import { Route } from "react-router-dom";
import Home from './components/home/Home.jsx';
import React from "react";
import Video from "./components/video/video.jsx";

function App() {
  return (
    <div >
     
      <Route exact path="/" component={Home}/>
      <Route exact path="/video" component={Video}/>
    </div>
  );
}

export default App;
