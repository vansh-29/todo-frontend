
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
// import Navbar from './components/common/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Todo from './pages/Todo';
import Dashboard from './pages/Dashboard';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
    
    
    <Route index element={<Home/>}/>
    <Route path={'/about'} element={<About/>}/>
    <Route path={'/dashboard'} element={<Dashboard/>}/>
    <Route path={'/todo'} element={<Todo/>}/>

    {/* <Route path={'/create'} element = {<Create/>} /> */}


    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>

    </Route>
  </Routes>
  );
}

export default App;
