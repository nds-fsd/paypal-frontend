import styles from "./formulariopago.module.css"
import { useState, useEffect } from 'react'
import dotpattern from '../Images/DotPattern.svg';
import customFetch from '../../../api'

const FormularioPago = ({setPago, setChange, pago}) => {


    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState(0);
    const [sendCurrency, setSendCurrency] = useState("$");
    const [err, setErr] = useState("");
    const [contacts, setContacts] = useState(null);


    const onSubmit = () => {
        
        customFetch("GET", "users/id/" + email)
        .then((_id) => {
            if(_id === null) setErr("Email not found")
            else {
                const data={
                    email:email,
                    amount:amount,
                    currency:sendCurrency,
                    id:_id
                }
                setPago(data);
                setChange(1);
            }
        })
    }

    useEffect(() => {
        customFetch("GET", "users/contacts")
        .then(response => {
            const cont = response.map((contact) => {
                return {key:contact._id,name: contact.contact_name, email:contact.contact_email}
            })
            setContacts(cont.map(contact => {return( <option key={contact.key}value={contact.email} >{contact.name}</option>)}));
        })
    },[])

    useEffect(() => {

    }, [])

    return(
        <div className = {styles.send}>
            <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
            <div className = {styles.paybox}>
                <form className= {styles.form}>
                    <p>Send money to another user</p>
                    <br/>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className={styles.input}/>
                    <select name="Send to" required={false} onChange={(e)=>{setEmail(e.target.value)}}>
                        <option value={""}>Contact Name</option>
                        {contacts}
                    </select>
                    <br/>
                    <input type="number" placeholder='0' value={amount} onChange={(e)=>{setAmount(e.target.value)}} className={styles.input}/>
                    <br/>
                    {/* <input type="currency" placeholder='currency' value={sendCurrency} onChange={(e)=>{setSendCurrency(e.target.value)}} className={styles.input}/>
                    <br/> */}
                    <select type='currency' value={sendCurrency} onChange={(e)=>{setSendCurrency(e.target.value)}} >
                    <option value="$">USD ($)</option>
                    <option value="€">EUR (€)</option>
                    </select>
                    <br/>
                    <button type="button" className={styles.submit} onClick={() => {onSubmit()}}>Send</button>
                </form>
                {err}
            </div>
        </div>
    )
}

export default FormularioPago;