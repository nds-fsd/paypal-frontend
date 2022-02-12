import React from 'react';
import Pending from '../../pending/Pending';
import '../toggleBar/toggleBar.css'

const ToggleBar = ({isToggle, closeUsersidebar }) => {
   
  return (
   <div onClick={ closeUsersidebar } className={`toggle ${isToggle && "is-open"}`}>
      <div className="toggleContainer">
         <Pending />
        
      </div>
 </div>
   )
};

export default ToggleBar;
