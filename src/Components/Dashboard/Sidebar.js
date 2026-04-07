import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div style={{ border:'1px solid red', height:'100vh '}} >

<li>  <Link to='/deshboard'>Attendance</Link></li>
<li>  <Link to='/deshboard/report'>Report</Link></li>
<li>  <Link to='/deshboard/payroll'>Payrol</Link></li>

    </div>
  )
}

export default Sidebar