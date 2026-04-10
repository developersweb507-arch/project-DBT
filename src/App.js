import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing  from './Components/Landing/Landing';
import Home from './Components/Landing/Home';
import About from './Components/Landing/About';
import ContentUs from './Components/Landing/ContentUs';
import Login from './Components/Landing/Login';
import Table from './Components/Landing/Table';
import Pb_table from './Components/Landing/Pb_table'

import Deshboard from './Components/Dashboard/Deshboard';
import Attendance from './Components/Dashboard/Attendance';
import Report from './Components/Dashboard/Report';
import Payroll from './Components/Dashboard/Payroll';

import TablePractice from './PBS/TablePractice';


function App() {
  
  return (
    <BrowserRouter>

   <Routes>
    <Route path='/' element={<Landing/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contentus' element={<ContentUs/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/table' element={<Table/>}></Route>
    <Route path='/pbstable' element={<Pb_table/>}></Route>
    
    </Route>

    <Route path='/deshboard' element={<Deshboard/>}>
    <Route index element={<Attendance/>}></Route>
    <Route path='report' element={<Report/>}></Route>
    <Route path='payroll' element={<Payroll/>}></Route>
   
    </Route>

     <Route path='/sirprovide' element={<TablePractice/>}>
    
   
    </Route>

   </Routes>
 


    </BrowserRouter>
  )
}

export default App;
