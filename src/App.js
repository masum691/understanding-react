
// import { useState } from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import Device from './components/Device/Device'


function App() {
  const [steps, setSteps] = useState(0)
  const handleWalk = () => {
    setSteps(steps + 1)
    // console.log(steps)
  }
  useEffect ( () => {
    console.log(steps)
  }, [steps])
  return (
    <div className="App">
      <Device name="samsung" price="22332" steps={steps} />
      <h3>My Steps: {steps}</h3>
      <button onClick={handleWalk}>Walk</button>
    </div>
  );
}

export default App;
