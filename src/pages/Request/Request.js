import styles from "./request.module.css"
import { useState} from 'react'
import dotpattern from '../../assets/DotPattern3.png';
import customFetch from '../../api';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Request = () => {

    const { email, setEmail, amount, setAmount, err, setErr } = useContext(UserContext);

    const onSubmit = () => {
        const userSession = localStorage.getItem("user-session");
        const { id } = JSON.parse(userSession);

        customFetch("GET", "users/id/" + email)
        .then((_id) => {
            if(_id === null) setErr("Email not found")
            else {
                const data = {
                    from: id,
                    to: _id,
                    amount:amount,
                    currency: "$",
                }
                customFetch("POST", "request", {body: data})
                .then( () => {setErr("Request sent")})
            }
        })
        console.log("peticion realizada");
    }

    return(
        <div className = {styles.request}>
            <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
            <div className = {styles.paybox}>
                <form className= {styles.form}>
                    <p>Request money to another user</p>
                    <br/>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className={styles.input}/>
                    <br/>
                    <input type="number" placeholder='0' value={amount} onChange={(e)=>{setAmount(e.target.value)}} className={styles.input}/>
                    <br/>       
                    <button type="button" className={styles.submit} onClick={() => {onSubmit()}}>Request</button>
                </form>
                {err}
            </div>
        </div>
    )
}

export default Request;