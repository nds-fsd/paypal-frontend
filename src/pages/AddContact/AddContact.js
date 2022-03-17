import style from "./addcontact.module.css";
import Contact from "./Contact/Contact";


import {useState, useEffect} from "react"
import customFetch from "../../api"

const AddContact = () => {
    const [contacts, setContacts] = useState(null);
    const [newContact, setNewContact] = useState("");

    useEffect(() => {
        customFetch("GET", "users/contacts")
        .then(res => {setContacts(res)})
    }, [])

    const addContact = () => {
        customFetch("POST", "contact", {body:{email: newContact}})
    }

    return (
        <div className = {style.addcontact}>
            <h3>AddContact</h3>
            <form className={style.contact_form}>
                <input placeholder = "example@example.com" value = {newContact} onChange={(e)=> setNewContact(e.target.value)}></input>
                <button onClick={() => addContact()}>Add Contact</button>
            </form>
            
            {contacts && contacts.map(contact => {return(<Contact key={contact._id}data = {contact}/>)})}
        </div>
    )
}

export default AddContact;