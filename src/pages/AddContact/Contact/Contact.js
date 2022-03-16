import style from "./contact.module.css"


const Contact = ({data}) => {
    return (
        <div className={style.contact}>
            Name: {data.contact_name}
            <br></br>
            Email: {data.contact_email}
        </div>
    )
}

export default Contact;