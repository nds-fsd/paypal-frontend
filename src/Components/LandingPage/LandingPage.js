import styles from "./landingpage.module.css"
import NavButton from '../NavButton/NavButton'

const LandingPage = () => {
    return(
        <div className = {styles.landingpage}>
            LandingPage
            <NavButton path="/login" text="Login"/>
            <NavButton path="/register" text="Register"/>
            <NavButton path="/formulariopago" text="formulariopago"/>
        </div>
    )
}

export default LandingPage;