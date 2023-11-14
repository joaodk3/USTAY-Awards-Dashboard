import styles from './loginForm.module.css';
import { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginForm() {

    const navigate = useNavigate();
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

        let userEmail = formData.email;
        let userPassword = formData.password; 
        const notifyBad = () => toast.error('Bad Email or Password', {
            theme: 'danger',
        });

            event.preventDefault();

            try {
            // eslint-disable-next-line no-unused-vars
            const { data, error } = await supabase.auth.signInWithPassword({
                email: userEmail,
                password: userPassword
            })

            if(data) {
                navigate('/config');
            }

            if(error) {
                notifyBad();
                navigate('/login');
            }

        } catch (error) {
            alert(error)
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
                                <input className={styles.submit} type='submit' id='submitForm' />
                        </form>
                    </div>
                </div> 
                <ToastContainer />
            </div>
    )
}