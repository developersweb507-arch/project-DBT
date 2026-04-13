import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='side-div' >

<li>  <Link to='/deshboard'>Attendance</Link></li>
<li>  <Link to='/deshboard/report'>Report</Link></li>
<li>  <Link to='/deshboard/payroll'>Payroll</Link></li>

    </div>
  )
}

export default Sidebar