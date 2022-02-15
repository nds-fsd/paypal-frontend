import React from 'react';
import calendar from '../../assets/calendar.png'
import styles from '../pending/pending.module.css'
import { useEffect, useState } from 'react';
import customFetch from '../../api';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";


const Pending = () => {
   const { amount, setAmount, currency, setCurrency, from, setFrom, to, setTo, date, setDate } = useContext(UserContext);
   const [send, setSend] = useState();
   const [cancel, setCancel] = useState();

   useEffect(() => {
         const userSession = localStorage.getItem("user-session");
         const { id  } = JSON.parse(userSession);

         customFetch("GET", "request/request/" + id)
         .then((json) => {
            setFrom(json.from);
            setTo(json.to);
            setAmount(json.amount);
            setCurrency(json.currency);
            setDate(json.date);
          })
        
         console.log("petition accepted");
    }, [setFrom, setAmount, setCurrency, setTo, setDate ]);


  return (
      <div className={styles.pending}>
         <div className={styles.dates}>
            <img src={calendar} alt="" />
            <p>{date}</p>
         </div>
         <h2>Send to {to}</h2>
         <p>{from} requested a payment</p>
         <p>{amount} {currency}</p>
         <div className={styles.buttons}>
            <form className= {styles.form}>
               <button type="button" value={send} onClick={(e)=>{setSend(e.target.value)}}>✔︎ Send</button>
               <button type="button" value={cancel} onClick={(e)=>{setCancel(e.target.value)}}>✗ Cancel</button>      
            </form>
         </div>
      </div>
   )
};

export default Pending;
