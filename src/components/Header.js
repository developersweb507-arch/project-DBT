import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
            <ul className="main_header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="contact">Contect</Link></li>
                <li><Link to="about">About</Link></li>
                 <li><Link to="service">Service</Link></li>
            </ul>
        </div>
    )
}
export default Header