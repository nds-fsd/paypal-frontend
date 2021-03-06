import { useState} from 'react'
import styles from "./formulariopago.module.css";
import dotpattern from '../../Images/DotPattern.svg';
import customFetch from '../../../../api'


const FormularioPago = ({setPago, setChange, pago}) => {
    

    const [email, setEmail] = useState(pago.email);
    const [amount, setAmount] = useState(pago.amount);
    const [err, setErr] = useState("");


    const onSubmit = () => {
        
        customFetch("GET", "users/id/" + email)
        .then((_id) => {
            if(_id === null) setErr("Email not found")
            else {
                const data={
                    email:email,
                    amount:amount,
                    id:_id
                }
                setPago(data);
                setChange(1);
            }
        })
    }

    
    return (
        
        <div className={styles.formulariopago}>
            <div className={styles.formdot}> 
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                <div className={styles.rectangulo}>              
                    <form className={styles.formulario} onSubmit={()=>{onSubmit()}}>
                        <h1 className={styles.titulo}>Formulario de Pago</h1>
                        <br/>
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className={styles.input}/>
                        <br/>
                        <input type="number" placeholder='0' value={amount} onChange={(e)=>{setAmount(e.target.value)}} className={styles.input}/>
                        <br/>
                        <button type="button" className={styles.submit} onClick={() => {onSubmit()}}>Send</button>
                    </form>
                    {err}
                </div>     
            </div>
        </div>
    )
}

export default FormularioPago
