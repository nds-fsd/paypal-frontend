import { useNavigate } from "react-router-dom";
import styles from "./navbutton.module.css";

const NavButton = ({path, text}) => {

    const navigate = useNavigate();

    return(
        <button onClick={()=> navigate(path)}>{text}</button>
    )
}

export default NavButton;