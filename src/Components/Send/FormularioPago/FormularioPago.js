import React, { useEffect, useState, createContext , useReducer} from 'react'
import { useForm} from "react-hook-form";
import styles from "./formulariopago.module.css";
import { useNavigate } from "react-router-dom";
import NavBar from '../../NavBar/NavBar';
import NavButton from '../../NavButton/NavButton';
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
        <div className={styles.mainpago}>
            <ContextApp.Provider value={{valores, setValores}}> 
            <NavBar/>
            <div className={styles.formulariopago}>
                <h1>Formulario de Pago</h1>
                <div className={styles.estilohome}><NavButton path = "/" text="Volver al Dashboard"/></div>
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
                    <label>Full Name
                    <input type="text" placeholder='Name' {...register("name", { required: true, pattern: /^[A-Za-z]+$/i  })}/>
                    {errors.name?.type === 'required' && <p className={styles.error}>This field is required</p>}
                    {errors.name?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
                    </label>
                    <br/>
                    <label>Amount
                    <input type="text" placeholder='Amount' {...register("amount", { required: true, pattern: /^[0-9/b]+$/  })} />
                    {errors.amount?.type === 'required' && <p className={styles.error}>This field is required</p>}
                    {errors.amount?.type === 'pattern' && <p className={styles.error}>Incorrect amount</p>}
                    </label>
                    <br/>
                    <label>Payment Method
                    <select {...register("pago")}>
                        <option value="credito">Credit Card</option>
                        <option value="debito">Debit Card</option>
                        <option value="gpay">Google Pay</option>
                        <option value="voucher">Voucher</option>
                    </select>
                    </label>
                    <br/>
                <input type="submit" className={styles.submit} 
                    onClick={() => {navigate("/revisardatos")}}
                    />
                   {submitting &&<div>Submtting Form...</div>}
                </form>
            </div>
            </ContextApp.Provider> 
        </div>
    )
}

export default FormularioPago
