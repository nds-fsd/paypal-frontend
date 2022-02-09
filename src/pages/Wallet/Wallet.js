import styles from "./wallet.module.css"
import dotpattern from "../../assets/DotPattern3.png"

const Wallet = () => {
    return(
        <div className = {styles.wallet}>
            <img className={styles.dot1}src = {dotpattern} alt="dotpattern"></img>
            <div className={styles.container}>
                <div className={styles. bar}></div>
                <div className={styles.addFunds}>
                    <div className={styles.submit}>
                        <p className={styles.fundText}>Add Funds</p>
                    </div>
                </div>
                <div className={styles.percent}>23%</div>
                <div className = {styles.money}>269.89$</div>
                <div className = {styles.subTitle}>Recent transactions</div>
                <div className = {styles.options}>
                    <p className={styles.all}>All</p>
                    <p className={styles.income}>Income</p>
                    <p className={styles.outcome}>Outcome</p>
                </div>

                <div className={styles.show}>Show more transactions</div>
            </div>
        </div>
    )
}

export default Wallet;