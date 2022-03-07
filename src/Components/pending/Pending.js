import React from 'react';
import calendar from '../../assets/calendar.png';
import styles from '../pending/pending.module.css';
import { useState } from 'react';
import customFetch from '../../api';
import { useEffect } from 'react';
import classnames from 'classnames';


const Pending = ({request}) => {
   
   const [name, setName] = useState("");
   const [requestState, setRequestState] = useState(request.status);

   const requestClass = classnames(styles.pending, {
      [styles.accepted]: request.status === "accepted",
      [styles.declined]: request.status === "declined",
   });

   const onSend = () => {
      const data = {
         from: request.to,
         to: request.from,
         amount: Number(request.amount),
         currency:request.currency
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
       <div className={requestClass} > 
         <div className={styles.dates}>
            <img src={calendar} alt="" />
            <p>{request.date.split('T')[0]}</p>
         </div>
         <h2>Send to {name}</h2>
         <p>{name} requested a payment</p>
         <div className={styles.payclass}>
            <h1>{request.amount} </h1>
            <p>{request.currency}</p> 
         </div>
        
         <div className={styles.buttons}>
            { requestState === "pending" ? 
               <form className= {styles.form}>
                  <button type="button" className={styles.send} onClick={() => onSend()}>✔︎ Send</button>
                  <button type="button" className={styles.cancel} onClick={() => onCancel()}>✗ Cancel</button>      
               </form>
               :
               (requestState === "accepted" ? <p className={styles.accepted}>"ACCEPTED"</p> :
               <p className={styles.declined}>"DECLINED"</p>)
            }

         </div>
      </div>
   )
};

export default Pending;
