import { createContext } from 'react';
import { useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
   const [name, setName] = useState();
   const [surname, setSurname] = useState();
   const [wallet, setWallet] = useState(0);

   const sharedValues = {
       name,
       setName,
       surname,
       setSurname,
       wallet,
       setWallet
   }

   return(
      <UserContext.Provider value={sharedValues}>
         {children}
      </UserContext.Provider>

   )
}

