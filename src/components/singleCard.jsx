/* eslint-disable react/prop-types */
import styles from './singleCard.module.css';

export function SingleCard(props) {
    return (
        <div className={styles.row}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3> {props.userName} </h3>
                    <span> ${props.points} </span>
                    <img src={props.image} />
                </div>

                <div className={styles.services}>
                    <div>
                        <span> Status Change </span> 
                        <span> {props.StatusChange} </span>
                    </div>

                    <div>
                        <span> ESL and CC </span> 
                        <span> {props.ESL_CC} </span>
                    </div>

                    <div>
                        <span> Undergraduate </span> 
                        <span> {props.College} </span>
                    </div>

                    <div>
                        <span> Graduate </span> 
                        <span> {props.Graduate} </span>
                    </div>

                    <div>
                        <span> Visa </span>
                        <span> {props.Visa} </span>
                    </div>

                    <div>
                        <span> EB3 </span> 
                        <span> {props.EB3} </span>
                    </div>

                    <div>
                        <span> Green Card </span> 
                        <span> {props.GreenCard} </span>
                    </div>

                    <div>
                        <span> RFE </span> 
                        <span> {props.RFE} </span>
                    </div>

                </div>
            </div>
        </div>
    )
}