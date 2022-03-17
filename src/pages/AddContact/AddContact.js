import style from "./addcontact.module.css";
import Contact from "./Contact/Contact";
import {useState, useEffect} from "react"
import customFetch from "../../api"

const AddContact = () => {
    const [contacts, setContacts] = useState(null);
    const [newContact, setNewContact] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        customFetch("GET", "users/contacts")
        .then(res => {setContacts(res)})
    }, [])

    function found(email, contactos){
        for (var i=0; i < contactos.length; i++) {
            if (contactos[i].contact_email === email) {
                return true;
            }
        }
    }

    const addContact = () => {
        customFetch("GET", "users/me")
        .then(res => {
          if(res.email === newContact) { setError("No se puede agregar a uno mismo");  }
          else{
            //const added = (contacts.indexOf(newContact) > -1);
            // const added = contacts.find(o => o.email === newContact);
            var added = found(newContact, contacts);
            console.log(added)
            if(!added){
                customFetch("GET", "users/id/" + newContact)
                .then(res => {
                    if(res !== null){ customFetch("POST", "contact", {body:{email: newContact}}).then(res => {window.location.reload()}) }
                    else{  setError("Email no registrado"); }
                });
            }
            else{setError("Email ya añadido"); }
          }
        })
    }

    return (
        <div className = {style.addcontact}>
            <h3>AddContact</h3>
            <form className={style.contact_form}>
                <input placeholder = "example@example.com" value = {newContact} onChange={(e)=> setNewContact(e.target.value)}></input>
                <button onClick={(e) => {addContact(); e.preventDefault()}}>Add Contact</button>
            </form>
            <h3 className={style.error}>{error}</h3>
            {contacts && contacts.map(contact => {return(<Contact key={contact._id}data = {contact}/>)})}
        </div>
    )
}

export default AddContact;