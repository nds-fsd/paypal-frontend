import styles from "./registerpart2.module.css"
import dotpattern from '../Images/DotPattern.svg'
import { useState} from 'react'

const RegisterPart2 = ({setChange}) => {
    
    const onSubmit = () => {
        setChange(1)
    }

    return(
        
        <div className={styles.register}>
                <div className={styles.formdot}> 
                    <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                    
                    
                    <div className={styles.rectangulo}>              
                        <form className={styles.formulario}>
                            <h1 className={styles.titulo}>Register</h1>
                            <input type="text" placeholder='Address' className={styles.input} />
                            <input type="date" placeholder='BirthDay' className={styles.input}/>
                            <input type="tel" placeholder='Phone Number' className={styles.input}/>
                            <input type="submit" className={styles.submit} onClick={() => {onSubmit()}}/>
                        </form>
                    </div>     
                </div>

            </div>

    )
}

export default RegisterPart2;