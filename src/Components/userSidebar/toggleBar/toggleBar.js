import React from 'react';
import '../toggleBar/toggleBar.css'

const ToggleBar = ({isToggle, closeUsersidebar }) => {
   
  return (
   <div onClick={ closeUsersidebar } className={`toggle ${isToggle && "is-open"}`}>
      <div className="toggleContainer">
      
          <button>Send</button>
          <button>request</button>
        
      </div>
 </div>
   )
};

export default ToggleBar;
