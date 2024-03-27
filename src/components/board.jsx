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
             thisMonth = "February"
             lastMonth = "January"
             penultimateMonth = "December"

             thisMonthFirstPlace = "Alexia S."
             thisMonthSecondPlace = "Isabella"
             thisMonthThirdPlace = "Welson"

             lastMonthFirstPlace = "Alexia S."
             lastMonthSecondPlace = "Yolanda"
             lastMonthThirdPlace = "Ana Luisa S."

             penultimateMonthFirstPlace = "Welson S."
             penultimateMonthSecondPlace = "Alexia S."
             penultimateMonthThirdPlace = "Gabriela F."
             />
             
        </div>

        </div>
    )
} 