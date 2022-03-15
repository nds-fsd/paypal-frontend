import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import styles from '../linechart/linechart.module.css';
import { UserContext } from "../../context/userContext";
import { useContext, useEffect, useState } from "react";
import customFetch from '../../api';
import { getUserId } from '../../api/auth';


const RenderLineChart = () => {

   const { payments, setPayments } = useContext(UserContext);
   const [data, setData] = useState([]);
   useEffect(() => {
   
         customFetch("GET", "users/payments")
         .then(paymentsBack => {
             setPayments(paymentsBack);
         });
    
      

   }, [setPayments]);

   const monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

   useEffect(() => {

      if(payments.length > 0 ){
         const id = getUserId();

         const months = payments.reduce((acc, payment) => {

               const date = new Date(payment.date);
               const monthName = monthsNames[date.getMonth()];

               let month = acc[monthName];

               if(!month){
                  month = {
                     income: 0,
                     outcome: 0
                  }
               }

               if(payment.to === id){
                  month.income += payment.amount;
               }

               if(payment.from === id){
                  month.outcome += payment.amount;
               }

               acc[monthName] = month;
               return acc;

         }, {} );

         console.log(months)
         //const to = payments.filter((payments) => payments.to === id).reduce((acc, payment) => acc+payment.amount, 0 );
   
         //const from = payments.filter(payment => payment.from === id).reduce((acc, payment) => acc+payment.amount, 0 );
         //const to = payments.filter((payments) => payments.to === id).reduce((acc, payment) => acc+payment.amount, 0 );
   
         const monthsData = Object.entries(months).map(([key, value]) => {
            return {month: key, income: value.income, outcome: value.outcome}
         });

         setData(monthsData);
        
      }
      
     
   }, [payments])
   

  return (
      <div className={styles.linechart}> 
         <h2>your balance </h2>
         <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="month"/>
            <YAxis />
            <Bar dataKey="income" fill="#8884d8" />
            <Bar dataKey="outcome" fill="#FF374F" />
            <Tooltip />
            <Legend />
  
         </BarChart>
   </div>
  )
}

export default RenderLineChart;