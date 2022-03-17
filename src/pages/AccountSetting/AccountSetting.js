import styles from "./settings.module.css"
import { useEffect , useState, useRef} from "react";
import pen from './images/pen.svg'
import customFetch from '../../api';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

// Import for Cloudinary
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
//import userimg from './images/userimg.svg'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const AccountSetting = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => { setPasswordShown(passwordShown ? false : true); };

    const [user, setUser] = useState({name:"name", surname:"surname", email: "email", password:"pass", currency:"currency", wallet:"wallet"});
    const [initialCurrency, setInitialCurrency] = useState({currency:"currency"});
    const getUser = () => {customFetch("GET", "users/me").then((json) => { setUser({...json, password:""});   setInitialCurrency(json.currency)  }); }
    useEffect(() => { getUser() },[]);

    const cld = new Cloudinary({
      cloud: {
        cloudName: 'du06jxdci'
      }
    }); 

    const myImage = cld.image('userimg_d4dfp5');
    myImage
    .resize(thumbnail().width(90).height(90).gravity(focusOn(FocusOn.face())))  // Crop the image.
    .roundCorners(byRadius(10))    // Round the corners.



    const inputFile = useRef(null);
    const [photos, setPhotos] = useState([]);

    const addPhoto = (data) => {
      setPhotos([...photos, data])
    };

    const onUpload = () => {
      const files = inputFile.current.files;
      const formData = new FormData();
      const url = "https://api.cloudinary.com/v1_1/du06jxdci/image/upload";
    
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        formData.append("file", file);
        formData.append("upload_preset", "q6bz66dk");
        fetch(url, {
          method: "POST",
          header: {
              'Content-Type': 'multipart/form-data'
          },
          body: formData
        })
          .then((response) => {
              console.log(response);
            return response.text();
          })
          .catch((data) => {
            addPhoto(JSON.parse(data));
            console.log(data);
          });
      }
    };


    const onSubmit = () => {
      const userSession = localStorage.getItem("user-session");
      const { id } = JSON.parse(userSession);
      
      if (initialCurrency==="€" && user.currency==="€") {
        const data = {name: user.name, surname: user.surname, email:user.email, password:user.password, currency:user.currency, wallet:user.wallet}
        customFetch("PUT", "users/" + id , {body:data})
      .then(res => {window.location.reload();})
      .catch(err => console.log(err));
      }

      else if (initialCurrency==="$" && user.currency==="$") {
        const data = {name: user.name, surname: user.surname, email:user.email, password:user.password, currency:user.currency, wallet:user.wallet}
        customFetch("PUT", "users/" + id , {body:data})
      .then(res => {window.location.reload();})
      .catch(err => console.log(err));
      }

      else if (initialCurrency==="€" && user.currency==="$") {
        const data = {name: user.name, surname: user.surname, email:user.email, password:user.password, currency:user.currency, wallet: (Math.floor(1.1*user.wallet)).toFixed(4)}
        customFetch("PUT", "users/" + id , {body:data})
      .then(res => {window.location.reload();})
      .catch(err => console.log(err));
      }

      else if (initialCurrency==="$" && user.currency==="€") {
        const data = {name: user.name, surname: user.surname, email:user.email, password:user.password, currency:user.currency, wallet: (Math.floor(0.9*user.wallet)).toFixed(4)}
        customFetch("PUT", "users/" + id , {body:data})
      .then(res => {window.location.reload();})
      .catch(err => console.log(err));
      }
      
    }

    return(

      <div className = {styles.settings}>
          <div className = {styles.editbox}>
              <form className= {styles.form} >
                  <p>Edit profile</p>
                  
                  <div className={styles.images}>
                    {/* <div className={styles.userimage}><img src={userimg} alt="userImage"/></div> */}
                    <div className={styles.userimage}><AdvancedImage cldImg={myImage} /></div>
                    <div className={styles.editimg}>
                      <img src={pen} alt="penlogo"/>
                      <input type='file' ref={inputFile} className={styles.uploading}></input>
                    </div>
                  </div>
                  
                  <button onClick={(e) => {e.preventDefault();e.stopPropagation();onUpload()}}>Upload</button>

                  <div className= {styles.namesinput}>
                    <input className = {styles.names} type='text' value={user.name} onChange={(e) =>setUser({...user,name: e.target.value })} placeholder="name"></input>
                    <input className = {styles.names} type='text' value={user.surname}  onChange={(e) =>setUser({...user,surname: e.target.value})} placeholder="surname"></input>
                  </div>
                  <div className= {styles.nameserror}>
                    {!user.name && <span><h3>X</h3></span>}
                    {!user.surname && <span><h3>X</h3></span>}
                  </div>

                  <input className = {styles.email} type="email" value={user.email} onChange={(e) =>setUser({...user,surname: e.target.value})} placeholder="email"></input>
                  {!user.email && <span><h3>X</h3></span>}
                  
                  <div className={styles.passwordeye}>
                    <input className = {styles.password} type={passwordShown ? "text" : "password"} onChange={(e) =>setUser({...user,password: e.target.value})} placeholder="Password"  />
                    <i className={styles.eye} onClick={togglePasswordVisiblity}>{eye}</i>
                  </div>


                  <select  type='currency' value={user.currency} onChange={(e) =>setUser({...user,currency: e.target.value})} >
                    <option value="$">USD ($)</option>
                    <option value="€">EUR (€)</option>
                    </select>

                  <button className = {styles.submit} onClick={(e) => {e.preventDefault();e.stopPropagation();onSubmit();}}>Save</button>
              </form>
          </div>
      </div>

    )
}

export default AccountSetting;