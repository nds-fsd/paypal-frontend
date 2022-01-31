import Header from "../../Components/header/Header";
import styles from "../LandingPage/landingpage.module.css";
import mainImg from "../../assets/main_img.png";
import rating from "../../assets/Rating.png";
import rating2 from "../../assets/Rating2.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import simbol1 from "../../assets/simbol1.png";
import simbol2 from "../../assets/simbol2.png";
import Group3 from "../../assets/Group3.png";
import Image1 from "../../assets/Image1.png";
import Footer from "../../Components/footer/Footer";


const LandingPage = () => {
    return(
        <div className = {styles.landingpage}>
            <Header />
            <div className={styles.block1}>
                <div className={styles.body_content}>
                    <h1>Send and receive <br/>
                    money without  <br/>
                    a hassle</h1>
                    <p>
                    We’ve helped thousends of people to save fees <br/>
                    sending money with us.
                    </p>
                    <button>Get Started for Free</button>
                    <p>Still confused? Check our 1 min video</p>
                </div>

                <div className={styles.body_content2}>
                    <img src={mainImg} alt="people" />
                </div>
            </div>
            <div className={styles.block1}>
                <div className={styles.rating}>
                    <img src={rating} alt="" />
                    <img src={rating2} alt="" />
                </div>
                <div className={styles.info}>
                    <h1>
                    Trusted by 5,000+ happy<br/>
                    bussiness and customers since<br/>
                     2020.
                    </h1>
                    <p>Also featured in</p>
                    <div className={styles.logo}>
                    <img src={logo4} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo2} alt="" />
                    </div>
                </div>
            </div>
            {/* second page */}
            <div className={styles.block2}>
                <div class={styles.block_header}></div>
                <div className={styles.block_symbols}>
                    <h1>
                    Grow your <br/>
                    business fast.
                    </h1>
                    <div className={styles.symbol}>
                        <img src={simbol1} alt="" />
                        <div className={styles.text}>
                            <h3>Start accepting online payments</h3>
                            <p>
                            Do not loose deals and start <br/>
                            accepting payments today.
                            </p>
                        </div>
                    </div>
                    <div className={styles.symbol}>
                        <img src={Group3} alt="" />
                        <div className={styles.text}>
                            <h3>With instant payments</h3>
                            <p>
                                Regardless of the amount, <br/>
                                our wires are instant.
                            </p>
                        </div>
                    </div>
                    <div className={styles.symbol}>
                        <img src={simbol2} alt="" />
                        <div className={styles.text}>
                            <h3>Get paid seemlessly</h3>
                            <p>
                            Focus on your deals, <br/>
                            not on the payment options.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgLanding}>
                        <img src={Image1} alt="" />
                </div>
            </div>
                <Footer />
        </div>
    )
}

export default LandingPage;