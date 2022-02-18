import styles from "./settings.module.css"
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
    const togglePasswordVisiblity = () => { setPasswordShown(passwordShown ? false : true); };

    const [user, setUser] = useState({name:"name", surname:"surname", email: "email", password:"pass"});
    const getUser = () => {customFetch("GET", "users/me").then((json) => { setUser({...json, password:""});}); }
    useEffect(() => { getUser() }, []);

    const onSubmit = () => {
      const userSession = localStorage.getItem("user-session");
      const { id } = JSON.parse(userSession);
      const data = {name: user.name, surname: user.surname, email:user.email, password:user.password}

      customFetch("PUT", "users/" + id , {body:data})
      .then(res => {window.location.reload();})
      .catch(err => console.log(err));
    }

    const inputFile = useRef(null);

    return(

      <div className = {styles.settings}>
          <div className = {styles.editbox}>
              <form className= {styles.form} >
                  <p>Edit profile</p>
                  
                  <div className={styles.images}>
                    <div className={styles.userimage}><img src={userimg} alt="userImage"/></div>
                    <div className={styles.editimg}>
                      <img src={pen} alt="penlogo"/>
                      <input type='file' ref={inputFile} className={styles.uploading}></input>
                    </div>
                  </div>

                  <div className= {styles.namesinput}>
                    <input className = {styles.names} type='text' value={user.name} onChange={(e) =>setUser({...user,name: e.target.value })} placeholder="name"></input>
                    <input className = {styles.names} type='text' value={user.surname}  onChange={(e) =>setUser({...user,surname: e.target.value})} placeholder="surname"></input>
                  </div>
                  <div className= {styles.nameserror}>
                    {!user.name && <span><h3>X</h3></span>}
                    {!user.surname && <span><h3>X</h3></span>}
                  </div>

                  <input className = {styles.email} type="email" value={user.email} onChange={(e) =>setUser({...user,surname: e.target.value})} placeholder="email"></input>
                  {!user.email && <span><h3>X</h3></span>}
                  
                  <div className={styles.passwordeye}>
                    <input className = {styles.password} type={passwordShown ? "text" : "password"} onChange={(e) =>setUser({...user,password: e.target.value})} placeholder="Password"  />
                    <i className={styles.eye} onClick={togglePasswordVisiblity}>{eye}</i>
                  </div>

                  <button className = {styles.submit} onClick={(e) => {e.preventDefault();e.stopPropagation();onSubmit();}}>Save</button>
              </form>
          </div>
      </div>

    )
}

export default AccountSetting;