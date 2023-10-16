/* eslint-disable react/prop-types */
// import { useEffect, useState } from 'react';
import styles from './leadBoard.module.css';

export function LeadBoard(props) {

    return (
        <div className={styles.leadBoard}>

            <div className={styles.thisMonthContainer}> 

                    <div className={styles.monthHeader}>
                        <span> {props.thisMonth} </span>
                    </div>

                    <div className={styles.monthResults}>
                        
                        <div className={styles.firstPlaceBar}>
                            <span> {props.thisMonthFirstPlace} </span>
                            <img src={"static/images/1PlaceBar.svg"} alt="First Place Bar"/>
                        </div>

                        <div className={styles.secondPlaceBar}>
                            <span> {props.thisMonthSecondPlace} </span>
                            <img src={"static/images/2PlaceBar.svg"} alt="Second Place Bar"/>
                        </div>

                        <div className={styles.thirdPlaceBar}>
                            <span> {props.thisMonthThirdPlace} </span>
                            <img src={"static/images/3PlaceBar.svg"} alt="Third Place Bar"/>
                        </div>

                    </div>

                </div>

                <div className={styles.lastMonthContainer}> 

                <div className={styles.monthHeader}>
                        <span> {props.lastMonth} </span>
                    </div>

                    <div className={styles.monthResults}>

                    <div className={styles.secondPlaceBar}>
                        <span> {props.lastMonthSecondPlace} </span>
                        <img src={"static/images/2PlaceBar.svg"} alt="Second Place Bar"/>
                    </div>
                        
                        <div className={styles.firstPlaceBar}>
                            <span> {props.lastMonthFirstPlace} </span>
                            <img src={"static/images/1PlaceBar.svg"} alt="First Place Bar"/>
                        </div>

                        <div className={styles.thirdPlaceBar}>
                            <span> {props.lastMonthThirdPlace} </span>
                            <img src={"static/images/3PlaceBar.svg"} alt="Third Place Bar"/>
                        </div>

                    </div>

                </div>

                <div className={styles.penultimateMonthContainer}> 

                <div className={styles.monthHeader}>
                        <span> {props.penultimateMonth} </span>
                    </div>

                    <div className={styles.monthResults}>

                    <div className={styles.thirdPlaceBar}>
                        <span> {props.penultimateMonthThirdPlace} </span>
                        <img src={"static/images/3PlaceBar.svg"} alt="Third Place Bar"/>
                    </div>

                        <div className={styles.secondPlaceBar}>
                            <span> {props.penultimateMonthFirstPlace} </span>
                            <img src={"static/images/2PlaceBar.svg"} alt="Second Place Bar"/>
                        </div>

                        <div className={styles.firstPlaceBar}>
                            <span> {props.penultimateMonthFirstPlace} </span>
                            <img src={"static/images/1PlaceBar.svg"} alt="First Place Bar"/>
                        </div>

                    </div>

                </div>

            </div>
    )
}