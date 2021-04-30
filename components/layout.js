import React from 'react';
import Footer from './footer';
import styles from '../styles/layout.module.scss'
import Navigation from './navigation';

export default function Layout ({children}) {
    return(
        <div className={styles.layout}>
            {children}
            <Footer/>
        </div>
    )
}