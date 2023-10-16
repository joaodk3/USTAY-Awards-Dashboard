import styles from './board.module.css';
import { LeadBoard } from './leadBoard.jsx';

export function Board() {
    return (
        <div>

        <div className= {styles.boardHeader}>
            <header>
                <div className={styles.boardHeaderContent}>
                    <img src="./src/assets/medal.svg" alt="Small red medal"/>
                    <h2> <strong>Lead Board</strong> of last three months</h2>
                </div>
            </header>
        </div>

        <div>
            <LeadBoard
             thisMonth = "October"
             lastMonth = "September"
             penultimateMonth = "August"

             thisMonthFirstPlace = "Joao V."
             thisMonthSecondPlace = "Rafael G."
             thisMonthThirdPlace = "Carlos E."

             lastMonthFirstPlace = "Rafael G."
             lastMonthSecondPlace = "Joao V."
             lastMonthThirdPlace = "Carlos E."

             penultimateMonthFirstPlace = "Carlos E."
             penultimateMonthSecondPlace = "Rafael G."
             penultimateMonthThirdPlace = "Joao V."
             />
             
        </div>

        </div>
    )
} 