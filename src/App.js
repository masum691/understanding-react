
// import { useState } from 'react';
import {useState} from 'react';
import './App.css';
import Device from './components/Device/Device'


function App() {
  const [steps, setSteps] = useState(0)
  return (
    <div className="App">
      <Device name="samsung" price="22332" />
    </div>
  );
}

export default App; 
