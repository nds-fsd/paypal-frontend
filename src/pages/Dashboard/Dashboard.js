import styles from "./dashboard.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [name, setName] = useState();
    const navigate = useNavigate();
    
  useEffect(() => {
    const userSession = localStorage.getItem("user-session");
    console.log(userSession);
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
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }, []);

   
  return(
    <div className = {styles.dashboard}>
        <p>Welcome: {name}</p>
    </div>
   
)
};


export default Dashboard;
