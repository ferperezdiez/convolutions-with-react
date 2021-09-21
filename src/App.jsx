import { Route } from "react-router-dom";
import Home from './components/Home';
import React from "react";

function App() {
  return (
    <div >
      <Route exact path="/" component={Home}/>
    </div>
  );
}

export default App;
