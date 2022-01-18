import styles from "./revisardatos.module.css";
import dotpattern from '../Images/DotPattern.svg'
import reactangulo from '../Images/Rectangle.png';

const RevisarDatos = ({setChange, pago}) => {

    return (

            <div className={styles.confirmacionpago}>
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/>
                <h1 className={styles.titulo}>Confirm your input</h1>
                <h2 className={styles.texto}>Email: {pago.email}</h2>
                <br/>
                <h2 className={styles.texto1}>Amount: {pago.amount}</h2>
                <br/>
               <input type="submit" className={styles.submit} onClick={()=> setChange(2)}/>
            </div>

    )
}

export default RevisarDatos
