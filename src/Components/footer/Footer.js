import React from 'react';
import styles from '../../Components/footer/footer.module.css'
import email from '../../assets/email84.png';

const Footer = () => {
   return (
      <div className={styles.block_footer}>
         <div className={styles.footer}>
            <h4>Community</h4>
            <p>For Talents </p>
            <p>For Companies </p>
            <p>Facebook Group </p>
            <p>FAQ</p>
         </div>
         <div className={styles.footer}>
            <h4>About us</h4>
            <p>Meet the Team</p>
            <p>Our Story</p>
            <p>Career</p>
         </div>
         <div className={styles.footer}>
            <h4>Useful</h4>
            <p>Free Resume Builder</p>
            <p>Free Graphics</p>
            <p>Career Blog</p>

         </div>
         <div className={styles.footer}>
            <h4>Subscribe to Our Newsletter</h4>
            <p>Time is the most precious thing you have when <br/>
               bootstrapping. You can't take time.</p>
            <div className={styles.email}>
               <img src={email} alt="" />
               <p>Enter your email</p>
               <div className={styles.subscribe}>
               <button onClick={() => {}}>Subscribe</button>
            </div>
            </div>
            
         </div>
      </div>
   )
};

export default Footer;
