import React from 'react';
import Header from '../../Components/header/Header';
import styles from '../about/about.module.css'

const About = () => {
   return (
      <div className={styles.about}>
         <Header />
         <h1>About</h1>
      </div>
   )
};

export default About;
