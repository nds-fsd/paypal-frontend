import React from 'react';
import calendar from '../../assets/calendar.png'
import styles from '../pending/pending.module.css'

const Pending = () => {
  return (
   <div className={styles.pending}>
            <div className={styles.dates}>
               <img src={calendar} alt="" />
               <p>data / time</p>
            </div>
            <h2>Send to {}</h2>
            <p>{} requested a payment</p>
            <p>{}$</p>
            <div className={styles.buttons}>
               <button>✔︎ Send</button>
               <button>✗ Cancel</button>
            </div>
   </div>
   )
};

export default Pending;
