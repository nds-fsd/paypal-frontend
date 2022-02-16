import React from 'react';
import calendar from '../../assets/calendar.png';
import styles from '../pending/pending.module.css';



const Pending = ({request, id }) => {
 



  return (
      <div className={styles.pending}>
         <div className={styles.dates}>
            <img src={calendar} alt="" />
            <p>{request.date.split('T')[0]}</p>
         </div>
         <h2>Send to {}</h2>
         <p>{} requested a payment</p>
         <p>{request.amount} {request.currency}</p>
         <div className={styles.buttons}>
            <form className= {styles.form}>
               <button type="button"  >✔︎ Send</button>
               <button type="button" >✗ Cancel</button>      
            </form>
         </div>
      </div>
   )
};

export default Pending;
