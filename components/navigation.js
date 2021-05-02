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
                    <li><Link href="/projects">Our Projects</Link></li>
                    <li><Link href="/reel">Project Reel</Link></li>
                    <li><Link href="/people">Alluvians</Link></li>
                    <li><Link href="/support">Support</Link></li>
                </ul>
                <div className={styles.mobileMenu}>
                    <Search theme={theme}/>
                    <ul>
                        <li><Link href="/projects">+ Our Projects</Link></li>
                        <li><Link href="/reel">+ Project Reel</Link></li>
                        <li><Link href="/people">+ Alluvians</Link></li>
                        <li><Link href="/support">+ Support</Link></li>
                    </ul>
                </div>
            </nav>
            <div className={styles.menuBtn}>
                <div className={styles.barOne}></div>
                <div className={styles.barTwo}></div>
                <div className={styles.barThree}></div>
            </div>
            <Search theme={theme}/>

        </div>
        
    )
}