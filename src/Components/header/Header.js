import React from 'react';
import NavButton from '../../Components/NavButton/NavButton';
import styles from '../header/header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
   return (
      <div className={styles.header_container}>
         <nav className={styles.nav_bar}>
            <ul>
               <li><Link to="/">Home</Link>  </li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/pricing">Pricing</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </nav>
            <img src="" alt="" />
            <div className={styles.buttons_style}>
               <div className={styles.login}>
                  <button ><Link to="/login">Login</Link>  </button>
               </div>
               <div className={styles.sign_up}>
                  <button><Link to="/register">Sign Up</Link></button>
               </div>

               
            </div>
      </div>
   )
};

export default Header;
