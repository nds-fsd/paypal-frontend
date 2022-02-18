import styles from "./settings.module.css"
import { useForm } from "react-hook-form";
import { useEffect , useState, useRef} from "react";
import userimg from './images/userimg.svg'
import pen from './images/pen.svg'
import { useNavigate } from "react-router-dom";
import customFetch from '../../api';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const AccountSetting = () => {

    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const [user, setUser] = useState(0);
    
    useEffect(() => {
          getUser();
    }, []);

    const getUser = async () => {
      const userSession = localStorage.getItem("user-session");
      const { token } = JSON.parse(userSession);
      await fetch("http://localhost:3090/users/me" , {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
        })
        .then((response) => {
        if (response.status !== 200) throw new Error("Couldn't retrieve user data");
        return response.json();
        })
        .then((json) => {
          setUser(json);
        });
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const [userData, setUserData] = useState({
      name:'', surname:'', email:'', password:''
    })

    const handleChange = (e) => {
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
    }

    const onSubmit = () => {
      const userSession = localStorage.getItem("user-session");
      const { id } = JSON.parse(userSession);
      

      const data = {}
      userData.name === '' ? data.name=user.name : data.name=userData.name;
      userData.surname === '' ? data.surname=user.surname : data.surname=userData.surname;
      userData.email === '' ? data.email=user.email : data.email=userData.email;
      userData.password === '' ? data.password=user.password : data.password=userData.password;
        
      customFetch("PUT", "users/" + id , {body:data});
      navigate("/main/dashboard");
    }

    const inputFile = useRef(null);

    return(

        <div className = {styles.settings}>
            <div className = {styles.editbox}>
                <form className= {styles.form} onSubmit={handleSubmit(onSubmit)} onChange={handleChange}>
                    <p>Edit profile</p>
                    
                    <div className={styles.images}>
                    <div className={styles.userimage}><img src={userimg} alt="userImage"/></div>
                    <div className={styles.editimg}>
                      <img src={pen} alt="penlogo"/>
                      <input type='file' ref={inputFile} className={styles.uploading}></input></div>
                    </div>

                    <div className= {styles.namesinput}>
                    <input className = {styles.names} type='text' defaultValue={user.name} onChange={(e) =>setUserData({name: e.target.value })} 
                     placeholder="name" {...register("name", { required: true })}></input>
                      <input className = {styles.names} type='text' defaultValue={user.surname} placeholder="surname" onChange={handleChange} {...register("surname", { required: true })}></input>
                    </div>
                    <div className= {styles.nameserror}>
                      {errors.name && <span><h3>X</h3></span>}
                      {errors.surname && <span><h3>X</h3></span>}
                    </div>

                    <input className = {styles.email} type="email" defaultValue={user.email} placeholder="email" {...register("email", { required: true })}></input>
                    {errors.email && <span><h3>X</h3></span>}
                    
                    <div class={styles.passwordeye}>
                      <input className = {styles.password} type={passwordShown ? "text" : "password"} placeholder="Password" {...register("password")} />
                      <i className={styles.eye} onClick={togglePasswordVisiblity}>{eye}</i>
                    </div>

                    {(errors.email || errors.name || errors.surname) && <span><h3>Fields Required! If password field empty, then no password change.</h3></span>}

                    <input className = {styles.submit} type="submit" id="submit" name="submit" value="Save"></input>
                </form>
        </div>
    </div>

    )
}

export default AccountSetting;