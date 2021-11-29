import React from 'react';
import styles from '../styles/testimonal.module.scss'

export default function Testimonal({ client }) {
    const { name, review, imgLink } = client

    return (
        <div className={styles.testimonalContainer}>
            <div className={styles.testimonalImg}>
                <img src={imgLink} alt={`${name}`}/>
            </div>
            <div className={styles.testimonalDesc}>
                <p className={styles.testimonalReview}>{ review }</p>
                <h4 className={styles.name}>{ name }</h4>
            </div>
        </div>
    )
}