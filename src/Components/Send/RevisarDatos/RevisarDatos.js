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

    return (

            <div className={styles.revisardatos}>
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                <div className={styles.rectangulo}>
                    <h1 className={styles.titulo}>Confirm your input</h1>
                    <h2 className={styles.title}>Email: {pago.email}</h2>
                    <br/>
                    <h2 className={styles.title}>Amount: {pago.amount}</h2>
                    <br/>
                    <input type="submit" className={styles.submit} onClick={() => {onSubmit()}}/>
                </div>
                
            </div>

    )
}

export default RevisarDatos
