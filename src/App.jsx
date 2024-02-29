import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  let [val, setVal] = useState(0)
  function inc () {
    if (val <= 9)
    val = val + 1;
    setVal(val)
  }
  function dec () {
    if (val >= 1)
    {
    //val = val - 1;
    setVal((val) => val-1)
    }
  }
  
  return (
    <>
      <h1>First react project after soooo long!!!</h1>
      <h2>{val}</h2>
      <div>
      <button onClick={inc}
      style={{ margin: "10px" 
      }}
      >Increase!</button>  

      <button onClick={dec}>Decrease</button>
      </div>  
    </>
  )
}

export default App
