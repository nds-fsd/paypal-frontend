import style from "./contact.module.css";
import user from "../../../assets/user.svg";

const Contact = ({data}) => {
    return (
        <div className={style.contact}>
            <img src={data.contact_img ? data.contact_img : user} alt="user-pic" />
            Name: {data.contact_name}
            <br></br>
            Email: {data.contact_email}
        </div>
    )
}

export default Contact;