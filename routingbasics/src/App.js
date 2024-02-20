import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';


//Add dependency in package-lock.json file of react-router-dom - v 6.3.0
function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainNavBar></MainNavBar>
    </div >
  );
}

export default App;
