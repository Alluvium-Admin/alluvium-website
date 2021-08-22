import React from 'react'
import styles from '../styles/verification.module.scss'

const Verification = () => {
    return (
        <div className={ styles.verificationPopup }>
            <div className={ styles.closeBtn }></div>
            <div className={styles.alluvianData}>
                <div className={styles.alluvianImg}>
                    <img src={require("../public/assets/test.png")} alt=""/>
                </div>
                <div className={styles.alluvianDetails}>
                    <h2 className={styles.name}>Stanley Onwuka</h2>
                    <p className={styles.role}>Frontend Engineer</p>
                    <p className={styles.confirmation}><span>&#10004;</span> This person is an employee of Alluvium Labs &#x2122;</p>
                </div>
            </div>
            <div className={ styles.mask }></div>
        </div>
    )
}

export default Verification