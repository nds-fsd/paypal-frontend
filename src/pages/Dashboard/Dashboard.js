import styles from "./dashboard.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeSession } from "../../api/auth";


const Dashboard = () => {
    const [email, setEmail] = useState();
    const navigate = useNavigate();
     
  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3090/users/me", {
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
        debugger;
        setEmail(json.email);
        console.log(email);
      })
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
    }, );

    const onLogOut = () => {
        removeSession()
        navigate("/login");
      };
    

  return(
    <div className = {styles.dashboard}>
        <button onClick={() => onLogOut()}>Log Out</button>
        <p>Welcome: {email}</p>
    </div>
)
};



export default Dashboard;
