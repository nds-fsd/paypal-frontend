import { useEffect, useContext } from "react";
import { UserContext } from "../../../context/userContext";
import styles from './userHeader.module.css'
import DownArrow from '../../../assets/DownArrow.png'

const UserHeader = ({ onClick }) => {

   const { name, setName, surname, setSurname } = useContext(UserContext);

  useEffect(() => {
    const userSession = localStorage.getItem("user-session");
    const { token } = JSON.parse(userSession);
    fetch("http://localhost:3090/users/me" , {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Couldn't retrieve user data");
        }
        return response.json();
      })
      .then((json) => {
        setName(json.name);
        setSurname(json.surname);
       
      })
      .catch(error => {
        console.log(error, "Couldn't retrieve user data");
      });
    }, [setName, setSurname]);

  
  return (
  <div className={styles.user_sidebar}>
     <div className={styles.profile}>
       <img src="http://placeimg.com/150/150/people" alt="profile_pic"/>
       <div className={styles.name}>
       <p>{name} {surname}</p>
       <button className={styles.sidebarClose} onClick={onClick}><img src={DownArrow} alt="arrow"/></button>
       </div>
     </div>
  </div>
  )
};

export default UserHeader;
