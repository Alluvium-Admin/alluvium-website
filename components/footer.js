import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Switch from 'react-input-switch';
import styles from '../styles/footer.module.scss';

export default function Footer() {
    const [value, setValue] = useState(true);
    useEffect(()=>{
        localStorage.setItem("light-mode", JSON.stringify(value))
    },[value])
    

    return(
        <footer className={ styles.footer }>
            <div className={styles.newsletterSection}>
                <div className={styles.newsletter}>
                    <p className={styles.newsletterTitle}>Get access to our Newsletter</p>
                    <div className={styles.newsletterInput}>
                        <input type="email" placeholder="Enter your e-mail address"/>
                        <button className={styles.newsletterSubmitBtn}>
                            <p>Shoot</p>
                            <div className={styles.btnArrow}>
                                <Image src="/assets/arrow.svg" width={ 19 } height={ 8 }/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className={styles.background}>
                    <Image src="/assets/footer.png" width={ 1392 } height={ 623 } />
                </div>
            </div>
            <div className={styles.footerMain}>
                <div className={styles.footerBody}>
                    <div className={styles.footerLogo}>
                        <img src="/assets/alluvium-logo-dark.svg" alt="logo"/>
                    </div>
                    <div className={styles.footerLists}>
                        <div className={styles.footerList}>
                            <h4 className={styles.footerListTitle}>What we do</h4>
                            <ul>
                                <li className={styles.footerListItem}><Link href="/products">Our Products</Link></li>
                                <li className={styles.footerListItem}><Link href="/reel">Projects Reel</Link></li>
                            </ul>
                        </div>
                        <div className={styles.footerList}>
                            <h4 className={styles.footerListTitle}>Who are we?</h4>
                            <ul>
                                <li className={styles.footerListItem}><Link href="/products">About us</Link></li>
                                {/* <li className={styles.footerListItem}><Link href="/reel">Alluvians</Link></li> */}
                            </ul>
                        </div>
                        <div className={styles.footerList}>
                            <h4 className={styles.footerListTitle}>Contact</h4>
                            <ul>
                                <li className={styles.footerListItem}><Link href="/reel">LinkedIn</Link></li>
                                <li className={styles.footerListItem}><a href="https://www.facebook.com/alluviumhq/?ti=as">Facebook</a></li>
                                <li className={styles.footerListItem}><a href="https://twitter.com/alluviumhq?s=08">Twitter</a></li>
                                <li className={styles.footerListItem}><Link href="/reel">Instagram</Link></li>
                            </ul>
                        </div>
                        <div className={styles.footerList}>
                            <h4 className={styles.footerListTitle}>Support</h4>
                            <ul>
                                <li className={styles.footerListItem}><Link href="/support/contact">Ask about our rates</Link></li>
                                <li className={styles.footerListItem}><Link href="/support/contact">Contact us</Link></li>
                                <li className={styles.footerListItem}><Link href="/support">FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.pageFooter}>
                    {/* <div className={styles.themeSwitch}>
                        <Switch
                            on={true} 
                            off={false}
                            value={value}
                            onChange={setValue}
                            styles={{
                                track: {
                                    backgroundColor: 'white'
                                },
                                trackChecked: {
                                    backgroundColor: 'black'
                                },
                                button: {
                                    backgroundColor: 'black'
                                },
                                buttonChecked: {
                                    backgroundColor: 'white'
                                }
                            }}
                        />
                    </div> */}
                    <hr className={styles.underline}/>
                    <div className={styles.copyrights}>
                        <p>Copyright.©2021 Alluvium Ltd. All rights reserved</p>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}