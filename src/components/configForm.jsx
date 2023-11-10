import styles from './configForm.module.css';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";

export function ConfigForm() {

    const navigate = useNavigate();

    async function logOut() {
        // eslint-disable-next-line no-unused-vars
        const { error } = await supabase.auth.signOut()
        navigate('/')
    }

    return (
        <div>
            <button onClick={logOut}> Log out </button>
        </div>
    )
}