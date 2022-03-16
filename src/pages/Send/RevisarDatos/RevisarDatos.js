import styles from "./revisardatos.module.css";
import dotpattern from '../Images/DotPattern.svg'
import customFetch from '../../../api'

const RevisarDatos = ({setChange, pago}) => {

    const onSubmit = () => {
        const userSession = localStorage.getItem("user-session");
        const { id } = JSON.parse(userSession);
        const data = {
            from: id,
            to:pago.id,
            amount: Number(pago.amount),
            currency: pago.currency
        }
        customFetch("POST", "payments", {body:data})
        setChange(2);
    }

    console.log(pago)
    
    const onReturn = () => {
        setChange(0)
    }

    return (

            <div className={styles.revisardatos}>
                <div className={styles.formdot}>
                    <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                    <div className={styles.rectangulo}>
                        <h1 className={styles.titulo}>Payment Information</h1>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Email</h2>
                            <p className={styles.inputs}>{pago.email}</p>
                        </div>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Amount</h2>
                            
                            {pago.currency==='$' ? <p className={styles.inputs}>{pago.amount}$</p> : <p className={styles.inputs}>{pago.amount}€</p>}
                        </div>
                        <input value="Edit" type="submit" className={styles.editar} onClick={() => {onReturn()}}/>
                        <input value="Confirm" type="submit" className={styles.submit} onClick={() => {onSubmit()}}/>
                    </div>

                </div>
                
            </div>

    )
}

export default RevisarDatos
