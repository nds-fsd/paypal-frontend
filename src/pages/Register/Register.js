import styles from "./register.module.css"
import customFetch from '../../api';
import { setUserSession, getUserToken } from "../../api/auth";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageLog from "../../assets/imageLog.png";
import paydayLogo from "../../assets/paydayLogo.png";
import { Link } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = getUserToken()
        if (token) navigate("/main/dashboard");
      }, );
    
      const { register, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = (data) => {
        customFetch("POST", "users", {body: data})
        .then(userSession => {
          setUserSession(userSession);
          navigate("/main/dashboard");
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

                        <input type='text' placeholder="First Name" {...register("name", {required: true })}/>
                        {errors.name && <span className={styles.error}>First Name field is required</span>}
                        
                        <input type='text' placeholder="Last Name"{...register("surname", { required: true })} />
                        {errors.surname && <span>Last Name field is required</span>}


                        <input type='email' placeholder="Email" {...register("email", {required: true })}/>
                        {errors.email && <span className={styles.error}>Email field is required</span>}
                        
                        <input type='password' placeholder="Password"{...register("password", { required: true })} />
                        {errors.password && <span>Password field is required</span>}
                        
                        <div className={styles.send_button}>
                            <input type="submit" value="Register  " />
                        </div>
                    </form>
                </div>
            </div>
             
            <div className={styles.block_img}>
                <img src={imageLog} alt="" />
            </div>
            
        </div>
      );
    };
    
    export default Register;