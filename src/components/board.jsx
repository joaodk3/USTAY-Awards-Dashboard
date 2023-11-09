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
             thisMonth = "October"
             lastMonth = "September"
             penultimateMonth = "August"

             thisMonthFirstPlace = "Alexia S."
             thisMonthSecondPlace = "Gabriela F."
             thisMonthThirdPlace = "Ana Luisa S."

             lastMonthFirstPlace = "Gabriela F."
             lastMonthSecondPlace = "Alexia S."
             lastMonthThirdPlace = "Ana Luisa S."

             penultimateMonthFirstPlace = "Gabriela F."
             penultimateMonthSecondPlace = "Alexia S."
             penultimateMonthThirdPlace = "Ana Luisa S."
             />
             
        </div>

        </div>
    )
} 