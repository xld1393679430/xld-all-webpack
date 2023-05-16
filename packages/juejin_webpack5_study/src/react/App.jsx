import React from "react";
import NotFoundSvg from './assets/imgs/not-found.svg';
import Shanghai from './assets/imgs/shanghai.jpg';
import "./App.css";

const App = () => {
  return (
    <div>
      <p className="title">App</p>
      <hr />
      <NotFoundSvg width="200" height="200" /> 
      <hr />
      <img src={Shanghai} alt="" />
    </div>
  );
};

export default App;
