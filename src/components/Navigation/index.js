import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);



  return (
    <ul className='blacksheep'>
      <li className='topbar'>
        <NavLink to='/services' className='uploadtxt'>
          <div className='navlinktopbar'>
            Services
          </div>
        </NavLink>
        </li>
        <li className='topbar'>
        <NavLink to='/about' className='uploadtxt'>
          <div className='navlinktopbar' >
            About Us
          </div>
        </NavLink>
      </li>
      <li className='topbar'>
        <NavLink to='/contact' className='uploadtxt'>
          <div className='navlinktopbar' >
            Contact Us
          </div>
        </NavLink>
      </li>
      <li className='topbar'>
        <NavLink to='/work' className='uploadtxt'>
          <div className='navlinktopbar' >
            Portfolio
          </div>
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
