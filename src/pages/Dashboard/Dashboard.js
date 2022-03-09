import styles from "./dashboard.module.css"
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import arrow from '../../assets/arrow.png'
import customFetch from '../../api';
import { getSessionUser, getUserToken, removeSession } from "../../api/auth";
import RenderLineChart from "../../Components/linechart/Linechart";

const Dashboard = () => {
    const { name, setName, wallet, setWallet, currency, setCurrency } = useContext(UserContext);
    const navigate = useNavigate();

    
  useEffect(() => {
    
    getSessionUser();
    getUserToken();

    customFetch( "GET", "users/me")
      .then((json) => {
        setName(json.name);

      })
      .catch(() => {
        
        removeSession();
        navigate("/login");
      });
    }, [navigate, setName]);

    useEffect(() => {
      const getWallet = () => {
        getSessionUser();
        getUserToken();
    
        customFetch( "GET", "users/me")
        .then((response) => {
            if (response.status !== 200) throw new Error("Couldn't retrieve user data");
            return response.json();
        })
        .then((json) => {
            setWallet(json.wallet);
            setCurrency(json.currency);
        });
      }

      getWallet();
  }, [setCurrency,setWallet]);

  

  return(
    <div className = {styles.dashboard}>
      <h3>Overview</h3>
      <p>Hi {name}, get your summary of your transactions and requests here</p>
      <div className={styles.wallet}>
        <div className={styles.display}>
          <img src ={arrow} alt = "arrow"/>
          <h4>23%</h4>
        </div>
        {currency==='$' ? <h1>{wallet}$</h1> : <h1>{wallet}€</h1>}
        <p>Recent transactions</p>
      </div>
      <div>
        <RenderLineChart />
      </div>
    </div>
   
)
};


export default Dashboard;
