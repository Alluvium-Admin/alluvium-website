import React from 'react'
import Image from 'next/image'
import styles from '../styles/profile.module.scss'


export default function Profile({firstName,lastName,role,email,pictureLink}){
    return(
        <div className={styles.profile}>
            <div className={styles.profilePicture}>
                <img src={pictureLink} alt={`${firstName +" "+ lastName}`}/>
            </div>
            <div className={styles.details}>
                <p className={styles.fullname}>
                    <span className={styles.firstname}>{firstName}, </span>
                    <span className={styles.lastname}>{lastName}</span>
                </p>
                <p className={styles.role}>{role}</p>
                <p className={styles.email}>{email}</p>
            </div>
        </div>
    )
}