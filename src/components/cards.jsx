import styles from './cards.module.css';
import { SingleCard } from './singleCard.jsx';

export function Card() {
    return (
        <div className={styles.cards}>

            <div>
                <div className={styles.firstRowCards}>
                    <SingleCard  
                        userName = "Joao V."
                        points = "1300"
                        JornadaF1 = "20"
                        B2Status = "5"
                        B2Visa = "12"
                        EB3 = "02"
                        GreenCard = "01"
                        image="public/static/images/badge1.svg"
                    />
                    <SingleCard 
                        userName = "Rafael G."
                        points = "920"
                        JornadaF1 = "10"
                        B2Status = "5"
                        B2Visa = "9"
                        EB3 = "2"
                        GreenCard = "1"
                        image = "public/static/images/badge2.svg"
                    />
                    <SingleCard 
                        userName = "Carlos E."
                        points = "810"
                        JornadaF1 = "10"
                        B2Status = "5"
                        B2Visa = "12"
                        EB3 = "02"
                        GreenCard = "01"
                        image="public/static/images/badge3.svg"
                    />

                </div>
            </div>

            <div className={styles.secondRowCards}> 
        
            </div>

        </div>
    )
}