import styles from "./accountsetting.module.css"
import { useForm } from "react-hook-form";
import { useEffect , useState} from "react";
import userimg from './images/userimg.svg'
import pen from './images/pen.svg'
import { useNavigate } from "react-router-dom";
import customFetch from '../../api';
import { setUserSession, getUserToken ,getSessionUser} from "../../api/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


//Instalaciones:
//npm i react-hook-form
// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/react-fontawesome


const AccountSetting = () => {

    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    ///TEST VARIABLE TO SEE THE INPUT///////
    const test1='Test'

    const [userData, setUserData] = useState({
      name:'', surname:'', email:'', password:''
    })

    const handleChange = (e) => {
      //return e.target.name
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
    }

    console.log(userData)

    ////////////////////////////////////////

    const [user, setUser] = useState(0);
    

    useEffect(() => {
        getUser();
      }, []);

    
      const getUser = () => {
        const userSession = localStorage.getItem("user-session");
        const { token } = JSON.parse(userSession);
        fetch("http://localhost:3090/users/me" , {
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

    const onSubmit = (data) => {
        customFetch("PUT", "users", {body: data})
        .then(userSession => {
          setUserSession(userSession);
          navigate("/main/dashboard");
        }).catch(error => {
          // Ideally, we should show an error message to the user
          console.error(error);
        });
      };

      const onSuubmit = () => {
        const userSession = localStorage.getItem("user-session");
        const { token } = JSON.parse(userSession);

        const data = {
          name: userData.name,
          surname: userData.surname,
          email: userData.email,
          password: userData.password
      }
      // customFetch("PATCH", "users", {body:data})
        
        fetch("http://localhost:3090/users/me" , {
          method: "PUT",
          headers: { Authorization: "Bearer " + token },
          body:data
          })
          .then((response) => {
          if (response.status !== 200) throw new Error("Couldn't update user data");
          return response.json();
          })
          .then((json) => {
            setUser(json);
          });

    }


    const onSuuubmit = () => {
      const userSession = localStorage.getItem("user-session");
      const { id } = JSON.parse(userSession);
      const data = {
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        password: userData.password
      }
      customFetch("POST", "users", {body:data})
  }

    return(
        <div className = {styles.settings}>
            <div className = {styles.settingsbox}>
                <p>Edit profile</p>

                <div className="images">

                <div className={styles.userimage}><img  src={userimg} alt="userImage"/></div>
                <div className={styles.editimg}><img  src={pen} alt="penlogo"/></div>
                
                </div>
                
                
                <form onSubmit={handleSubmit(onSuuubmit)} onChange={handleChange} className= {styles.form}>
                    <br></br>
                    
                    <div className= {styles.namesinput}>
                        <input className = {styles.names} type="name" id="name" name="name" placeholder={user.name} {...register("name")}></input>
                        {/* {errors.name && <span>This field is required</span>} */}
                        <input className = {styles.names} type="surname" id="surname" name="surname" placeholder={user.surname} {...register("surname")}></input>
                        {/* {errors.surname && <span>This field is required</span>} */}
                    </div>
                    <br></br>

                    
                    <input className = {styles.email} type="email" id="email" name="email" placeholder={user.email} {...register("email")}></input>
                    {errors.email && <span>This field is required</span>}
                    
                    
                    <br></br>

                    <div className="password-wrapper">
                    <input type={passwordShown ? "text" : "password"} id="password" name="password" placeholder='Password' {...register("password")}></input>
                    {errors.password && <span>This field is required</span>}
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                    </div>

                    <br></br>      

                    <div>
                    <input className = {styles.save} type="submit" id="submit" name="submit" value="Save"></input>
                    </div>  

                    <h1>Hello {register.surname}</h1>
                </form>
            </div>
        </div>
    )
}

export default AccountSetting;