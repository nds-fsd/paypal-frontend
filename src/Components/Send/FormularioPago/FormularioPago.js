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



const FormularioPago = () => {
    
    // const initialValues= {
    //     name: '',
    //     amount: '',
    //     payment: '',
    // }

    const [submitting, setSubmitting] = useState(false);

    // const [formValues, setFormValues] = useReducer(
    //     (curVals, newVals) => ({...curVals, ...newVals}), initialValues)
        

    // const { name, amount, payment}= formValues;

    // function handleFormChange(event) {
    //     const {name, value}= event.target;
    //     setFormValues({[name]:value});
    //     setSubmitting(true);
    // }

    const [valores, setValores] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:3002/sent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        setSubmitting(true);
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
    //console.log(watch(valores)); 
    //console.log(handleSubmit('name'))

    useEffect(() => {
        console.log('Errors', errors);
    }, [errors])

    const navigate = useNavigate();
    
    return (
        
        // <div className={styles.mainpago}>
        //     <ContextApp.Provider value={{valores, setValores}}> 
        //     <NavBar/> 
            <div className={styles.formulariopago}>
                
                <img  src={dotpattern} alt="dashboardlogo" className={styles.dotpattern}/>
                <img  src={reactangulo} alt="dashboardlogo" className={styles.rectangulo}/>
                <h1 className={styles.titulo}>Formulario de Pago</h1>
                                {/* <form className={styles.formulario}>
                    <label>Full Name
                    <input type="text" placeholder='Name' name="name" value={name} onChange={handleFormChange}/>
                    </label>
                    <br/>
                    <label>Amount
                    <input type="text" placeholder='Amount' name="amount" value={amount} onChange={handleFormChange} />
                    </label>
                    <br/>
                    <label>Payment Method
                    <select name="payment" value={payment} onChange={handleFormChange}>
                        <option value="credito">Credit Card</option>
                        <option value="debito">Debit Card</option>
                        <option value="gpay">Google Pay</option>
                        <option value="voucher">Voucher</option>
                    </select>
                    <br/>
                    </label>
                <input type="submit" className={styles.submit} 
                    onClick={() => {navigate("/revisardatos")}}
                    />
                   {submitting &&<div>Submtting Form...</div>}
                </form> */}
                <form className={styles.formulario} onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.shadow}>
                    <input type="text" placeholder='Email' {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/  })} className={styles.input}/>
                    {errors.email?.type === 'required' && <p className={styles.error}>This field is required</p>}
                    {errors.email?.type === 'pattern' && <p className={styles.error}>Incorrect Email</p>}
                    </label>
                    <br/>
                    <label>
                    <input type="text" placeholder='Amount' {...register("amount", { required: true, pattern: /^[0-9/b]+$/  })} className={styles.input}/>
                    {errors.amount?.type === 'required' && <p className={styles.error}>This field is required</p>}
                    {errors.amount?.type === 'pattern' && <p className={styles.error}>Incorrect amount</p>}
                    </label>
                    <br/>
                    <input type="submit" className={styles.submit} 
                    onClick={() => {navigate("/main/revisardatos")}}
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
