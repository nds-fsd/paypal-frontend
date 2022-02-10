import styles from "./dashboard.module.css"
import { useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const { name, setName } = useContext(UserContext);
    const navigate = useNavigate();
    
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
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }, [navigate, setName]);

   
  return(
    <div className = {styles.dashboard}>
        <p>Welcome: {name}</p>
    </div>
   
)
};


export default Dashboard;
