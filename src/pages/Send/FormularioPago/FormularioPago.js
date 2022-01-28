import styles from "./formulariopago.module.css"
import NavButton from "../../NavButton/NavButton"


const FormularioPago = () => {
    return(
        <div className = {styles.send}>
            <div className = {styles.paybox}>
                <form className= {styles.form}>
                    <p>Send money to another user</p>
                    <br></br>
                    <input className = {styles.email} type="email" id="email" name="email" placeholder="Receiver's Email"></input>
                    <br></br>
                    <input className = {styles.amount} type="number" id="amount" name="amount" placeholder="Amount"></input>
                    <br></br>        
                    {/* <NavButton className = {styles.submit} path = "/main/send/paymentcheck" text="Transfer founds"/>       */}
                    <input className = {styles.submit} type="submit" id="submit" name="submit" value="Transfer founds"></input>
                </form>
            </div>
        </div>
    )
}

export default FormularioPago;