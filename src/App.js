import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing  from './Components/Landing/Landing';
import Home from './Components/Landing/Home';
import About from './Components/Landing/About';
import ContentUs from './Components/Landing/ContentUs';
import Login from './Components/Landing/Login';

import Deshboard from './Components/Dashboard/Deshboard';
import Attendance from './Components/Dashboard/Attendance';
import Report from './Components/Dashboard/Report';
import Payroll from './Components/Dashboard/Payroll';


function App() {
  
  return (
    <BrowserRouter>

   <Routes>
    <Route path='/' element={<Landing/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contentus' element={<ContentUs/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    
    </Route>

    <Route path='/deshboard' element={<Deshboard/>}>
    <Route index element={<Attendance/>}></Route>
    <Route path='report' element={<Report/>}></Route>
    <Route path='payroll' element={<Payroll/>}></Route>
   
    
    </Route>

   </Routes>
 


    </BrowserRouter>
  )
}

export default App;
