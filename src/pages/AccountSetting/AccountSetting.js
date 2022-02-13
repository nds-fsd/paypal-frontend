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

    const onSuuubmit = () => {
      const userSession = localStorage.getItem("user-session");
      const { id } = JSON.parse(userSession);
      const data = {
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        password: userData.password
      }
      customFetch("PUT", "users/" + id , {body:data});
      navigate("/main/dashboard");
    }

    
    const inputFile = useRef(null);
    const [photos, setPhotos] = useState([]);

    const addPhoto = (data) => {
      setPhotos([...photos, data])
    };

    const onUpload = () => {
        debugger;
        const files = inputFile.current.files;
        const formData = new FormData();
        const url = "https://api.cloudinary.com/v1_1/???????/image/upload";
      
        for (let i = 0; i < files.length; i++) {
          let file = files[i];
          formData.append("file", file);
          formData.append("upload_preset", "hv3kmdau");
          fetch(url, {
            method: "POST",
            header: {
                'Content-Type': 'multipart/form-data'
            },
            body: formData
          })
            .then((response) => {
                console.log(response);
              return response.text();
            })
            .catch((data) => {
              debugger;
              addPhoto(JSON.parse(data));
              console.log(data);
            });
        }
    };

    return(

        <div className = {styles.settings}>
            <div className = {styles.editbox}>
                <form className= {styles.form} onSubmit={handleSubmit(onSuuubmit)} onChange={handleChange}>
                    <p>Edit profile</p>
                    
                    <div className={styles.images}>
                    <div className={styles.userimage}><img src={userimg} alt="userImage"/></div>
                    <div className={styles.editimg}>
                      <img src={pen} alt="penlogo"/>
                      <input type='file' ref={inputFile} className={styles.uploading}></input></div>
                    </div>

                    <br></br>

                    <div className= {styles.namesinput}>
                      <input className = {styles.names} type="name" id="name" name="name" placeholder={user.name} {...register("name")}></input>
                      <input className = {styles.names} type="surname" id="surname" name="surname" placeholder={user.surname} {...register("surname")}></input>
                    </div>

                    <br></br>
                    <input className = {styles.email} type="email" id="email" name="email" placeholder={user.email} {...register("email")}></input>
                    
                    <br></br>

                    <div class={styles.passwordeye}>
                      <input className = {styles.password} type={passwordShown ? "text" : "password"} id="password" name="password" placeholder='Password' {...register("password")} />
                      <i className={styles.eye} onClick={togglePasswordVisiblity}>{eye}</i>
                    </div>

                    <br></br>        
                    <input className = {styles.submit} type="submit" id="submit" name="submit" value="Save"></input>
                </form>
        </div>
    </div>

    )
}

export default AccountSetting;