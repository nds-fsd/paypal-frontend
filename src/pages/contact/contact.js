import React from 'react';
import Header from '../../Components/header/Header';
import styles from '../../pages/contact/contact.module.css';

const Contact = () => {
   return (
      <div className={styles.contact}>
         <Header />
         <h1>Contacts</h1>
      </div>
   )
};

export default Contact;
