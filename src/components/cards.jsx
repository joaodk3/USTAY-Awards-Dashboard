import styles from './cards.module.css';
import { SingleCard } from './singleCard.jsx';

export function Card() {
    return (

        <div className={styles.cards}>
            
            <div className={styles.cardHeader}>
                <h2> All Time Ranking </h2>
                <span> 🏆 </span>
            </div>

            <div className={styles.cardsContent}>
                <div className={styles.firstRowCards}>
                    <SingleCard  
                        userName = "Gabriela F."
                        points = "506"
                        College = "0"
                        Graduate = "2"
                        ESL_CC = "5"
                        StatusChange = "4"
                        Visa = "0"
                        EB3 = "0"
                        GreenCard = "0"
                        image= {"static/images/badge1.svg"}
                    />
                    <SingleCard 
                        userName = "Alexia S."
                        points = "278"
                        College = "0"
                        Graduate = "0"
                        ESL_CC = "4"
                        StatusChange = "5"
                        Visa = "0"
                        EB3 = "0"
                        GreenCard = "0"
                        image = {"static/images/badge2.svg"}
                    />
                    <SingleCard 
                        userName = "Isabella S."
                        points = "103"
                        College = "0"
                        Graduate = "0"
                        ESL_CC = "2"
                        StatusChange = "2"
                        Visa = "0"
                        EB3 = "0"
                        GreenCard = "0"
                        image= {"static/images/badge3.svg"}
                    />

                </div>

            <div className={styles.secondRowCards}> 

                <SingleCard  
                    userName = "Ana Luisa S."
                    points = "60"
                    College = "0"
                    Graduate = "0"
                    ESL_CC = "1"
                    StatusChange = "1"
                    Visa = "0"
                    EB3 = "0"
                    GreenCard = "0"
                    image= {"static/images/badge0.svg"}
                />

                <SingleCard  
                    userName = "Joyce P."
                    points = "60"
                    College = "0"
                    Graduate = "0"
                    ESL_CC = "1"
                    StatusChange = "1"
                    Visa = "0"
                    EB3 = "0"
                    GreenCard = "0"
                    image= {"static/images/badge0.svg"}
                />

                <SingleCard  
                    userName = "Welson S."
                    points = "20"
                    College = "0"
                    Graduate = "0"
                    ESL_CC = "0"
                    StatusChange = "1"
                    Visa = "0"
                    EB3 = "0"
                    GreenCard = "0"
                    image= {"static/images/badge0.svg"}
                />

            </div>

            <div className={styles.thirdRowCards}> 

                <SingleCard  
                    userName = "Raisa B."
                    points = "20"
                    College = "0"
                    Graduate = "0"
                    ESL_CC = "0"
                    StatusChange = "1"
                    Visa = "0"
                    EB3 = "0"
                    GreenCard = "0"
                    image= {"static/images/badge0.svg"}
                />

                <SingleCard  
                    userName = "Talita"
                    points = "10"
                    College = "0"
                    Graduate = "0"
                    ESL_CC = "0"
                    StatusChange = "0"
                    Visa = "1"
                    EB3 = "0"
                    GreenCard = "0"
                    image= {"static/images/badge0.svg"}
                />

            </div>

            </div>

        </div>

        //Talita, Raisa B., Ana Luisa S., Joyce P., Welson S. 
    )
}