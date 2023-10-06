import logo from './logo.svg';
import './App.css';
import Login from './Componets/Login';
import Home from './Componets/Home';
import AboutPage from './Componets/AboutPage';
import Contact from './Componets/Contact';
import { Route, Routes } from 'react-router-dom';
import Registrastion from './Componets/Registrastion';

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/' element= {<Registrastion/>}></Route>
     <Route path='/login' element= {<Login/>}></Route>
     <Route path ='/Home' element = {<Home/>}></Route>
     <Route path ='/about' element = {<AboutPage/>}></Route>
     <Route path ='/contact' element = {<Contact/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
