import {Routes, Route} from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Dashboard from "../Dashboard/Dashboard";
import Wallet from "../Wallet/Wallet";
import Send from "../Send/Send";
import Request from "../Request/Request";
import AccountSetting from "../AccountSetting/AccountSetting";
import styles from "./main.module.css";
import UserSideBar from "../../Components/user_sideBar/UserSideBar";
import { UserContextProvider } from "../../context/userContext";

const Main = () => {

    return(
        <div className = {styles.main}>
            <UserContextProvider>
            <NavBar/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/wallet" element={<Wallet/>} />
                <Route path="/send" element={<Send/>} />
                <Route path="/request" element={<Request/>} />
                <Route path="/accountsetting" element={<AccountSetting/>} />
            </Routes>
            <UserSideBar />
            </UserContextProvider>
            
        </div>
    )

}

export default Main;