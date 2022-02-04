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
            
            <div style={{paddingLeft: '20%'}}>
                <img  src={dashboardLogo} alt="dashboardlogo" style={{paddingRight: '20%'}}/>
                <NavButton path = "/main/dashboard" text="Dashboard" />
            </div>
            <br/><br/>
            <div style={{paddingLeft: '20%'}}>
                <img  src={walletLogo} alt="walletlogo" style={{paddingRight: '20%'}}/>
                <NavButton path = "/main/wallet" text="Wallet"/>
            </div>
            <br/><br/>
            <div style={{paddingLeft: '20%'}} >
                <img  src={sendLogo} alt="sendLogo" style={{paddingRight: '20%'}}/>
                <NavButton path = "/main/send" text="Send"/>
            </div>
            <br/><br/>
            <div style={{paddingLeft: '20%'}} >
                <img  src={receiveLogo} alt="receiveLogo" style={{paddingRight: '20%'}}/>
                <NavButton path = "/main/request" text="Request"/>
            </div>
            <br/><br/>
            <div style={{paddingLeft: '20%'}}>
                <img  src={accountLogo} alt="accountLogo" style={{paddingRight: '20%'}}/>
                <NavButton path = "/main/accountsetting" text="Account Setting"/>
            </div>
            
        </div>
    )
}

export default NavBar;