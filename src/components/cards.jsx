import {useState} from 'react';
import styles from './cards.module.css';
import { SingleCard } from './singleCard.jsx';

export function Card() {

    // ranking option handler
    const [rankingOption, setRankingOption] = useState('All Time');

    const handleRakingOption = (event) => { 
        setRankingOption(event.target.value);
    };

    // cards data handler
    //updated month: december
    const cardData = [
        {
            userName: "Gabriela F.",
            allTime: {
              points: "834.25",
              College: "0",
              Graduate: "2",
              ESL_CC: "8",
              StatusChange: "9",
              Visa: "2",
              EB3: "0",
              GreenCard: "0",
              RFE: "0",
              image: "",
            },
            december: {
              points: "25.00",
              College: "0",
              Graduate: "0",
              ESL_CC: "0",
              StatusChange: "1",
              Visa: "0",
              EB3: "0",
              GreenCard: "0",
              RFE: "0",
              image: "",
            },
        },
          
        {
            userName: "Alexia S.",
            allTime: {
                points: "1316.00",
                College: "0",
                Graduate: "0",
                ESL_CC: "12",
                StatusChange: "14",
                Visa: "2",
                EB3: "0",
                GreenCard: "1",
                RFE: "1",
                image: "",
            },
            december: {
                points: "172.50",
                College: "0",
                Graduate: "0",
                ESL_CC: "2",
                StatusChange: "2",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        },

        {
            userName: "Isabella S", 
            allTime: {
                points: "103.50",
                College: "0",
                Graduate: "0",
                ESL_CC: "2",
                StatusChange: "2",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            december: {
                points: "0",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "0", 
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
          },
        },

        {
            userName: "Ana Luisa S.",
            allTime: {
                points: "60",
                College: "0",
                Graduate: "0",
                ESL_CC: "1",
                StatusChange: "1",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            december: {
                points: "0",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "0",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
        },
        },

        {
            userName: "Joyce P.",
            allTime: {
                points: "80",
                College: "0",
                Graduate: "0",
                ESL_CC: "1",
                StatusChange: "2",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            }, 
            december: {
                points: "0",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "0",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        },

        {
        userName: "Welson S.",
        allTime: {
            points: "240",
            College: "0",
            Graduate: "0",
            ESL_CC: "0",
            StatusChange: "2",
            Visa: "0",
            EB3: "1",
            GreenCard: "0",
            RFE: "0",
            image: "",
        },
        december: {
            points: "220",
            College: "0",
            Graduate: "0",
            ESL_CC: "0",
            StatusChange: "1",
            Visa: "0",
            EB3: "1",
            GreenCard: "0",
            RFE: "0",
            image: "",
        },
        },

        {
            userName: "Raisa B.",
            allTime: {
                points: "20",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "1",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            december: {
                points: "0",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "0",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        },

        {
            userName: "Talita",
            allTime: {
                points: "10",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "0",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            december: {
                points: "0",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "0",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        },

        {
            userName: "Beatriz R.",
            allTime: {
                points: "90",
                College: "0",
                Graduate: "0",
                ESL_CC: "1",
                StatusChange: "2",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            december: {
                points: "0",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "0",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        },

        {
            userName: "Jessica A.",
            allTime: {
                points: "40",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "2",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            december: {
                points: "20",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "1",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        },

        {
            userName: "Larissa M.",
            allTime: {
                points: "20",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "2",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            december: {
                points: "20",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "1",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        }
    ];

    const sortedCardData = cardData.slice().sort((a, b) => {
            const pointsA = rankingOption === 'All Time' ? a.allTime.points : a.december.points;
            const pointsB = rankingOption === 'All Time' ? b.allTime.points : b.december.points;
            return pointsB - pointsA;
        }
    );


    //image handler
    sortedCardData.forEach((card, index) => {
        if (index === 0) {
            card.allTime.image = 'static/images/badge1.svg';
            card.december.image = 'static/images/badge1.svg';
        } else if (index === 1) {
            card.allTime.image = 'static/images/badge2.svg';
            card.december.image = 'static/images/badge2.svg';
        } else if (index === 2) {
            card.allTime.image = 'static/images/badge3.svg';
            card.december.image = 'static/images/badge3.svg';
        } else {
            card.allTime.image = 'static/images/badge0.svg';
            card.december.image = 'static/images/badge0.svg';
        }
    });

    return (

        <div className={styles.cards}>
            
            <div className={styles.cardHeader}>
                <h2> {rankingOption === 'All Time' ? 'All Time Raking' : 'December Ranking'} </h2>
                <span> 🏆 </span>

                <div className={styles.option}>
                    <select id='rankingOption' onChange={handleRakingOption}> 
                        <option value='All Time'> All Time </option>
                        <option value='December-23'> December-23 </option>
                    </select>
                    <img src='../static/images/dropdown.svg'/>
                </div>
            </div>

            <div className={styles.cardsContent}>
                {sortedCardData.map((card, index) => (
                    <SingleCard
                    key={index}
                    userName={card.userName}
                    points={rankingOption === 'All Time' ? card.allTime.points : card.december.points}
                    College={rankingOption === 'All Time' ? card.allTime.College : card.december.College}
                    Graduate={rankingOption === 'All Time' ? card.allTime.Graduate : card.december.Graduate}
                    ESL_CC={rankingOption === 'All Time' ? card.allTime.ESL_CC : card.december.ESL_CC}
                    StatusChange={rankingOption === 'All Time' ? card.allTime.StatusChange : card.december.StatusChange}
                    Visa={rankingOption === 'All Time' ? card.allTime.Visa : card.december.Visa}
                    EB3={rankingOption === 'All Time' ? card.allTime.EB3 : card.december.EB3}
                    GreenCard={rankingOption === 'All Time' ? card.allTime.GreenCard : card.december.GreenCard}
                    RFE={rankingOption === 'All Time' ? card.allTime.RFE : card.december.RFE}
                    image={rankingOption === 'All Time' ? card.allTime.image : card.december.image}
                    />
                    ))}
            </div>
        
        </div>
    )
}