import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import customFetch from '../../api';
import { setUserSession } from "../../api/auth";
import styles from "../Register/signup.module.css"
import paydayLogo from "../../assets/paydayLogo.png";
import imageLog from "../../assets/imageLog.png";


const SignUp = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) navigate("/main/dashboard");
    }, [navigate]);
    
   
    const { register, handleSubmit, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      customFetch("POST", "users", {body: data})
      .then(userSession => {
        setUserSession(userSession);
        navigate("/main");
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
              <input type='text' placeholder="Name" {...register("name", {required: true })}/>
                  {errors.name && <span className={styles.error}>Name field is required</span>}
                  
                  <input type='text' placeholder="Surname"{...register("surname", { required: true })} />
                  {errors.surname && <span>Surname field is required</span>}

                  <input type='email' placeholder="email" {...register("email", {required: true })}/>
                  {errors.email && <span className={styles.error}>email field is required</span>}
                  
                  <input type='password' placeholder="password"{...register("password", { required: true })} />
                  {errors.password && <span>password field is required</span>}
                  
                  <div className={styles.send_button}>
                      <input type="submit" value="Sign Up" />
                  </div>
              </form>
          </div>
      </div>
       
      <div className={styles.block_img}>
          <img src={imageLog} alt="" />
      </div>
      
  </div>
    )
}

export default SignUp;