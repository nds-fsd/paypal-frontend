import React, {useContext} from 'react'
import styles from "./revisardatos.module.css";
import { useNavigate } from "react-router-dom";

import { ContextApp } from '../FormularioPago/FormularioPago';
import NavBar from '../../NavBar/NavBar';
import NavButton from '../../NavButton/NavButton';

const RevisarDatos = () => {
    const navigate = useNavigate();
    //const { register, handleSubmit  } = useFormContext(){handleSubmit("name")}
    //console.log(register)
    const { formValues, setFormValues} = useContext(ContextApp);

    console.log(formValues)
    
    return (
        <>
        <div className={styles.mainpago}>
            <NavBar/>
            <div className={styles.confirmacionpago}>

                <h1>Confirm your input</h1>
                <h2>Name: </h2>
                <br/>
                <h2>Amount: </h2>
                <br/>
                <h2>Payment Method: </h2>
                <br/>

                <div className={styles.estilohome}><NavButton path = "/" text="Volver al Dashboard"/></div>
                <input type="submit" className={styles.submit} onClick={()=> navigate("/confirmacionpago")}/>
            </div>
            
        </div>
        </>
    )
}

export default RevisarDatos
