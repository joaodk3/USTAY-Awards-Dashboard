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
            january: {
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
            userName: "Alexia S.",
            allTime: {
                points: "2046.00",
                College: "0",
                Graduate: "0",
                ESL_CC: "19",
                StatusChange: "23",
                Visa: "3",
                EB3: "0",
                GreenCard: "1",
                RFE: "1",
                image: "",
            },
            january: {
                points: "730.00",
                College: "0",
                Graduate: "0",
                ESL_CC: "7",
                StatusChange: "9",
                Visa: "1",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        },

        {
            userName: "Isabella S", 
            allTime: {
                points: "123.50",
                College: "0",
                Graduate: "0",
                ESL_CC: "2",
                StatusChange: "3",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            january: {
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
            userName: "Ana Luisa S.",
            allTime: {
                points: "100",
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
            january: {
                points: "40",
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
            userName: "Joyce P.",
            allTime: {
                points: "100",
                College: "0",
                Graduate: "0",
                ESL_CC: "1",
                StatusChange: "3",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            }, 
            january: {
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
        userName: "Welson S.",
        allTime: {
            points: "260",
            College: "0",
            Graduate: "0",
            ESL_CC: "0",
            StatusChange: "3",
            Visa: "0",
            EB3: "1",
            GreenCard: "0",
            RFE: "0",
            image: "",
        },
        january: {
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
            january: {
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
            january: {
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
            january: {
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
                points: "80",
                College: "0",
                Graduate: "0",
                ESL_CC: "0",
                StatusChange: "4",
                Visa: "0",
                EB3: "0",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            january: {
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
            january: {
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
            userName: "Yolanda",
            allTime: {
                points: "260",
                College: "0",
                Graduate: "0",
                ESL_CC: "1",
                StatusChange: "1",
                Visa: "0",
                EB3: "1",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
            january: {
                points: "260",
                College: "0",
                Graduate: "0",
                ESL_CC: "1",
                StatusChange: "1",
                Visa: "0",
                EB3: "1",
                GreenCard: "0",
                RFE: "0",
                image: "",
            },
        }
    ];

    const sortedCardData = cardData.slice().sort((a, b) => {
            const pointsA = rankingOption === 'All Time' ? a.allTime.points : a.january.points;
            const pointsB = rankingOption === 'All Time' ? b.allTime.points : b.january.points;
            return pointsB - pointsA;
        }
    );


    //image handler
    sortedCardData.forEach((card, index) => {
        if (index === 0) {
            card.allTime.image = 'static/images/badge1.svg';
            card.january.image = 'static/images/badge1.svg';
        } else if (index === 1) {
            card.allTime.image = 'static/images/badge2.svg';
            card.january.image = 'static/images/badge2.svg';
        } else if (index === 2) {
            card.allTime.image = 'static/images/badge3.svg';
            card.january.image = 'static/images/badge3.svg';
        } else {
            card.allTime.image = 'static/images/badge0.svg';
            card.january.image = 'static/images/badge0.svg';
        }
    });

    return (

        <div className={styles.cards}>
            
            <div className={styles.cardHeader}>
                <h2> {rankingOption === 'All Time' ? 'All Time Raking' : 'January Ranking'} </h2>
                <span> 🏆 </span>

                <div className={styles.option}>
                    <select id='rankingOption' onChange={handleRakingOption}> 
                        <option value='All Time'> All Time </option>
                        <option value='January-23'> January-23 </option>
                    </select>
                    <img src='../static/images/dropdown.svg'/>
                </div>
            </div>

            <div className={styles.cardsContent}>
                {sortedCardData.map((card, index) => (
                    <SingleCard
                    key={index}
                    userName={card.userName}
                    points={rankingOption === 'All Time' ? card.allTime.points : card.january.points}
                    College={rankingOption === 'All Time' ? card.allTime.College : card.january.College}
                    Graduate={rankingOption === 'All Time' ? card.allTime.Graduate : card.january.Graduate}
                    ESL_CC={rankingOption === 'All Time' ? card.allTime.ESL_CC : card.january.ESL_CC}
                    StatusChange={rankingOption === 'All Time' ? card.allTime.StatusChange : card.january.StatusChange}
                    Visa={rankingOption === 'All Time' ? card.allTime.Visa : card.january.Visa}
                    EB3={rankingOption === 'All Time' ? card.allTime.EB3 : card.january.EB3}
                    GreenCard={rankingOption === 'All Time' ? card.allTime.GreenCard : card.january.GreenCard}
                    RFE={rankingOption === 'All Time' ? card.allTime.RFE : card.january.RFE}
                    image={rankingOption === 'All Time' ? card.allTime.image : card.january.image}
                    />
                    ))}
            </div>
        
        </div>
    )
}