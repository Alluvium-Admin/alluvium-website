import React, { useState } from "react";
import Link from 'next/link';
import styles from '../styles/navigation.module.scss';
import Search, { MobileSearch } from "./search";


export default function Navigation({ theme, products }) {
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const [currentDropdown, setCurrentDropdown] = useState('');
    const toggleMenu = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    }

    return (
        <div className={styles.navigationMenu} data-aos-delay="300" data-aos="fade-down">
            <div className={styles.logo}>
                <Link href="/">
                    <img src="/assets/alluvium-logo-dark.svg" alt="logo" />
                    {/* {
                        theme === "dark" ? <img src="/assets/alluvium-logo-dark.svg" alt="logo" /> : <img src="/assets/alluvium-logo.svg" alt="logo" />
                    } */}
                    {/* <Image src="/assets/alluvium-logo.svg" width={150} height={29.06} alt="logo"/> */}
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ul className={theme === "dark" ? styles.desktopMenuDark : styles.desktopMenu}>
                    <li><div>
                        {/* <p onClick={()=>setCurrentDropdown('company')}>Company</p> */}
                        <div>
                            <ul className={theme === "dark" ? styles.desktopMenuDark : styles.desktopMenu}>
                                
                            </ul>
                        </div>
                        </div></li>
                    <li><Link href="/products">Our Products</Link></li>
                    <li><Link href="/#services">Our Services</Link></li>
                    <li><Link href="/reel">Project Reel</Link></li>
                    <li><Link href="/about">About us</Link></li>
                    {/* <li><Link href="/team">Our Team</Link></li> */}
                    <li><Link href="/support">Support (FAQs)</Link></li>
                    <li><a href="https://marketplace.atlassian.com/vendors/1218751/alluvium" target="_blank">Atlassian Marketplace</a></li>
                    {/* <li><Link href="/onboarding">Onboarding</Link></li> */}
                </ul>
                <div className={displayMobileMenu === true ? styles.mobileMenu : styles.hideMobileMenu}>
                    <MobileSearch theme={theme} products={products} />
                    <ul>
                        <li><Link href="/">+ Home</Link></li>
                        <li><Link href="/products">+ Our Products</Link></li>
                        <li><Link href="/#services">+ Our Services</Link></li>
                        <li><Link href="/reel">+ Project Reel</Link></li>
                        <li><Link href="/about">+ About us</Link></li>
                        {/* <li><Link href="/team">+ Our Team</Link></li> */}
                        {/* <li><Link href="/support">+ Support (FAQs)</Link></li> */}
                        <li><a href="https://marketplace.atlassian.com/vendors/1218751/alluvium" target="_blank">Atlassian Marketplace</a></li>
                        {/* <li><Link href="/onboarding">+ Onboarding</Link></li> */}
                        <li><Link href="/support/contact">+ Contact Us</Link></li>
                    </ul>
                </div>
            </nav>
            <button onClick={toggleMenu} className={displayMobileMenu === true ? styles.closeBtn : null}>
                {/* <div className={theme === "dark" ? styles.menuBtnDark : styles.menuBtn}> */}
                <div className={styles.menuBtnDark}>
                    <div className={styles.barOne}></div>
                    <div className={styles.barTwo}></div>
                    <div className={styles.barThree}></div>
                </div>
            </button>
            <Link href="/support/contact">
                <a className={styles.contactUsButton}>Contact Us</a>
            </Link>
            <Search theme={theme} products={products} />

        </div>

    )
}
