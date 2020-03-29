import React from 'react';
import Nav from './Components/Nav.js';
import {Navmenu,intro ,selectmenu ,Forpatients ,Fordocs ,stat ,improve ,countries } from "./Components/Data.js";
import Intro from  './Components/Intro.js';
import Docpatients from  './Components/Docpatients';
import Stats from './Components/Stats';
import Section from './Components/Section';
import Countries from './Components/Countries';
import Footer from './Components/Footer'
import './App.css';




function App() {


  return (
    <div className="App">
   <Nav property={Navmenu}/>
   <Intro theinto={intro}/>
   <Docpatients x={Forpatients} y={Fordocs} z={selectmenu}   />
   <Stats s ={stat}/>
   <Section improve = {improve} /> 
   <Countries countries={countries}/>
   <Footer/>
    </div>

  );
}

export default App;



