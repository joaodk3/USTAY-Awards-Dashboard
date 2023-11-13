import styles from './loginForm.module.css';
import { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

export function LoginForm() {

    const navigate = useNavigate();
    const notify = () => toast("Login Successful");

    const [formData, setFormData] = useState({
        email: '',
        password:''
    })

    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    //fix regex
        async function handleSubmit(event) {

        let errorMessage = 'Please provide a valid information for the following field(s):  '
        let boolError = false;
        let userEmail = formData.email;
        let userPassword = formData.password; 
        
        if(!userEmail.length > 0) {
            errorMessage += "Email ";
            boolError = true;
        }
        
        if (!userPassword.length > 0) {
            errorMessage += "Password";
            boolError = true;
        }
        
        if(boolError) {
            alert(errorMessage);
        } else {

            event.preventDefault();

            try {
            // eslint-disable-next-line no-unused-vars
            const { data, error } = await supabase.auth.signInWithPassword({
                email: userEmail,
                password: userPassword
            })

            if(data) {
                navigate("/config")
                const {data: { session },} = await supabase.auth.getSession()
                console.log(session);
            }

        } catch (error) {
            alert(error)
        }
    
        }
    }

    return (  
            <div className = {styles.loginContainer}>

                <div className= {styles.loginCard}>
                    <div className = {styles.loginHeader}>
                        <h1> 🚀 Log in to your account </h1>
                    </div>

                    <div className = {styles.loginContent}>
                        <form className = {styles.loginForm} onSubmit={handleSubmit}>
                                <input className={styles.input} type='email' id='loginEmail' placeholder='Email' name='email' onChange={handleChange}/>
                                <input className={styles.input} type='password' id='loginPassword' placeholder='Password' name='password' onChange={handleChange}/>
                                <input className={styles.submit} type='submit' id='submitForm' onClick={notify} />
                        </form>
                    </div>
                </div> 
            </div>
    )
}