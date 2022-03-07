import style from "./payments.module.css";
import { useState } from "react";
import {useEffect} from "react"
import customFetch from '../../../api';

import send from "../../../assets/sendWallet.png"
import receive from "../../../assets/receiveWallet.png"

const Payment = ({payment, id}) => {
    
    
    const [name, setName] = useState("");
    const [from, setFrom] = useState(null);

    const red = {
        color: "#FF374F"
    }

    useEffect(() => {
        const from = payment.from === id;
        setFrom(from);
        customFetch("GET", "users/name/" + (from ? payment.to : payment.from))
        .then((response) => {setName(response)});
    }, [id, payment.from, payment.to])

    return(
        <div className={style.payment}>
            <img alt = "symbol" src = {from ? send : receive} />
            <p className={style.date}>{payment.date.split('T')[0]}</p>
            <p className={style.name}>{name}</p>
            <div className={from ? style.amountsquare : style.amountsquare2}>
                <span className={from ? style.amounttext : style.amounttext2}>{from ? "Outcome" : "Income"}</span>
            </div>
            <p className= {style.amount} style = {from ? red : null}>{(from ? "-" : "+")+payment.amount + payment.currency}</p>
        </div>
    )
}

export default Payment;