import React from 'react';
import calendar from '../../assets/calendar.png'
import styles from '../pending/pending.module.css'
import { useEffect, useState } from 'react';
import customFetch from '../../api';


const Pending = () => {

   const [data, setData] = useState([]);

   useEffect(() => {
      customFetch("GET", "request", {body: data})
      .then((json) => {
         setData(json);
        })
        .catch(error => {
            'REQUEST_FAILED'
          console.error(error);
        });
    }, [data]);



  return (
      <div className={styles.pending}>
         <div className={styles.dates}>
            <img src={calendar} alt="" />
            <p>{data.date}</p>
         </div>
         <h2>Send to {data.to}</h2>
         <p>{data.from} requested a payment</p>
         <p>{data.amount} {data.currency}</p>
         <div className={styles.buttons}>
            <button>✔︎ Send</button>
            <button>✗ Cancel</button>
         </div>
      </div>
   )
};

export default Pending;
