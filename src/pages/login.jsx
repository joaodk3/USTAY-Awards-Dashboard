import '../global.css'
import { Header } from '../components/header.jsx';
import { LoginForm } from '../components/loginForm.jsx';

export function Login() {
    return (
        <div>
            <header>
                <nav>
                    <img src={"/static/images/logo.svg"} alt="USTAY logo" />
                </nav>
            </header>
    
            <div className="firstContainer">
                <Header />
            </div>

            <div className='secondContainer'>
                <LoginForm /> 
            </div>
      </div>
    )
}