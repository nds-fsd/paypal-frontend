import styles from "./wallet.module.css"
import dotpattern from "../../assets/DotPattern3.png"
import dotpattern2 from "../../assets/DotPattern3.png"
import arrow from "../../assets/arrow.png"
import {useEffect, useState} from "react";
import customFetch from '../../api';
import Payment from "./Payment/Payment"
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { getSessionUser, getUserToken } from "../../api/auth";

const Wallet = () => {
    
    const { wallet, setWallet, payments, setPayments, choose, setChoose, showPays, setShowPays , currency, setCurrency} = useContext(UserContext);

    const [id, setId] = useState(null);
    
   
    const clicked = {
        color: "#258AFF"
    }
    
    useEffect(() => {

        const getWallet = () => {
            getSessionUser();
            getUserToken();
    
            customFetch( "GET", "users/me")
            .then((json) => {
                setWallet(json.wallet);
                setCurrency(json.currency);
            });
        }

        const getPayments = () => {
            const userSession = localStorage.getItem("user-session");
            const { id } = JSON.parse(userSession);
            setId(id);
            customFetch("GET", "users/payments/")
            .then(paymentsBack => {
                setPayments(paymentsBack);
                setShowPays(true);
            });
        }


        getPayments();
        getWallet();
    }, [setCurrency, setShowPays, setPayments, setWallet]);

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
                
                {currency==='$' ? <div className = {styles.money}>{wallet}$</div> : <div className = {styles.money}>{wallet}€</div>}

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