import './App.css';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import NameTab from './component/NameTab.js';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {

  const [namearr, setarr] = useState(["Arpit", "Jayesh", "Aniket", "Bittus"])

  function setName(name) {
    setarr([...namearr, name])
  }

  function deleteName(name) {
    setarr(namearr.filter(item => item!== name))
  }



  return (
    <div className="App">
      <Header />
      <NameTab namearr={namearr} addName={setName} deleteName={deleteName} />
      <Footer />
    </div>
  );
}

export default App;
