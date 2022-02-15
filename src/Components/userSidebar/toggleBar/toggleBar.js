import React from 'react';
import Pending from '../../pending/Pending';
import '../toggleBar/toggleBar.css'


const ToggleBar = ({isToggle, closeUsersidebar }) => {

   const handleOnclick = (e) => e.stopPropagation();
   
  return (
   <div onClick={ closeUsersidebar } className={`toggle ${isToggle && "is-open"}`}>
      <div className="toggleContainer" onClick={handleOnclick}>
         <Pending />
      </div>
 </div>
   )
};

export default ToggleBar;
