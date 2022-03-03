import styles from "./dashboard.module.css"
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import arrow from '../../assets/arrow.png'


const Dashboard = () => {
    const { name, setName, wallet, setWallet, currency, setCurrency } = useContext(UserContext);
    const navigate = useNavigate();
    
  useEffect(() => {
    const userSession = localStorage.getItem("user-session");
    const { token } = JSON.parse(userSession);
    fetch("http://localhost:3090/users/me" , {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Couldn't retrieve user data");
        }
        return response.json();
      })
      .then((json) => {
        setName(json.name);
        
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }, [navigate, setName]);

    useEffect(() => {
      getWallet();
  }, []);

  const getWallet = () => {
    const userSession = localStorage.getItem("user-session");
    const { token } = JSON.parse(userSession);
    fetch("http://localhost:3090/users/me" , {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
        if (response.status !== 200) throw new Error("Couldn't retrieve user data");
        return response.json();
    })
    .then((json) => {
        setWallet(json.wallet);
        setCurrency(json.currency);
    });
}
  return(
    <div className = {styles.dashboard}>
      <h3>Overview</h3>
      <p>Hi {name}, get your summary of your transactions and requests here</p>
      <div className={styles.wallet}>
        <div className={styles.display}>
          <img src ={arrow} alt = "arrow"/>
          <h4>23%</h4>
        </div>
        {currency=='$' ? <h1>{wallet}$</h1> : <h1>{wallet}€</h1>}
        <p>Recent transactions</p>
      </div>
    </div>
   
)
};


export default Dashboard;
