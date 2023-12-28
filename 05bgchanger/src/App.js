import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [color, setColor] = useState('olive')
  return (

    <div className="App" style={{ backgroundColor: color }} >


      <button type="button" class="btn btn-primary" onClick={() => setColor('blue')} >Blue</button>{"  "}
      <button type="button" class="btn btn-success" onClick={() => setColor('Green')}>Green</button>{"  "}
      <button type="button" class="btn btn-danger" onClick={() => setColor('Red')}>Red</button>{"  "}

    </div>
  );
}

export default App;
