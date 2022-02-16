import styles from "./wallet.module.css"
import dotpattern from "../../assets/DotPattern3.png"
import dotpattern2 from "../../assets/DotPattern3.png"
import arrow from "../../assets/arrow.png"
import {useEffect, useState} from "react";
import customFetch from '../../api';
import Payment from "./Payment/Payment"
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Wallet = () => {
    
    const { wallet, setWallet, payments, setPayments } = useContext(UserContext);
    
    const [id, setId] = useState(null);
    const [showPays, setShowPays] = useState(false);
    const [choose, setChoose] = useState(0);
    const clicked = {
        color: "#258AFF"
    }
    useEffect(() => {
        getPayments();
        getWallet();
    }, []);

    const getPayments = () => {
        const userSession = localStorage.getItem("user-session");
        const { id } = JSON.parse(userSession);
        setId(id);
        customFetch("GET", "users/" + id +"/payments/")
        .then(paymentsBack => {
            setPayments(paymentsBack);
            setShowPays(true);
        });
    }

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
        });
    }

    return(
        <div className = {styles.wallet}>
            <img className={styles.dot1}src = {dotpattern} alt="dotpattern"></img>
            <img className={styles.dot2}src = {dotpattern2} alt="dotpattern"></img>
            <div className={styles.container}>
                <div className={styles.bar}></div>
                <div className={styles.addFunds}>
                    <div className={styles.submit}>
                        <p className={styles.fundText}>Add Funds</p>
                    </div>
                </div>
                <img className = {styles.arrow}src = {arrow} alt = "arrow"/>
                <div className={styles.percent}>23%</div>
                <div className = {styles.money}>{wallet}$</div>
                <div className = {styles.subTitle}>Recent transactions</div>
                <div className = {styles.options}>
                    <button className={styles.button} style ={choose === 0 ? clicked : null} onClick={() => setChoose(0)}>All</button>
                    <button className={styles.button} style ={choose === 2 ? clicked : null} onClick={() => setChoose(2)}>Income</button>
                    <button className={styles.button} style ={choose === 1 ? clicked : null} onClick={() => setChoose(1)}>Outcome</button>
                </div>
                <div className = {styles.transactions}>
                    {showPays && payments.map((payment) => {
                        
                        if(choose === 0 || (choose === 1 && payment.from === id) || (choose === 2 && payment.to === id) ) return (
                            <div key={payment._id}>
                                <Payment  payment={payment} id ={id} />
                            </div>
                        );
                        return null;
                    })}
                </div>
                <div className={styles.show}>Show more transactions</div>
            </div>
            
        </div>
    )
}

export default Wallet;