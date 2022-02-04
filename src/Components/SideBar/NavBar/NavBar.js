import styles from "./navbar.module.css"
import NavButton from "../../NavButton/NavButton"
import { ReactComponent as DayPayLogo } from './DayPay.svg';
import walletLogo from './walletLogo.svg';
import dashboardLogo from './dashboardLogo.svg';
import sendLogo from './sendLogo.svg';
import receiveLogo from './receiveLogo.svg';
import accountLogo from './accountlogo.svg';


const NavBar = () => {
    return(
        <div className = {styles.navbar}>
            <DayPayLogo className={styles.logo}/>
            
            <div className={styles.bar}>
                <img  src={dashboardLogo} alt="dashboardlogo"/>
                <NavButton path = "/main/dashboard" text="Dashboard" />
            </div>
            <br/><br/>
            <div className={styles.bar}>
                <img  src={walletLogo} alt="walletlogo"/>
                <NavButton className={styles.navbutton} path = "/main/wallet" text="Wallet"/>
            </div>
            <br/><br/>
            <div className={styles.bar} >
                <img  src={sendLogo} alt="sendLogo"/>
                <NavButton path = "/main/send" text="Send"/>
            </div>
            <br/><br/>
            <div className={styles.bar} >
                <img  src={receiveLogo} alt="receiveLogo" />
                <NavButton path = "/main/request" text="Request"/>
            </div>
            <br/><br/>
            <div className={styles.bar}>
                <img  src={accountLogo} alt="accountLogo" />
                <NavButton path = "/main/accountsetting" text="Account Setting"/>
            </div>
            
        </div>
    )
}

export default NavBar;