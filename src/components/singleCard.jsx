/* eslint-disable react/prop-types */
import styles from './singleCard.module.css';

export function SingleCard(props) {
    return (
        <div className={styles.row}>
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3> {props.userName} </h3>
                    <span> {props.points}pts </span>
                    <img src={props.image} />
                </div>

                <div className={styles.services}>
                    <div>
                        <span> Jornada F1 </span> 
                        <span> {props.JornadaF1} </span>
                    </div>

                    <div>
                        <span> B2 Status </span> 
                        <span> {props.B2Status} </span>
                    </div>

                    <div>
                        <span> B2 Visa </span> 
                        <span> {props.B2Visa} </span>
                    </div>

                    <div>
                        <span> EB3 </span> 
                        <span> {props.EB3} </span>
                    </div>

                    <div>
                        <span> Green Card </span> 
                        <span> {props.GreenCard} </span>
                    </div>

                </div>
            </div>
        </div>
    )
}