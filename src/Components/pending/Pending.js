import React from 'react';
import calendar from '../../assets/calendar.png';
import styles from '../pending/pending.module.css';
import { useState } from 'react';
import customFetch from '../../api';
import { useEffect } from 'react';


const Pending = ({request, id, send, onSend, cancel, onCancel}) => {
   
   const [name, setName] = useState("");
   const [to, setTo] = useState(null);

   useEffect(() => {
      const to = request.to === id;
      setTo(to);
      customFetch("GET", "users/name/" + (to ? request.to: request.from))
      .then((response) => {setName(response)});
   }, [])

  return (
      <div className={styles.pending}>
         <div className={styles.dates}>
            <img src={calendar} alt="" />
            <p>{request.date.split('T')[0]}</p>
         </div>
         <h2>Send to {name}</h2>
         <p>{name} requested a payment</p>
         <p>{request.amount} {request.currency}</p>
         <div className={styles.buttons}>
            <form className= {styles.form}>
               <button type="button" value={send} onClick={() => {onSend()}}>✔︎ Send</button>
               <button type="button" value={cancel} onClick={() => {onCancel()}}>✗ Cancel</button>      
            </form>
         </div>
      </div>
   )
};

export default Pending;
