import {Routes, Route} from "react-router-dom"
import NavBar from "./Components/NavBar/NavBar"
import Dashboard from './Components/Dashboard/Dashboard'
import Wallet from "./Components/Wallet/Wallet"
import Send from "./Components/Send/Send"
import Request from "./Components/Request/Request"
import AccountSetting from "./Components/AccountSetting/AccountSetting"
import styles from "./main.module.css"
import FormularioPago from "./Components/Old/FormularioPago/FormularioPago"
import ConfirmacionPago from "./Components/Send/ConfirmacionPago/ConfirmacionPago"
import RevisarDatos from "./Components/Send/RevisarDatos/RevisarDatos"

const Main = () => {
    return(
        <div className = {styles.main}>
            <NavBar/>

            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/wallet" element={<Wallet/>} />
                <Route path="/send/*" element={<Send/>} />
                <Route path="/confirmacionpago" element={<ConfirmacionPago/>} />
                <Route path="/revisardatos" element={<RevisarDatos/>} />
                <Route path="/request" element={<Request/>} />
                <Route path="/accountsetting" element={<AccountSetting/>} />
            </Routes>
        </div>
    )

}

export default Main;