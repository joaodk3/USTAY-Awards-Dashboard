import styles from './header.module.css';

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
                    <img src="public/static/images/vector.svg" alt="Icone seta para direita"/> 
                    <p> Others </p>               
                </div>

                <button type="button"> 
                    Admin
                </button>

            </div>

        </div>
    )
}