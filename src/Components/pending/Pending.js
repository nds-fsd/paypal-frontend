import React from 'react';
import calendar from '../../assets/calendar.png';
import styles from '../pending/pending.module.css';
import { useState } from 'react';
import customFetch from '../../api';
import { useEffect } from 'react';


const Pending = ({request}) => {
   
   const [name, setName] = useState("");
   const [requestState, setRequestState] = useState(request.status);

   const onSend = () => {
      const data = {
         from: request.to,
         to: request.from,
         amount: Number(request.amount),
         currency:"$"
      }
      customFetch("POST", "payments", {body:data});
      const updatedReq = {...request, status: "accepted" };
      customFetch("PUT", "request/" + request._id, {body:updatedReq})
      .then(() => {setRequestState("accepted")});
   }
 
   const onCancel = () => {
      const updatedReq = {...request, status: "declined" };
      customFetch("PUT", "request/" + request._id, {body:updatedReq})
      .then(() => {setRequestState("declined")});
      
   }

   useEffect(() => {
      customFetch("GET", "users/name/" + request.from)
      .then((response) => {setName(response)});
   }, [requestState])

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

            { requestState === "pending" ? 
               <form className= {styles.form}>
                  <button type="button" onClick={() => onSend()}>✔︎ Send</button>
                  <button type="button" onClick={() => onCancel()}>✗ Cancel</button>      
               </form>
               :
               (requestState === "accepted" ? "Accepted" :
               "Declined")
            }

         </div>
      </div>
   )
};

export default Pending;
