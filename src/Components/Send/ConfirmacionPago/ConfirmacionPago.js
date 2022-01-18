import React from 'react'
import NavButton from '../../NavButton/NavButton'
import styles from "./confirmacionpago.module.css"
import dotpattern from '../Images/DotPattern.svg'
import reactangulo from '../Images/Rectangle.png';


const ConfirmacionPago = ({setChange}) => {
    return (
        <div className={styles.confirmacionpago}>
            
            <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
            <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/>
            <h1 className={styles.titulo}>Confirmación de Pago</h1>
            {/* <div className={styles.estilohome}><NavButton path = "/main/dashboard"  text="Volver al Dashboard"/></div> */}
            <input type='button' value='Done' className={styles.submit} onClick={()=> setChange(0)}/>
        </div>
    )
}

export default ConfirmacionPago
