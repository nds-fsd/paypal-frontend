import { Route, Routes } from "react-router-dom";
import styles from "./send.module.css"
import { useState } from "react";
import FormularioPago from "./FormularioPago/FormularioPago";
import ConfirmacionPago from "./ConfirmacionPago/ConfirmacionPago";
import RevisarDatos from "./RevisarDatos/RevisarDatos";
import NavButton from "../NavButton/NavButton";

const Send = () => {
    const [pago, setPago] = useState()
    return(
        <div className = {styles.send}>
            <FormularioPago pago={pago} setPago={setPago}/>
        </div>
    )

}

export default Send;