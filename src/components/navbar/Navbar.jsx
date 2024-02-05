import React, { useState } from 'react'
import {SiDatabricks} from 'react-icons/si'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)


  return (
    <div name='top' className='navbar'>
        <div className="container">
            <div className="logo">
                <SiDatabricks className='icon' />
                <h1>Secured</h1>
            </div>
            <ul className={nav ? 'nav-menu active' : "nav-menu"}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Recovery'>Recovery</Link></li>
                <li><Link to='/Cloud'>Cloud</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <button>Sign In</button>
            </ul>
            <div className="hamburger" onClick={handleNav}> 
            {!nav ? (<FaBars  className='icon'/>) : (<FaTimes  className='icon'/>)}
                
            </div>
        </div>
    </div>
  )
}

export default Navbar