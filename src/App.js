// import logo from './logo.svg';
// import './App.css';
import { Component } from "react";
import Navbar from "./Components/Navbar.js";
import Consult from "./Components/Consult.js"
import About from "./Components/About.js";
import Services from "./Components/Services.js";
import Youtube from "./Components/YouTubeVideoPlayer.js";


// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-regular-svg-icons';

// library.add(faCheckSquare, faCoffee);


function App() {
  return (
    <div className="App">
      <Navbar />
      <Consult />
      <About/>
       <Services/> 

    </div>
  );
}

export default App;
