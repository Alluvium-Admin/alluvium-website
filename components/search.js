import React from 'react';
import Image from 'next/image';
import styles from '../styles/search.module.scss';

export default function Search({theme}) {
    return(
        <div className={ theme === "dark" ? styles.searchDark : styles.search}>
            <div className={styles.searchInput}>
                <div className={styles.searchIcon}>
                    {
                        theme === "dark" ? <Image src="/assets/search_dark.svg" width={16} height={16}/> : <Image src="/assets/search.svg" width={16} height={16}/>
                    }
                   
                </div>
                <input type="text" placeholder="Search projects"/>
            </div>
            <div className={styles.searchResults}>

            </div>
        </div>
    )
}


export function MobileSearch({theme}) {
    return(
        <div className={ theme === "dark" ? styles.mobileSearchDark : styles.mobileSearch}>
            <div className={styles.searchInput}>
                <div className={styles.searchIcon}>
                    <Image src="/assets/search_dark.svg" width={16} height={16}/>
                </div>
                <input type="text" placeholder="Search projects"/>
            </div>
            <div className={styles.searchResults}>

            </div>
        </div>
    )
}