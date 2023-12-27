import './App.css';
import React, { useState } from 'react';


function App() {

  //let count = 0;
  // useState() return two things 
  const [count, setCounter] = useState(0)
  /* is initial value of count
   Now ew can change count with the value of the setcounter
   AND NOW IF COUNT CHANGES THE PAGES GETS RE RENDER AUTOMATICALLY
   BECAUSE IT IS ASSOCIATED WITH THE State*/

  const addValue = () => {
    setCounter(count + 1)
  }

  const decreaseValue = () => {
    if (count !== 0) {
      setCounter((prevCount) => prevCount - 1)
    }
  }

  return (
    <div className='App'>

      <h1>React Practice  </h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={addValue}> Add Value</button>{" "}
      <button onClick={decreaseValue}> remove value</button>
      <p> Footer: {count}</p>
    </div>
  );
}

export default App;