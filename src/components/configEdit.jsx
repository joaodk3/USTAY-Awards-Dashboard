import styles from './configEdit.module.css';
import { supabase } from '../client';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';


export function ConfigEditForm() {

    const [names, setNames] = useState([]);
    const [tableInput, setTableInput] = useState({
        name: '',
        month:'',
        status_change: '',
        esl_or_cc: '',
        undergraduate: '',
        graduate: '',
        visa: '',
        green_card: '',
        eb3: '',
        month_comission: ''
    })

    function handleChange(event) {
        setTableInput((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }



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

    async function submitData() {

        let name = tableInput.name;
        let date = tableInput.month;
        let status_change = tableInput.status_change;
        let esl_cc = tableInput.esl_or_cc;
        let undergraduate = tableInput.undergraduate;
        let graduate = tableInput.graduate;
        let visa = tableInput.visa;
        let gc = tableInput.green_card;
        let eb3 = tableInput.eb3;
        let month_comission = tableInput.month_comission;
        
        let errorMessage = 'Please, insert values for: '
        let isEmpty = false;

        //Optimze this horible code
        if(name.length == '') {
            errorMessage += 'Name ';
            isEmpty = true;
        }

        if(date.length == '') {
            errorMessage += 'Date ';
            isEmpty = true;
        }

        if(status_change.length == '') {
            errorMessage += 'Status Change ';
            isEmpty = true;
        }

        if(esl_cc.length == '') {
            errorMessage += 'Esl or CC ';
            isEmpty = true;
        }

        if(undergraduate.length == '') {
            errorMessage += 'Undergraduate ';
            isEmpty = true;
        }

        if(graduate.length == '') {
            errorMessage += 'Graduate ';
            isEmpty = true;
        }

        if(visa.length == '') {
            errorMessage += 'Visa ';
            isEmpty = true;
        }

        if(gc.length == '') {
            errorMessage += 'Green Card ';
            isEmpty = true;
        }

        if(eb3.length == '') {
            errorMessage += 'EB3 ';
            isEmpty = true;
        }

        if(month_comission.length == '') {
            errorMessage += 'Month Commission';
            isEmpty = true; 
        }
        
        if(isEmpty) {
            alert(errorMessage);
        } else {
        
        const { error } = await supabase
        .from('sales')
        .insert({name: tableInput.name,
        date: tableInput.month,
        status_change: tableInput.status_change,
        esl_cc: tableInput.esl_or_cc,
        undergraduate: tableInput.undergraduate,
        graduate: tableInput.graduate,
        visa: tableInput.visa,
        gc: tableInput.green_card,
        eb3: tableInput.eb3,
        month_comission: tableInput.month_comission })

        if (error) {
            console.log(error);
        } else {
            alert('Successfully inserted data')
        }

    }
}

    console.log(tableInput);

    return (
        <div>

            <div className={styles.editForm}>
            
            <form>

                <div className={styles.partnerSelect}>
                    <label> Select Partner Name: </label>
                    <select id='partner' onChange={handleChange} name='name'>
                        <option> Name </option>
                        {names.map((n) => {
                            return (
                                <option key={n.id} value={n.name}> {n.name} </option>
                            )
                        })}
                    </select>
                </div>

                <div className={styles.partnerValues}>

                    <div className={styles.textValue}>
                        <label> Month: 
                        <input type="text" name='month' placeholder='October-23' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.numberValue}>
                        <label> Status Change:
                            <input type='number'name='status_change' onChange={handleChange} />
                        </label>
                    </div>

                    <div className={styles.numberValue}>
                        <label> ESL or CC:
                            <input type='number' name='esl_or_cc' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.numberValue}>
                        <label> Undergraduate:                            
                            <input type='number' name='undergraduate' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.numberValue}>
                        <label> Graduate: 
                            <input type='number' name='graduate' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.numberValue}>
                        <label> Visa:
                            <input type='number'name='visa' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.numberValue}>
                        <label> Green Card:
                            <input type='number'name='green_card' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.numberValue}>
                        <label> EB3:
                            <input type='number'name='eb3' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.numericValue}>
                        <label> Month Commission:
                            <input placeholder='Ex: 290.63' name='month_comission' onChange={handleChange}/>
                        </label>
                    </div>

                    <div className={styles.submit}>
                        <input type='submit' value='Submit' onClick={submitData} />
                    </div>

                </div>

                        
            </form>

            </div>


        </div>
    )
}