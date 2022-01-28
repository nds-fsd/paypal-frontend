import {Routes, Route} from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import Dashboard from '../../pagesw/Dashboard/Dashboard'
import Wallet from "../../pages/Wallet/Wallet"
import Send from "../../pages/Send/Send"
import Request from "../../pages/Request/Request"
import AccountSetting from "../../pages/AccountSetting/AccountSetting"
import styles from "./SideBar.module.css"

const SideBar = () => {
    return(
        <div className = {styles.main}>
            <NavBar/>

            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/wallet" element={<Wallet/>} />
                <Route path="/send" element={<Send/>} />
                <Route path="/request" element={<Request/>} />
                <Route path="/accountsetting" element={<AccountSetting/>} />
            </Routes>
        </div>
    )

}

export default SideBar;