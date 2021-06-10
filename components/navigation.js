import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/navigation.module.scss';
import Search, { MobileSearch } from "./search";


export default function Navigation ({theme,products}) {
    const [ displayMobileMenu, setDisplayMobileMenu ] = useState(false);
    const toggleMenu = () =>{
        setDisplayMobileMenu(!displayMobileMenu);
    }
    
    return(
        <div className={styles.navigationMenu} data-aos-delay="300" data-aos="fade-down">
            <div className={styles.logo}>
                <Link href="/">
                    {
                        theme === "dark" ? <img src="/assets/alluvium-logo-dark.svg" alt="logo"/> :  <img src="/assets/alluvium-logo.svg" alt="logo"/>
                    }
                    {/* <Image src="/assets/alluvium-logo.svg" width={150} height={29.06} alt="logo"/> */}
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ul className={ theme === "dark" ? styles.desktopMenuDark : styles.desktopMenu}>
                    <li><Link href="/products">Our Products</Link></li>
                    {/* <li><Link href="/reel">Project Reel</Link></li> */}
                    {/* <li><Link href="/people">Alluvians</Link></li> */}
                    <li><Link href="/support">Support</Link></li>
                </ul>
                <div className={ displayMobileMenu === true ? styles.mobileMenu : styles.hideMobileMenu }>
                    <MobileSearch theme={theme} products={products}/>
                    <ul>
                        <li><Link href="/">+ Home</Link></li>
                        <li><Link href="/products">+ Our Products</Link></li>
                        {/* <li><Link href="/reel">+ Project Reel</Link></li> */}
                        {/* <li><Link href="/people">+ Alluvians</Link></li> */}
                        <li><Link href="/support">+ Support</Link></li>
                    </ul>
                </div>
            </nav>
                <button onClick={ toggleMenu } className={ displayMobileMenu === true ? styles.closeBtn : null }>
                <div className={ theme === "dark" ? styles.menuBtnDark : styles.menuBtn}>
                    <div className={styles.barOne}></div>
                    <div className={styles.barTwo}></div>
                    <div className={styles.barThree}></div>
                </div>
            </button>
            <Search theme={theme} products={products}/>

        </div>
        
    )
}
