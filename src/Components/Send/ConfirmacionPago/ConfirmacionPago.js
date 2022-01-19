import React from 'react'
import styles from "./confirmacionpago.module.css"
import dotpattern from '../Images/DotPattern.svg'


const ConfirmacionPago = ({setChange}) => {
    return (
        <div className={styles.confirmacionpago}>
            <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
            {/* <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/> */}
            <div className = {styles.rectangulo}>
                <h1 className={styles.titulo}>Confirmación de Pago</h1>
                <input type='button' value='Done' className={styles.submit} onClick={()=> setChange(0)}/>
            </div>
            
        </div>
    )
}

export default ConfirmacionPago
