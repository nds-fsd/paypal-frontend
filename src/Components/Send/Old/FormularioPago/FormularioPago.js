import { useState} from 'react'
import styles from "./formulariopago.module.css";
import dotpattern from '../../Images/DotPattern.svg';


const FormularioPago = ({setPago, setChange}) => {
    

    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);


    const onSubmit = () => {
        const data={
            email:email,
            amount:amount
        }
        console.log(email);
        setPago(data);
        setChange(1)
        // fetch('http://localhost:3001/usuario', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // });
    }

    
    return (
        
            <div className={styles.formulariopago}>
                
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                {/* <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/> */}
                
                <div className={styles.rectangulo}>
                    <h1 className={styles.titulo}>Formulario de Pago</h1>
             
                    <form className={styles.formulario} onSubmit={()=>{onSubmit()}}>
                        <label className={styles.shadow}>
                        <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className={styles.input}/>

                        </label>
                        <br/>
                        <label>
                        <input type="number" placeholder='Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}} className={styles.input}/>

                        </label>
                        <br/>
                        <input type="submit" className={styles.submit} onClick={() => {onSubmit()}}/>
                    </form>
                </div>
                
            </div>

    )
}

export default FormularioPago
