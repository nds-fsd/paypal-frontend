import { useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import styles from './userHeader.module.css'
import DownArrow from '../../../assets/DownArrow.png'
import customFetch from '../../../api';
import user from "../../../assets/user.svg";

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
     
   }, [setName, setSurname, setPhoto]);
    
  return (
  <div className={styles.user_sidebar}>
     <div className={styles.profile}>
       <img src={photo ? photo : user} alt="profile_pic"/>
       <div className={styles.name}>
       <p>{name} {surname}</p>
       <button className={styles.sidebarClose} onClick={onClick}><img src={DownArrow} alt="arrow"/></button>
       </div>
     </div>
  </div>
  )
};

export default UserHeader;
