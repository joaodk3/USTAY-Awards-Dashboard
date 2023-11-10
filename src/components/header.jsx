import styles from './header.module.css';
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className={styles.headerContainer}>
            
            <div className={styles.headerLeft}>
                <header>
                    <h1> USTAY Team&apos;s <strong>Score Ranking</strong></h1>
                </header>
            </div>

            <div className={styles.headerRight}> 
                <div>
                    <img src={"static/images/Vector.svg"} alt="Icone seta para direita"/> 
                    <li> <Link to='/'> Dashboard </Link> </li>               
                </div>
                    <li> <Link to="/login"> Admin </Link> </li>
            </div>

        </div>
    )
}