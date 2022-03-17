import { useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import styles from './userHeader.module.css'
import DownArrow from '../../../assets/DownArrow.png'
import customFetch from '../../../api';
<<<<<<< HEAD
=======
import { getSessionUser, getUserToken } from "../../../api/auth";
import user from "../../../assets/user.svg";
>>>>>>> dev

const UserHeader = ({ onClick }) => {

  const { name, setName, photo, setPhoto, surname, setSurname } = useContext(UserContext);
   
  useEffect(() => {

      customFetch( "GET", "users/me")
      .then((json) => {
        setName(json.name);
        setSurname(json.surname);
        setPhoto(json.image)
      })
      .catch(error => {
        console.log(error, "Couldn't retrieve user data");
      }); 
     
   }, [setName, setSurname]);
    
  return (
  <div className={styles.user_sidebar}>
     <div className={styles.profile}>
<<<<<<< HEAD
       <img src={photo ? photo : "http://localhost:3000/static/media/userimg.b973b975da9ac1f277c315d31a3f95c5.svg"} alt="profile_pic"/>
       <div className={styles.name}>
       <p>{name} {surname}</p>
       <button className={styles.sidebarClose} onClick={onClick}><img src={DownArrow} alt="arrow"/></button>
       </div>
=======
        <img src={user} alt="user-pic" />
        <div className={styles.name}>
        <p>{name} {surname}</p>
        <button className={styles.sidebarClose} onClick={onClick}><img src={DownArrow} alt="arrow"/></button>
        </div>
>>>>>>> dev
     </div>
  </div>
  )
};

export default UserHeader;
