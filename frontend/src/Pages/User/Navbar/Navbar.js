// src/components/Navbar.js
import React from 'react';
import classes from './Navbar.module.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar_logo}>
  
      <span><FontAwesomeIcon icon={faGamepad} style={{color:"#61dafb",paddingRight:'4px'}}/></span>
       
        <span>Game Mate</span>
      </div>
      <div className={classes.navbar_links}>
        
        <Link to='/'> Home</Link>
        <Link to='/SessionPage'> New Session</Link>
        <Link to='/freinds'> Find freinds</Link>
        <Link to='/YourPosts'>Your Posts</Link>
        <Link to='/Profile'>Profile</Link>
        
        

      </div>
    </nav>
  );
};

export default Navbar;
