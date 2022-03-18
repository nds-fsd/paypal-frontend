import style from "./contact.module.css";
import user from "../../../assets/user.svg";
import customFetch from "../../../api"

const Contact = ({data}) => {

    const deleteContact = () => {
        customFetch("DELETE", "contact/" + data._id)
        .then(res => {window.location.reload();})
    }
    return (
        <div className={style.contact}>
            <img src={data.contact_img ? data.contact_img : user} alt="user-pic" />
            Name: {data.contact_name}
            <br></br>
            Email: {data.contact_email}
            <button className={style.delete} onClick={() => {deleteContact();}}>Delete</button>
        </div>
    )
}

export default Contact;