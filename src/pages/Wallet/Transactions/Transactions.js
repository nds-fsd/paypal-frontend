import styles from "./transactions.module.css"
import Payment from "../Payment/Payment"

const Transactions = ({showPays, payments, choose, id, clicked, setChoose}) => {
    return(
        <div className = {styles.container}>
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
    )
}

export default Transactions;