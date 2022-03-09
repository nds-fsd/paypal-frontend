import React from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import styles from '../linechart/linechart.module.css';
import { UserContext } from "../../context/userContext";
import { useContext, useEffect, useState } from "react";
import { getStorageObject } from '../../api/storage';
import customFetch from '../../api';


const RenderLineChart = () => {

   const { payments, setPayments } = useContext(UserContext);
   const [income, setIncome] = useState(0);
   const [outcome, setOutcome] = useState(0);

   useEffect(() => {
         const userSession = getStorageObject;
         const { id } = JSON.parse(userSession);
         customFetch("GET", "users/" + id +"/payments/")
         .then(paymentsBack => {
             setPayments(paymentsBack);
         });
    
      const from = payments.map((payments) => {return payments.to === id ? null : payments});
      const to = payments.map((payments) => {return payments.from === id ? null : payments});

      let resultFrom = 0;
      from.forEach(element => {
          resultFrom+=element.amount;
      });
      
      let resultTo = 0;
      to.forEach(element => {
          resultTo+=element.amount;
      });

   }, [payments, setPayments])
   

      const data = [
         {
            name: "Income", 
            value: {income},
         },
         {
            name: "Outcome", 
            value: {outcome},
         },
      ];
  return (
      <div className={styles.linechart}> 
         <h2>your balance </h2>
         <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
             
                <Bar dataKey="value" barSize={50} fill="#20E9BC" />
               
         </BarChart>
   </div>
  )
}

export default RenderLineChart;