import styles from './userSidebar.module.css'
import UserHeader from './userHearder/userHeader';
import { useToggle } from '../../hooks/useToggle';
import ToggleBar from '../userSidebar/toggleBar/toggleBar';

const UserSideBar = () => {
  const [isToggle, openUsersidebar, closeUsersidebar] = useToggle(true);

  const onToggle= () =>{
    if(isToggle===true){
       closeUsersidebar();
    } else {
       openUsersidebar();
    }  
 }

  return (
  <div className={styles.user_sidebar}>
     <UserHeader onClick={() => {
       onToggle();
     }}/>

     <ToggleBar isToggle={isToggle} openUsersidebar={openUsersidebar} closeUsersidebar={closeUsersidebar}/>
  </div>
  )
};

export default UserSideBar;
