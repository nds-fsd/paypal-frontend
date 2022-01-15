import styles from "./confirmacionpago.module.css"


import React from 'react'
import { Link } from "react-router-dom"
import Sidebar from "./Sidebar/Sidebar"
import Confirmacion from "./Confirmacion/Confirmacion"

const ConfirmacionPago = () => {
    return (
        <>
        <div className={styles.mainpago}>
            <Sidebar/>
            <Confirmacion/>
        </div>
        </>
    )
}

export default ConfirmacionPago
