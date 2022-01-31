import styles from "./register.module.css"
import NavButton from '../NavButton/NavButton'
import { useState} from 'react'
import RegisterPart1 from "./RegisterPart1/RegisterPart1"
import RegisterPart2 from "./RegisterPart2/RegisterPart2"

const Register = ({setCahnge}) => {
    
    const [change, setChange] = useState(0)
    const onSubmit = () => {
        setChange(1)
    }


    return(
        <div className = {styles.send}>
            {change===0 && <RegisterPart1 setChange={setChange}/>}
            {/* {change===1 && <RegisterPart2 setChange={setChange}/>} */}
            {/* {change===2 && <RegisterConfirmation setChange={setChange}/>} */}
        </div>
    )
}

export default Register;