import { createContext } from 'react';
import { useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
   const [name, setName] = useState();
   const [surname, setSurname] = useState();

   const sharedValues = {
       name,
       setName,
       surname,
       setSurname
   }

   return(
      <UserContext.Provider value={sharedValues}>
         {children}
      </UserContext.Provider>

   )
}