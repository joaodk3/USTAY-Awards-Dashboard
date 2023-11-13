import styles from './configForm.module.css';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

export function ConfigForm() {

  const navigate = useNavigate();
  const [fetchError, setFectchError] = useState("");
  const [salesData, setSalesData] = useState([]); 
  const [names, setNames] = useState([]);
  const [dates, setDates] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  
  //Retrieve Sales from database
  useEffect(() => {
    getNames();
  }, [])
  
  async function getNames() {
    
    try {
      let { data: sales, error } = await supabase
      .from('sales')
      .select('name')
      .eq('date', 'October-23')
      .order('name');
      
      if(error) throw error;

      if(sales != null) {
        setNames(sales);
      }

    } catch (error) {
      alert(error.message);
    }
  }


  // Retreive all dates
  useEffect(() => {
    getDate()
  }, []);

  async function getDate() {
    try {

      let { data: sales, error } = await supabase
      .from('sales')
      .select('date')

      if(error) throw error;

      if(sales != null) {
        setDates(sales);
      }

    } catch (error) {
      alert(error.message);
    }
  }

  //Set unique dates to be used on the dropdown date filter
  const uniqueDates = Array.from(new Set(dates.map(date => date.date)));


  //Monitor the state of the dropdown (initially read it, after update it)
  const [dropdownValue, setDropdownValue] = useState({});

  function handleChangeDrop(event) {
      setDropdownValue({
              value: event.target.value
            })
  }

  //Retrieve Sales data to be used on the specific dropdown value filter
  useEffect(() => {
    getSales();
  }, [dropdownValue])
  
  async function getSales() {
    
    try {
      let { data: sales, error } = await supabase
      .from('sales')
      .select('*')
      .eq('date', dropdownValue.value)
      .order('name')
      
      if(error) throw error;

      if(sales != null) {
        setSalesData(sales);
      }

    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getTotalAmount();
  }, [])

  async function getTotalAmount() {
    try {

      const { data, error } = await supabase.rpc('get_total_sales')
      

      if(error) throw error;

      if(data != null) {
        setTotalAmount(data);
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
  
  async function changeViewMode() {
    navigate('/configEdit')
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
                  </div>

                  <div>
                    <select onChange={handleChangeDrop}>
                      <option name='default' key='defaultOption' value='default'> Date Choice </option>
                      {uniqueDates.map((date, index) =>
                      <option name='value' key={date[index]} value={date}> {date} </option>
                      )};
                    </select>
                    <img src='../static/images/dropdown.svg'/>
                  </div>

                  <div>
                    <p> Valor Total </p>
                  </div>

                </div>

                <div className = {styles.tableContentData}>

                    <div className={styles.col1}>
                    
                      {names.map((n) => {
                        return (
                          <div key={n.id}>
                            <p> 👤 {n.name} </p>
                          </div>
                        )
                      })}

                    </div>

                    <div className={styles.col2}>

                    {salesData.map((s) => {
                          
                          if(dropdownValue.value !== 'default') {
                            return (
                                <div key={s.id}>
                                  <p> 💸 ${s.month_comission} </p>
                                </div>
                              )
                          } else {
                              return (
                                <div key={s.id}>
                                  <p> 💸 $0 </p>
                                </div>
                              )
                          }
                    })}

                    </div>  

                    <div className={styles.col3}>
                    
                      {totalAmount.map((s) => {

                            if(dropdownValue.value !== 'default') {
                            return (
                                <div key={s.id}>
                                  <p> 💰 ${s.total_sales} </p>
                                </div>
                              )
                            } else {
                              return (
                                <div key={s.id}>
                                  <p> 💰 $0 </p>
                                </div>
                              )
                            }
                      })}

                    </div>

                </div>

              <div className={styles.buttons}>

                <button onClick={logOut}
                id={styles.btnLogOut}> Log out </button> 

                <button onClick={changeViewMode}
                id={styles.btnEditMode}> Edit Mode </button>

              </div>

          </div>

      </div>

      </div>
      
    )
}