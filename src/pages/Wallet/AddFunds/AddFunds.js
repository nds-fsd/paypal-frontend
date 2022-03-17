import styles from "./addfunds.module.css"
import {useState} from "react"
import customFetch from "../../../api"

const AddFunds = () => {

    const [money, setMoney] = useState(0);

    const addMoney = () => {
        customFetch("GET", "users/me")
        .then(res => {
            const data = {
                ...res,
                wallet: res.wallet + parseInt(money)
            }
            console.log(data);
            customFetch("PUT", "users", {body:data})
            .then(res => {window.location.reload()})
        })
    }

    return (
        <div className = {styles.container}>
            <form className = {styles.form}>
                <input className= {styles.input} type = "number" value = {money} onChange = {(e) => setMoney(e.target.value)}></input>
                <button className = {styles.submit}onClick = {(e) => {addMoney(); e.preventDefault();}}>Add Funds</button>
            </form>
        </div>
    )
}

export default AddFunds;