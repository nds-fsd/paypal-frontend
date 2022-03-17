import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
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

   

   useEffect(() => {

      const monthsNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

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
         <h3>Montly operations </h3>
         <BarChart width={400} height={300} data={data} barSize={30}>
            <XAxis dataKey="month"scale="point" padding={{ left: 10, right: 10 }}/>
            <YAxis />
            <Bar dataKey="income" fill="#20E9BC" background={{ fill: '#eee' }} label={{ position: 'top' }}/>
            <Bar dataKey="outcome" fill="#FF374F" label={{ position: 'top' }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
  
         </BarChart>
   </div>
  )
}

export default RenderLineChart;