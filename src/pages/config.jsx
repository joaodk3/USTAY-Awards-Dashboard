import '../global.css'
import { Header } from '../components/header.jsx';
import { ConfigForm } from '../components/configForm.jsx';

export function Config() {
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
                <ConfigForm /> 
            </div>
    </div>
    )
}