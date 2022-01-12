import styles from "./navbar.module.css"
import NavButton from "../NavButton/NavButton"

const NavBar = () => {
    return(
        <div className = {styles.navbar}>
            NavBar
            <NavButton path = "/main/dashboard" text="Dashboard"/>
            <NavButton path = "/main/wallet" text="Wallet"/>
            <NavButton path = "/main/send" text="Send"/>
            <NavButton path = "/main/request" text="Request"/>
            <NavButton path = "/main/accountsetting" text="Account Setting"/>
        </div>
    )
}

export default NavBar;