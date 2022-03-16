import styles from "./formulariopago.module.css"
import { useState, useEffect} from 'react'
import dotpattern from '../Images/DotPattern.svg';
import customFetch from '../../../api'
//import { getStorageObject } from "../../../api/storage";

const FormularioPago = ({setPago, setChange, pago}) => {


    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState(0);
    const [sendCurrency, setSendCurrency] = useState("$");
    const [err, setErr] = useState("");
    //const [contacts, setContacts] = useState(null);


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

    // useEffect(() => {
    //     const userSesion = getStorageObject("id");
    //     const id = userSesion;
    //     customFetch("GET", "users/" + id +"/contacts")
    //     .then(response => {
    //         let names = response.map(contact => {
    //             let name;
    //             customFetch("GET", "users/name" + id)
    //             .then(response => {name = response})
    //             return name;
    //         });

    //         let emails = response.map(contact => {
    //             let email;
    //             customFetch("GET", "users/email" + id)
    //             .then(response => {email = response})
    //             return email;
    //         });

    //         const cont = names.map((name, index) => {
    //             return {name: name, email:emails[index]}
    //         })
    //         setContacts(cont.map(contact => {return( <option value={contact.email}>{contact.name}</option>)}));
    //     })

    // },[contacts])

    return(
        <div className = {styles.send}>
            <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
            <div className = {styles.paybox}>
                <form className= {styles.form}>
                    <p>Send money to another user</p>
                    <br/>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className={styles.input}/>
                    {/* <select name="Send to" required={false}>
                        <option value={""}>Contact Name</option>
                        {console.log(contacts)}
                        {contacts}
                    </select> */}
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