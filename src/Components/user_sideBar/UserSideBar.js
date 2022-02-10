import { useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import styles from '../user_sideBar/userSidebar.module.css'


const UserSideBar = () => {
  const { name, setName } = useContext(UserContext);

    
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
       
      })
      .catch(error => {
        console.log("Couldn't retrieve user data");
      });
    }, [setName]);

  
  return (
  <div className={styles.user_sidebar}>
     <div className={styles.profile}>
       <img src="http://placeimg.com/150/150/people" alt="profile_pic"/>
       <p>{name}</p>
     </div>
  </div>
  )
};

export default UserSideBar;
