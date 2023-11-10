import '../global.css'
import { Header } from '../components/header.jsx';
import { ConfigForm } from '../components/configForm.jsx';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


export function Config() {

    const navigate = useNavigate();
    const [userData] = useState({});
    
    async function isLogged(){

        const { data: { user } } = await supabase.auth.getUser();
        userData.user = user
        
        if(userData.user == null) {
            navigate('/login')
        }
    } 

    isLogged();

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