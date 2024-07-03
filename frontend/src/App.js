import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Home from './components/Home';
import AddEmployee from './components/AddEmployee'
import Main from './components/Main' 
import UpdateEmp from './components/UpdateEmp';
import UserLogin from './components/UserLogin'
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Login />} />
        <Route path={'/userlogin'} element={<UserLogin/>} /> 
        {/* <Route path={'/userlogin'} element={<Main child={<UserLogin/>}/>} />  */}
        <Route path={'/sign'} element={<Signup/>} />   

<Route element={<PrivateRoutes/>}>

        <Route path={'/home'} element={<Main child={<Home/>}/>} />
        <Route path={'/add'} element={<Main child={<AddEmployee/>}/>} /> 
        <Route path={'/update/:id'} element={<Main child={<UpdateEmp/>}/>} /> 

</Route>

      </Routes>
    </>
  );
}

export default App;
