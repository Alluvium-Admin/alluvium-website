import React from 'react';
import Image from 'next/image';
import styles from '../styles/search.module.scss';

export default function Search() {
    return(
        <div className={styles.search}>
            <div className={styles.searchInput}>
                <div className={styles.searchIcon}>
                    <Image src="/assets/search.svg" width={14} height={14.69}/>
                </div>
                <input type="text" placeholder="Search projects"/>
            </div>
            <div className={styles.searchResults}>

            </div>
        </div>
    )
}