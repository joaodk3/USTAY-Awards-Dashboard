import styles from './configForm.module.css';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export function ConfigForm() {

  const navigate = useNavigate();
  const [fetchError, setFectchError] = useState("");
  const [sales, setSales] = useState([]); 

  //Retrieve Sales from database
  useEffect( () => {
    getSales();
  }, [])

  async function getSales() {
    try { 
      let { data: sales, error } = await supabase
      .from('sales')
      .select('*');
        
      if(error) throw error;
      if(sales !=null) {
        setSales(sales);
      }

    } catch (error) {
      alert(error.message);
    }
  }

  // Handle Buttons Events
  async function logOut() {
    // eslint-disable-next-line no-unused-vars
    const { error } = await supabase.auth.signOut()
    navigate('/')
    }

    return (

        <div>
            <div className = {styles.table}>

              <div className ={styles.tableHeader}> 
                <div className ={styles.tableHeaderContent}>
                  <h2> Partners Sales </h2>
                  <hr />
                </div>
                <div className ={styles.tableHeaderSpan}>
                  <span> View Mode </span>
                </div>
              </div>

              <div className ={styles.tableContent}>
                <div className = {styles.tableContentHeader}>
                  <div>
                    <p> Name </p>
                    <img src='../static/images/dropdown.svg'/>
                  </div>

                  <div>
                    <select>
                      <option value='october-23'> October-23 </option>
                      <option value='september-23'> September-23 </option>
                      <option value='august-23'> August-23 </option>
                    </select>
                    <img src='../static/images/dropdown.svg'/>
                  </div>

                  <div>
                    <p> Valor Total </p>
                    <img src='../static/images/dropdown.svg'/>
                  </div>

                </div>

                <div className = {styles.tableContentData}>

                <div className = {styles.tableContentDataCol1}>
                  {sales.map((user) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <div>
                          <p> 👤 {user.name} </p>
                        </div>
                      )
                  })}

                </div>

                <div className = {styles.tableContentDataCol2}>
                  {sales.map((user) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div>
                        <p> 💸 ${user.month_comission} </p>
                      </div>
                    )
                  })}
                </div>

                <div className = {styles.tableContentDataCol3}>
                  {sales.map((user) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <div>
                        <p> 💰 ${user.total_sales} </p>
                      </div>
                    )
                  })}
                </div>

                </div>

              </div>

              <div className={styles.buttons}>

                <button onClick={logOut}> Log out </button> 
                <button> Save </button> 
                <button> Edit Mode </button>

              </div>
              
            </div>
  
        </div>
    )
}