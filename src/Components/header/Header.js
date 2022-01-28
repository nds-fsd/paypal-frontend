import React from 'react';
import NavButton from '../../Components/NavButton/NavButton';
import styles from '../header/header.module.css';


const Header = () => {
   return (
      <div className={styles.header_container}>
         <div className={styles.buttons_style}>
         <NavButton path="/login" text="Login"/>
         <NavButton path="/register" text="Register"/>
         </div>
      </div>
   )
};

export default Header;
