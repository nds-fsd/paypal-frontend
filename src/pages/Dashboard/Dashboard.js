import styles from "./dashboard.module.css"
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import arrow from '../../assets/arrow.png'
import customFetch from '../../api';
import { removeSession } from "../../api/auth";
import RenderLineChart from "../../Components/linechart/Linechart";

const Dashboard = () => {
    const { name, setName, wallet, setWallet, currency, setCurrency } = useContext(UserContext);
    const navigate = useNavigate();

    const [percent, setPercent] = useState(0);

    
  useEffect(() => {

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
    
        customFetch( "GET", "users/me")
        .then((json) => {
            setWallet(Math.round(json.wallet * 100) / 100);
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
          <h4 style={percent < 0 ?  {color: "rgb(255, 55, 79)"} : null}>{ Math.round(((((wallet + percent) - wallet)/wallet)*100) * 100) / 100 }%</h4>
        </div>
        {currency==='$' ? <h1>{wallet}$</h1> : <h1>{wallet}€</h1>}
        <p>Your Balance</p>
      </div>
      <div>
        <RenderLineChart setPercent = {setPercent}/>
      </div>
    </div>
   
)
};


export default Dashboard;
