import {Routes, Route} from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Dashboard from './Components/Dashboard/Dashboard'
import Wallet from "./Components/Wallet/Wallet"
import Send from "./Components/Send/Send"
import Request from "./Components/Request/Request"
import AccountSetting from "./Components/AccountSetting/AccountSetting"
import styles from "./main.module.css"

const Main = () => {
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

export default Main;