import { useNavigate } from "react-router-dom";

const NavButton = ({path, text}) => {

    const navigate = useNavigate();

    return(
        <div>
            <button onClick={()=> navigate(path)}>{text}</button>
        </div>
    )
}

export default NavButton;