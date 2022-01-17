import styles from "./confirmacionpago.module.css"


import React from 'react'
import Confirmacion from "./Confirmacion/Confirmacion"
import NavBar from "../../NavBar/NavBar"


const ConfirmacionPago = () => {
    return (
        <>
        <div className={styles.mainpago}>
            <NavBar/>
            <Confirmacion/>
        </div>
        </>
    )
}

export default ConfirmacionPago
