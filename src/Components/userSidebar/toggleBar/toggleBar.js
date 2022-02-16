import React from 'react';
import Pending from '../../pending/Pending';
import { useEffect, useState } from 'react';
import '../toggleBar/toggleBar.css'
import customFetch from '../../../api';
import { UserContext } from "../../../context/userContext";
import { useContext } from "react";


const ToggleBar = ({isToggle, closeUsersidebar }) => {
   const handleOnclick = (e) => e.stopPropagation();

   const [send, setSend] = useState();
   const [cancel, setCancel] = useState(0);
   const [requests, setRequests] = useState([]);
   const { pago } = useContext(UserContext);


   const onSend = () => {
      const userSession = localStorage.getItem("user-session");
        const { id } = JSON.parse(userSession);
        const data = {
            from: id,
            to:pago.id,
            amount: Number(pago.amount),
            currency:"$"
        }
        customFetch("POST", "payments", {body:data})
       setSend();
   }
 
   const onCancel = () => {
      setCancel('');
   }

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
            <Pending request={request} id ={request._id} key={request._id} onClick={() => {
               onSend()
               onCancel() }} />)}  
                 
               {(!requests || requests.length === 0) && ('no transactions found')}
      </div>
   </div>
   )
};

export default ToggleBar;
