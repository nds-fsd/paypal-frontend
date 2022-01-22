import styles from "./register.module.css"
import NavButton from '../NavButton/NavButton'

const Register = () => {
    return(
        <div className = {styles.register}>
            Register
            <NavButton path="/" text="Go Back"/>
        </div>
    )
}

export default Register;