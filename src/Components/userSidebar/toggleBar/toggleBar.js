import React from 'react';
import Pending from '../../pending/Pending';
import { useEffect, useState } from 'react';
import '../toggleBar/toggleBar.css'
import customFetch from '../../../api';



const ToggleBar = ({isToggle, closeUsersidebar }) => {
   const handleOnclick = (e) => e.stopPropagation();

   const [requests, setRequests] = useState([]);

   const getRequest = () => {
      customFetch("GET", "users/requests")
      .then(requested => {
         setRequests(requested);
      });
   }
   
   useEffect(() => {
      getRequest();
   }, []);
   
  return (
   <div onClick={ closeUsersidebar } className={`toggle ${isToggle && "is-open"}`}>
      <div className="toggleContainer" onClick={handleOnclick}>
         {requests && requests.map((request) => 
          <Pending request={request} key={request._id} /> 
         )}  
         {!requests && 'no transactions found'}
      </div>
   </div>
   )
};

export default ToggleBar;
