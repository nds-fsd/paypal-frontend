import styles from "./request.module.css"
import { useState} from 'react'
import dotpattern from '../../assets/DotPattern3.png';

const Request = () => {

    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState(0);
    const [err, setErr] = useState("");


    const onSubmit = () => {
        
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