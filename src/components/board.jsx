import styles from './board.module.css';
import { LeadBoard } from './leadBoard.jsx';

export function Board() {
    return (
        <div>

        <div className= {styles.boardHeader}>
            <header>
                <div className={styles.boardHeaderContent}>
                    <img src={"/static/images/medal.svg"} alt="Small red medal"/>
                    <h2> <strong>Lead Board</strong> of last three months</h2>
                </div>
            </header>
        </div>

        <div>
            <LeadBoard
             thisMonth = "January"
             lastMonth = "December"
             penultimateMonth = "November"

             thisMonthFirstPlace = "Alexia S."
             thisMonthSecondPlace = "Yolanda"
             thisMonthThirdPlace = "Ana Luisa S."

             lastMonthFirstPlace = "Welson S."
             lastMonthSecondPlace = "Alexia S."
             lastMonthThirdPlace = "Gabriela F."

             penultimateMonthFirstPlace = "Alexia S."
             penultimateMonthSecondPlace = "Gabriela F."
             penultimateMonthThirdPlace = "Ana Luisa S."
             />
             
        </div>

        </div>
    )
} 