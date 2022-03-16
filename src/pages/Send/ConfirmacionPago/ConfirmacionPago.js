import React from 'react'
import styles from "./confirmacionpago.module.css"
import dotpattern from '../Images/DotPattern.svg'


const ConfirmacionPago = ({setChange}) => {
    return (
        <div className={styles.confirmacionpago}>

            <div className={styles.formdot}> 
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                {/* <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/> */}
                <div className = {styles.rectangulo}>
                    <h1 className={styles.titulo}>¡Payment done!</h1>
                    <input type='button' value='Ok' className={styles.submit} onClick={()=> setChange(0)}/>
                </div>
            </div> 

        </div>
    )
}

export default ConfirmacionPago
