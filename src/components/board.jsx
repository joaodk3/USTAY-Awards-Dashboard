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
             thisMonth = "September"
             lastMonth = "August"
             penultimateMonth = "July"

             thisMonthFirstPlace = "Gabriela F."
             thisMonthSecondPlace = "Alexia S."
             thisMonthThirdPlace = "Ana Luisa S."

             lastMonthFirstPlace = "Gabriela F."
             lastMonthSecondPlace = "Alexia S."
             lastMonthThirdPlace = "Ana Luisa S."

             penultimateMonthFirstPlace = "Isabella S."
             penultimateMonthSecondPlace = "Alexia S."
             penultimateMonthThirdPlace = "Jacqueline A."
             />
             
        </div>

        </div>
    )
} 