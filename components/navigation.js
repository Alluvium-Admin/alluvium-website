import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navigation.module.scss';
import Search from "./search";


export default function Navigation ({theme}) {
    return(
        <div className={styles.navigationMenu}>
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/assets/alluvium-logo.svg" alt="logo"/>
                    {/* <Image src="/assets/alluvium-logo.svg" width={150} height={29.06} alt="logo"/> */}
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ul className={ theme === "dark" ? styles.desktopMenuDark : styles.desktopMenu}>
                    <li><Link href="/products">Our Projects</Link></li>
                    <li><Link href="/reel">Project Reel</Link></li>
                    <li><Link href="/people">Alluvians</Link></li>
                    <li><Link href="/support">Support</Link></li>
                </ul>
                <ul className={styles.mobileMenu}>
                    <li><Link href="/products">Our Projects</Link></li>
                    <li><Link href="/reel">Project Reel</Link></li>
                    <li><Link href="/people">Alluvians</Link></li>
                    <li><Link href="/support">Support</Link></li>
                </ul>
            </nav>
            <div className={styles.menuBtn}>

            </div>
            <Search theme={theme}/>

        </div>
        
    )
}