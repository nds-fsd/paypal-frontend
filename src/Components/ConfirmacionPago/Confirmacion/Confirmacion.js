import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./confirmacion.module.css"

const Confirmacion = () => {
    return (
        <div className={styles.confirmacionpago}>

                <h1>Confirmación de Pago</h1>
                <Link to={"/"} className={styles.volverhome} >Volver al Dashboard</Link>

        </div>
    )
}

export default Confirmacion
