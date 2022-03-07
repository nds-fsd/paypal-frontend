import styles from "./request.module.css"
import { useState} from 'react'
import dotpattern from '../../assets/DotPattern3.png';
import customFetch from '../../api';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { getSessionUser } from "../../api/auth";


const Request = () => {

    const { email, setEmail, amount, setAmount, err, setErr,currency, setCurrency } = useContext(UserContext);


    const onSubmit = () => {
        const userSession = getSessionUser;
        const { id } = JSON.parse(userSession);

        customFetch("GET", "users/id/" + email)
        .then((_id) => {
            if(_id === null) setErr(<div className={styles.requestSent}>"Email not found"</div>)
            else {
                const data = {
                    from: id,
                    to: _id,
                    amount:amount,
                    currency: currency,
                }
                customFetch("POST", "request", {body: data})
                .then( () => {setErr(<div className={styles.requestSent}>"Request sent"</div>)})
            }
        })
        console.log("peticion realizada");
        setAmount(0);
        setEmail("");
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
                    <select type='currency' value={currency} onChange={(e)=>{setCurrency(e.target.value)}} >
                    <option value="$">USD ($)</option>
                    <option value="€">EUR (€)</option>
                    </select>
                    <br/>       
                    <button type="button" className={styles.submit} onClick={() => {onSubmit()}}>Request</button>
                </form>
                {err}
            </div>
        </div>
    )
}

export default Request;