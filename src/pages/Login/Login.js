import styles from "./login.module.css"
import customFetch from '../../api';
import { setUserSession, getUserToken } from "../../api/auth";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageLog from "../../assets/imageLog.png";
import paydayLogo from "../../assets/paydayLogo.png";
import { Link } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = getUserToken()
        if (token) navigate("/dashboard");
      }, );
    
      const { register, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        customFetch("POST", "login", {body: data})
        .then(userSession => {
          setUserSession(userSession);
          navigate("/dashboard");
        }).catch(error => {
            'REQUEST_FAILED'
          console.error(error);
        });
      };
    
      return (
        <div className={styles.login}>
            <div className={styles.login_block}>
                <div className={styles.logo}>
                    <img src={paydayLogo} alt="" />
                </div>
                <div className={styles.login_inputs}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type='text' placeholder="email" {...register("email", {required: true })}/>
                        {errors.email && <span className={styles.error}>email field is required</span>}
                        
                        <input type='password' placeholder="password"{...register("password", { required: true })} />
                        {errors.password && <span>password field is required</span>}
                        
                        <div className={styles.send_button}>
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                    <p>Don´t have an account? <Link className={styles.link} to='/register'>Sign up</Link></p>
                </div>
            </div>
             
            <div className={styles.block_img}>
                <img src={imageLog} alt="" />
            </div>
            
        </div>
      );
    };
    
    export default Login;