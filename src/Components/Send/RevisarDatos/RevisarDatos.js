import styles from "./revisardatos.module.css";
import dotpattern from '../Images/DotPattern.svg'

const RevisarDatos = ({setChange, pago}) => {

    const onSubmit = () => {
        setChange(2)
        // fetch('http://localhost:3001/payment', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(pago)
        // });
    }
    const onReturn = () => {
        setChange(0)
        // fetch('http://localhost:3001/payment', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(pago)
        // });
    }

    return (

            <div className={styles.revisardatos}>
                <div className={styles.formdot}>
                    <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                    <div className={styles.rectangulo}>
                        <h1 className={styles.titulo}>Información del pago</h1>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Email</h2>
                            <p className={styles.inputs}>{pago.email}</p>
                        </div>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Amount</h2>
                            <p className={styles.inputs}>{pago.amount}€</p>
                        </div>
                        <input value="Editar" type="submit" className={styles.editar} onClick={() => {onReturn()}}/>
                        <input value="Confirmar" type="submit" className={styles.submit} onClick={() => {onSubmit()}}/>
                    </div>
                </div>
                
            </div>

    )
}

export default RevisarDatos
