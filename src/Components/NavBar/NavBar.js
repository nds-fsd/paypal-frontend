import styles from "./navbar.module.css"
import NavButton from "../NavButton/NavButton"
import { removeSession } from "../../api/auth";
import { ReactComponent as DayPayLogo } from '../../assets/DayPay.svg';
import walletLogo from '../../assets/walletLogo.svg';
import dashboardLogo from '../../assets/dashboardLogo.svg';
import sendLogo from '../../assets/sendLogo.svg';
import receiveLogo from '../../assets/receiveLogo.svg';
import accountLogo from '../../assets/accountlogo.svg';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();
    const onLogOut = () => {
        removeSession()
        navigate("/login");
      };
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
            <button onClick={() => onLogOut()}>Log Out</button>
        </div>
    )
}

export default NavBar;


