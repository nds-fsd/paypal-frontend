import styles from "./dashboard.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [email, setEmail] = useState();
    const navigate = useNavigate();
     
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
        setEmail(json.email);
       
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }, []);

   
  return(
    <div className = {styles.dashboard}>
        <p>Welcome: {email}</p>
    </div>
   
)
};


export default Dashboard;
