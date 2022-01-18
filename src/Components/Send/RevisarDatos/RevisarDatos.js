import React, {useContext} from 'react'
import styles from "./revisardatos.module.css";
import { useNavigate } from "react-router-dom";

import { ContextApp } from '../FormularioPago/FormularioPago';
import NavBar from '../../NavBar/NavBar';
import NavButton from '../../NavButton/NavButton';
import dotpattern from '../Images/DotPattern.svg'
import reactangulo from '../Images/Rectangle.png';

const RevisarDatos = ({setChange, pago}) => {
    const navigate = useNavigate();
    //const { register, handleSubmit  } = useFormContext(){handleSubmit("name")}
    //console.log(register)
    const { formValues, setFormValues} = useContext(ContextApp);

    console.log(formValues)
    
    return (
        // <>
        // <div className={styles.mainpago}>
        //     <NavBar/>
            <div className={styles.confirmacionpago}>
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/>
                <h1 className={styles.titulo}>Confirm your input</h1>
                <h2 className={styles.texto}>Email: {pago.email}</h2>
                <br/>
                <h2 className={styles.texto1}>Amount: {pago.amount}</h2>
                <br/>
                

                {/* <div className={styles.estilohome}><NavButton path = "/main/dashboard" text="Volver al Dashboard"/></div> */}
                <input type="submit" className={styles.submit} onClick={()=> setChange(2)}/>
            </div>
            
        // </div>
        // </>
    )
}

export default RevisarDatos
