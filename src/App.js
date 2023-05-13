import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About';
import Aboutme from './components/Aboutme/Aboutme';
import Skills from './components/Skills/Skills';


import './App.js';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Aboutme />
      <Skills />
    </div>
  );
}

export default App;
