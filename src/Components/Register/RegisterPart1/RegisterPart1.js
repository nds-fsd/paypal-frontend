import styles from "./registerpart1.module.css"
import dotpattern from '../Images/DotPattern.svg'
import { useState} from 'react'

const RegisterPart1 = ({setChange}) => {
    
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
                            <input type="text" placeholder='First Name' className={styles.input} />
                            <input type="text" placeholder='Surname' className={styles.input}/>
                            <input type="email" placeholder='Email' className={styles.input}/>
                            <input type="password" placeholder='Password' className={styles.input}/>
                            <input type="submit" className={styles.submit} onClick={() => {onSubmit()}}/>
                        </form>
                    </div>     
                </div>

            </div>

    )
}

export default RegisterPart1;