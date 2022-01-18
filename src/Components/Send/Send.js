import FormularioPago from "./FormularioPago/FormularioPago.js";
import styles from "./send.module.css"

const Send = () => {
    return(
        <div className = {styles.send}>
            <FormularioPago></FormularioPago>
        </div>
    )
}

export default Send;