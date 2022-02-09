import React, { useEffect, useState } from 'react';
import styles from '../user_sideBar/userSidebar.module.css'

const UserSideBar = () => {
  const [name, setName] = useState();

  useEffect(() => {
    
    const token = localStorage.getItem("token");
    fetch("http://localhost:3090/users" , {
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
  }, []);
  
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
