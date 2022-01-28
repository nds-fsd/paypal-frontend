import styles from "./login.module.css"
import NavButton from '../NavButton/NavButton'

const Login = () => {
    return(
        <div className={styles.login}>
            Login
            <NavButton path="/" text="Go Back"/>
        </div>
    )
}

export default Login;