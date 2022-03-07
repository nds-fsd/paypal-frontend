import React from 'react'
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import styles from '../linechart/linechart.module.css';

const RenderLineChart = () => {

   const data = [
      {
         name: "Income", 
         uv: 400, 
         pv: 2400, 
         amt: 2400
      },
      {
         name: "Outcome", 
         uv: 200, 
         pv: 2400,
         amt: 2400
      },
   ];
   
  return (
      <div className={styles.linechart}> 
         <h2>your balance </h2>
         <BarChart width={300} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
             
                <Bar dataKey="uv" barSize={50} fill="#20E9BC" />
               
         </BarChart>
   </div>
  )
}

export default RenderLineChart;