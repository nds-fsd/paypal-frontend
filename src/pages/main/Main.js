import {Routes, Route} from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Dashboard from "../Dashboard/Dashboard";
import Wallet from "../Wallet/Wallet";
import Send from "../Send/Send";
import Request from "../Request/Request";
import AccountSetting from "../AccountSetting/AccountSetting";
import styles from "./main.module.css";
import UserSideBar from "../../Components/userSidebar/UserSideBar";
import { UserContextProvider } from "../../context/userContext";
import PrivateRoute from "../../api/auth/privateRoute";

const Main = () => {

    return(
        <div className = {styles.main}>
            <UserContextProvider>
            <NavBar/>
            <Routes>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/wallet" element={<PrivateRoute><Wallet/></PrivateRoute>} />
                <Route path="/send" element={<PrivateRoute><Send/></PrivateRoute>} />
                <Route path="/request" element={<PrivateRoute><Request/></PrivateRoute>} />
                <Route path="/accountsetting" element={<PrivateRoute><AccountSetting/></PrivateRoute>} />
            </Routes>
            <UserSideBar />
            </UserContextProvider>
            
        </div>
    )

}

export default Main;