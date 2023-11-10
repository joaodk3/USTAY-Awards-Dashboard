import styles from './loginForm.module.css';
import { Link } from "react-router-dom";

export function LoginForm() {
    return (  
            <div className = {styles.loginContainer}>

                <div className= {styles.loginCard}>
                    <div className = {styles.loginHeader}>
                        <h1> 🚀 Log in to your account </h1>
                    </div>

                    <div className = {styles.loginContent}>
                        <form className = {styles.loginForm}>
                                <input type='email' id='loginEmail' placeholder='Email'/>
                                <input type='password' id='loginPassword' placeholder='Password' />
                                <input className={styles.submit} type='submit' id='submitForm' value='Log in' />
                        </form>
                    </div>
                </div> 
            </div>
    )
}