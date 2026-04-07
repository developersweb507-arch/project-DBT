import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Deshboard() {
  return (
    <div style={{display:'flex'}}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Deshboard