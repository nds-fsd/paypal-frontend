import React, { useEffect, useState, createContext} from 'react'
import { useForm} from "react-hook-form";
import styles from "./formulariopago.module.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavButton from '../../NavButton/NavButton';
import dotpattern from '../Images/DotPattern.svg';
import reactangulo from '../Images/Rectangle.png';
import NavBar from '../../NavBar/NavBar';
import ConfirmacionPago from '../ConfirmacionPago/ConfirmacionPago';
import RevisarDatos from '../RevisarDatos/RevisarDatos';
export const ContextApp=createContext([])



const FormularioPago = ({setPago, setChange}) => {
    

    const [submitting, setSubmitting] = useState(false);


    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState(0);

    //const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = () => {
        const data={
            email:email,
            amount:amount
        }
        console.log(email);
        setPago(data);
        setChange(1)
        // fetch('http://localhost:3002/sent', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // });
        // setSubmitting(true);
    }

    // new Promise((resolve, reject)=>{
    //     setTimeout(() => {resolve(items)}, 2000)})
    //     .then(resp => setProductos(resp))
    //     .catch(err=>console.log(err))
    //     .finally(()=>setLoading(false))

    setTimeout(() => {
        setSubmitting(false);
      }, 1500)
    

    //console.log(watch("name")); // watch input value by passing the name of it
    //console.log(watch(data)); 
    // console.log(watch(handleSubmit('email')))
    // console.log(watch(email))

    // useEffect(() => {
    //     console.log('Errors', errors);
    // }, [errors])

    const navigate = useNavigate();
    
    return (
        
        // <div className={styles.mainpago}>
        //     <ContextApp.Provider value={{valores, setValores}}> 
        //     <NavBar/> 
            <div className={styles.formulariopago}>
                
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/>
                <h1 className={styles.titulo}>Formulario de Pago</h1>
             
                <form className={styles.formulario} onSubmit={()=>{onSubmit()}}>
                    <label className={styles.shadow}>
                    <input type="email" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} className={styles.input}/>
                    {/* {errors.email?.type === 'required' && <p className={styles.error}>This field is required</p>}
                    {errors.email?.type === 'pattern' && <p className={styles.error}>Incorrect Email</p>} */}
                    </label>
                    <br/>
                    <label>
                    <input type="number" placeholder='Amount' value={amount} onChange={(e)=>{setAmount(e.target.value)}} className={styles.input}/>
                    {/* {errors.amount?.type === 'required' && <p className={styles.error}>This field is required</p>}
                    {errors.amount?.type === 'pattern' && <p className={styles.error}>Incorrect amount</p>} */}
                    </label>
                    <br/>
                    <input type="submit" className={styles.submit} onClick={() => {onSubmit()}}
                    />
                    {/* <div className={styles.estilohome} onClick={() => {navigate("/main/dashboard")}}><NavButton path = "/" text="Submit"/></div> */}
                   {submitting &&<div>Submtting Form...</div>}
                </form>
            </div>
        //     </ContextApp.Provider>
        // </div>
    )
}

export default FormularioPago
