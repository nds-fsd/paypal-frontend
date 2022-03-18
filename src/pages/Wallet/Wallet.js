import styles from "./wallet.module.css"
import dotpattern from "../../assets/DotPattern3.png"
import dotpattern2 from "../../assets/DotPattern3.png"
import arrow from "../../assets/arrow.png"
import {useEffect, useState} from "react";
import customFetch from '../../api';
import { UserContext } from "../../context/userContext";
import { useContext } from "react";
import { getUserId } from "../../api/auth";
import Transactions from "./Transactions/Transactions"
import AddFunds from "./AddFunds/AddFunds"

const Wallet = () => {
    
    const { wallet, setWallet, payments, setPayments, choose, setChoose, showPays, setShowPays , currency, setCurrency} = useContext(UserContext);

    const [id, setId] = useState(null);
    const [add, setAdd] = useState(false);
    const [percent, setPercent] = useState(0);
   
    const clicked = {
        color: "#258AFF"
    }
    
    useEffect(() => {

        const getWallet = () => {
            customFetch( "GET", "users/me")
            .then((json) => {
                setWallet(Math.round(json.wallet * 100) / 100);
                setCurrency(json.currency);
            });
        }

        const getPayments = () => {
            const id = getUserId();
            setId(id);
            
            customFetch("GET", "users/payments/")
            .then(paymentsBack => {
                setPayments(paymentsBack);
                setShowPays(true);
                const sum = paymentsBack.map(payment => {
                    return (payment.to === id ? payment.amount : -payment.amount)
                })
                const result = sum.reduce((a, b) => a + b, 0)
                setPercent(result);
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
                
                <div className={!add ? styles.addFunds : styles.addFunds2}>
                    <div className={styles.submit} onClick={() => setAdd(true)}>
                        <p className={styles.fundText}>Add Funds</p>
                    </div>
                </div>

                <div className={!add ? styles.wall : styles.wall2}>
                    <img className = {styles.arrow}src = {arrow} alt = "arrow"/>
                    <div className={styles.percent} style={percent < 0 ?  {color: "rgb(255, 55, 79)"} : null}>{ Math.round(((((wallet + percent) - wallet)/wallet)*100) * 100) / 100 }%</div>
                    
                    <div className = {styles.money} onClick={() => setAdd(false)}>{wallet + currency}</div>
                </div>
                {!add ? <Transactions showPays = {showPays} payments = { payments} choose = {choose} id = {id} clicked = {clicked} setChoose = {setChoose}/>
                : <AddFunds/>}
                
                <div className={!add ? styles.bar : styles.bar2}></div>
            </div>
            
        </div>
    )
}

export default Wallet;