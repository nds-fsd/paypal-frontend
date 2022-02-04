import styles from "./send.module.css"
import { useState } from "react";
import FormularioPago from "./Old/FormularioPago/FormularioPago";
import ConfirmacionPago from "./ConfirmacionPago/ConfirmacionPago";
import RevisarDatos from "./RevisarDatos/RevisarDatos";

const Send = () => {
    const [pago, setPago] = useState()
    const [change, setChange] = useState(0)

    return(
        <div className = {styles.send}>
            {change===0 && <FormularioPago setPago={setPago} setChange={setChange}/>}
            {change===1 && <RevisarDatos pago={pago} setChange={setChange}/>}
            {change===2 && <ConfirmacionPago setChange={setChange}/>}
        </div>
    )

}

export default Send;