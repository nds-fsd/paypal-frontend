import { createContext } from 'react';
import { useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
   const [name, setName] = useState("");
   const [surname, setSurname] = useState("");
   const [wallet, setWallet] = useState(0);
   const [email, setEmail] = useState("");
   const [amount, setAmount] = useState(0);
   const [err, setErr] = useState("");
   const [currency, setCurrency] = useState("$");
   const [from, setFrom] = useState(null);
   const [date, setDate] = useState("");
   const [payments, setPayments] = useState([]);
   const [pago, setPago] = useState({email: "", amount:0, id:null})
   const [choose, setChoose] = useState(0);
   const [showPays, setShowPays] = useState(false);

   
   const sharedValues = {
       name, setName,
       surname, setSurname,
       wallet, setWallet,
       email, setEmail,
       amount, setAmount,
       err, setErr,
       currency, setCurrency,
       from, setFrom,
       date, setDate,
       payments, setPayments,
       pago, setPago,
       choose, setChoose,
       showPays, setShowPays
   }

   return(
      <UserContext.Provider value={sharedValues}>
         {children}
      </UserContext.Provider>

   )
}

