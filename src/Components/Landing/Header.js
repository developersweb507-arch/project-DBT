import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contentus'>Conten US</Link>
    <Link to='/login'>Login</Link>
    <Link to='/table'>Table</Link>
    <Link to='/pbstable'>SirTable</Link>
    <Link to='/sirprovide'>PB SIR</Link>
    </div>
  )
}

export default Header