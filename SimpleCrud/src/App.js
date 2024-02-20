import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import AddForm from './components/AddForm';
import DashBoard from './components/DashBoard';
import { MainPage } from './components/MainPage';
import AllUsers from './components/AllUsers';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}>
          <Route path='add' element={<AddForm></AddForm>}></Route>
          <Route path='show' element={<AllUsers></AllUsers>}>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
