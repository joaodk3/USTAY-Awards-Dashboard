import styles from './configForm.module.css';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export function ConfigForm() {

  const [fetchError, setFetchError] = useState(null)
  const [partners, setPartners] = useState(null)

  
  async function getData() {
    let { data: partnersData, error } = await supabase
    .from('partners')
    .select('*')
    console.log(JSON.stringify(partnersData));
  }

  getData()
      

    const navigate = useNavigate();

    async function logOut() {
        // eslint-disable-next-line no-unused-vars
        const { error } = await supabase.auth.signOut()
        navigate('/')
    }

    return (

        <div>
            <div className = {styles.table}>
              <h2> Hello Magda, I am still constructing this part of the website, be patient 🐸 </h2>
            </div>
            <button onClick={logOut}> Log out </button>
        </div>
    )
}