import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styles from '../linechart/linechart.module.css';
import { UserContext } from "../../context/userContext";
import { useContext, useEffect, useState } from "react";
import { getStorageObject } from '../../api/storage';
import customFetch from '../../api';


const RenderLineChart = () => {

   const { payments, setPayments } = useContext(UserContext);
   const [income, setIncome] = useState(0);
   const [outcome, setOutcome] = useState(0);
   const [date, setDate] = useState;

   useEffect(() => {
         const id = getStorageObject("id");
   
         customFetch("GET", "users/" + id +"/payments")
         .then(paymentsBack => {
             setPayments(paymentsBack);
         });
    
      const from = payments.map((payments) => {return payments.to === id ? null : payments});
      const to = payments.map((payments) => {return payments.from === id ? null : payments});
      const paymentDate = payments.map((payments) => {return payments.paymentDate === id ? null : payments});

      let resultFrom = 0;
      from.forEach(element => {
          resultFrom+=element.amount;
      });
         setOutcome(resultFrom);
         setDate(paymentDate);

      let resultTo = 0;
      to.forEach(element => {
          resultTo+=element.amount;
      });
         setIncome(resultTo);
         setDate(paymentDate);

   }, [payments, setPayments, setDate])
   

      const data = [
         {
            month:{date},
            Income: {income},
            Outcome: {outcome},
         },
      ];
  return (
      <div className={styles.linechart}> 
         <h2>your balance </h2>
         <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Bar dataKey="Income" fill="#8884d8" />
            <Bar dataKey="Outcome" fill="#FF374F" />
            <Tooltip />
            <Legend />
  
         </BarChart>
   </div>
  )
}

export default RenderLineChart;