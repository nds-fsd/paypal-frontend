import React from 'react';
import calendar from '../../assets/calendar.png';
import styles from '../pending/pending.module.css';
import { useState } from 'react';
import customFetch from '../../api';
import { useEffect } from 'react';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";


const Pending = ({request, id }) => {
   const [send, setSend] = useState();
   const [cancel, setCancel] = useState(0);
   const [name, setName] = useState("");
   const [to, setTo] = useState(null);

   const { setErr, email, amount } = useContext(UserContext);


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
               <button type="button" value={send} >✔︎ Send</button>
               <button type="button" value={cancel}>✗ Cancel</button>      
            </form>
         </div>
      </div>
   )
};

export default Pending;
