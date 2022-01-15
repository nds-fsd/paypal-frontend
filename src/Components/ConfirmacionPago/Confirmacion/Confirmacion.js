import React from 'react'
import NavButton from '../../NavButton/NavButton'
import styles from "./confirmacion.module.css"

const Confirmacion = () => {
    return (
        <div className={styles.confirmacionpago}>

                <h1>Confirmación de Pago</h1>
                <div className={styles.estilohome}><NavButton path = "/" text="Volver al Dashboard"/></div>

        </div>
    )
}

export default Confirmacion
