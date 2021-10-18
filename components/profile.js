import React from 'react'
import styles from '../styles/profile.module.scss'


export default function Profile({alluvian}){
    const { firstName, lastName, role, email, imgUrl, dept } = alluvian;

    return (
        <div className={styles.profile}>
            <div className={styles.profilePicture}>
                <img src={imgUrl} alt={`${firstName +" "+ lastName}`}/>
            </div>
            <div className={styles.details}>
                <p className={styles.fullname}>
                    <span className={styles.firstname}>{firstName} </span>
                    <span className={styles.lastname}>{lastName}</span>
                </p>
                <p className={styles.role}>{role}</p>
                <p className={styles.dept}>{dept}</p>
                {/* <p className={styles.email}>{email}</p> */}
            </div>
        </div>
    )
}