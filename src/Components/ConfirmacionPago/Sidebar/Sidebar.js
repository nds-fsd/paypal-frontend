import React from 'react';
import styles from "./sidebar.module.css";
import { ReactComponent as DayPayLogo } from './DayPay.svg';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarlogo}>
                <DayPayLogo/>
            </div>
        </div>
    )
}

export default Sidebar
