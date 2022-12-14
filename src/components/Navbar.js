import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          PORNO APP
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>


          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
           
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
          
            <Link
              to='/Filmes'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Filmes
            </Link>
          </li>

          
          <li className='nav-item'>
          
            <Link
              to='/tvs'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              TVs
            </Link>
          </li>


          <li className='nav-item'>
          
          <Link
            to='/livecam'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Live Cam
          </Link>
        </li>
         
        </ul>

      </nav>
    </>
  );
}

export default Navbar;
