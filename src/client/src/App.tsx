import React from 'react';
import './App.css';
import GainSlider from "./Components/GainSlider/GainSlider"

function App() {
  return (
    <div className="App">
        <GainSlider/>
        <h2 style={{color:"white"}}>Gain Amount</h2>
    </div>
  );
}

export default App;
