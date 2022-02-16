import React from 'react';
import Pending from '../../pending/Pending';
import { useEffect, useState } from 'react';
import '../toggleBar/toggleBar.css'
import customFetch from '../../../api';


const ToggleBar = ({isToggle, closeUsersidebar }) => {
   const handleOnclick = (e) => e.stopPropagation();

   const [requests, setRequests] = useState([]);
   

    const getRequest = () => {
       const userSession = localStorage.getItem("user-session");
       const { id } = JSON.parse(userSession);
       customFetch("GET", "request/request/" + id)
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

         {requests && requests.length > 0 && requests.map((request) => 
            <Pending request={request} id ={request._id} key={request._id} />
               )}
               {(!requests || requests.length === 0) && ('no transactions found')}
      </div>
   </div>
   )
};

export default ToggleBar;
