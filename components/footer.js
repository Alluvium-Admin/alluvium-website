import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Switch from 'react-input-switch';
import styles from '../styles/footer.module.scss';
import { useToasts } from 'react-toast-notifications';


export default function Footer() {
    // const [value, setValue] = useState(true);
    // useEffect(()=>{
    //     localStorage.setItem("light-mode", JSON.stringify(value))
    // }, [value])
    const { addToast } = useToasts();
    

    return(
        <footer className={ styles.footer }>
            <div className={styles.newsletterSection}>
                <div className={styles.newsletter}>
                    <p className={styles.newsletterTitle} data-aos="fade-right">Get access to our Newsletter</p>
                    <div className={styles.newsletterInput} data-aos="fade-left">
                        <input type="email" placeholder="Enter your e-mail address"/>
                        <button
                         onClick={ ()=>addToast("Currently unavailable, Check back later",{appearance:'info',autoDismiss:true}) }   
                         className={styles.newsletterSubmitBtn}>
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
                    <Link href="/" >
                        <img className={styles.footerLogo} src="/assets/alluvium-logo-dark.svg" alt="logo"/>
                    </Link>
                    <div className={styles.footerLists}>
                        <div className={styles.footerList} data-aos="fade-up">
                            <h4 className={styles.footerListTitle}>What we do</h4>
                            <ul>
                                <li className={styles.footerListItem}><Link href="/products">Our Products</Link></li>
                                <li className={styles.footerListItem}><Link href="/reel">Projects Reel</Link></li>
                                <li className={styles.footerListItem}><Link href="/products/statuspage">Products Status</Link></li>
                            </ul>
                        </div>
                        <div className={styles.footerList} data-aos="fade-up" data-aos-delay="300">
                            <h4 className={styles.footerListTitle}>Who are we?</h4>
                            <ul>
                                <li className={styles.footerListItem}><Link href="/products">About us</Link></li>
                                <li className={styles.footerListItem}><Link href="/team">Alluvians</Link></li>
                            </ul>
                        </div>
                        <div className={styles.footerList} data-aos="fade-up" data-aos-delay="400">
                            <h4 className={styles.footerListTitle}>Follow us</h4>
                            <ul>
                                <li className={styles.footerListItem}><a href="https://www.linkedin.com/company/alluvium-hq/">LinkedIn</a></li>
                                <li className={styles.footerListItem}><a href="https://www.facebook.com/alluviumhq/?ti=as">Facebook</a></li>
                                <li className={styles.footerListItem}><a href="https://twitter.com/alluviumhq?s=08">Twitter</a></li>
                                {/* <li className={styles.footerListItem}><Link href="/reel">Instagram</Link></li> */}
                            </ul>
                        </div>
                        <div className={styles.footerList} data-aos="fade-up" data-aos-delay="500">
                            <h4 className={styles.footerListTitle}>Support</h4>
                            <ul>
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
                        <p>©2022 Alluvium | All rights reserved</p>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}


export function AltFooter() {

    const { addToast } = useToasts();

    function submitNewsletterForm (e) {
        e.preventDefault();
        addToast("Currently unavailable, Check back later", { appearance: 'info', autoDismiss: true });
    }
    
    return(
        <footer className={styles.altFooter}>
            <div className={styles.getInTouchSection}>
                <h1 className={styles.getInTouchSectionTitle}>Have a Project in mind?</h1>
                <Link href="/support">Get in touch</Link>
            </div>
            <div className={styles.altFooterMainSection}>
                <div className={styles.altFooterMainSectionComponents}>
                    <div className={styles.altFooterMainSectionComponent}>
                        <div className={styles.altFooterLogo}>
                            <img src={"/assets/alluvium-footer-logo.svg"} alt="Footer logo"/>
                        </div>
                        <ul className={styles.altFooterContactList}>
                            <li className={styles.contactListItem}>
                                <b>Address:</b> Second Floor, Ravi Chambers, Kavuri Hills, London, United Kingdom.
                            </li>
                            <li className={styles.contactListItem}>
                                <b>Email:</b>
                                <Link href="/"> contact@alluvium.com</Link>
                            </li>
                            <li className={styles.contactListItem}>
                                <b>Phone:</b>
                                <Link href="/"> +44 85001 92539</Link>
                            </li>
                        </ul>
                        <ul className={styles.footerSocials}>
                            {/* <li className={styles.footerSocialIcon}>
                                <a href="" >
                                    <img src="/assets/socials/instagram.svg" alt='instagram' />
                                </a>
                            </li> */}
                            <li className={styles.footerSocialIcon}>
                                <a href="https://twitter.com/alluviumhq?s=08" target="_blank">
                                    <img src="/assets/socials/twitter.svg" alt='twitter' />
                                </a>
                            </li>
                            <li className={styles.footerSocialIcon}>
                                <a href="https://www.facebook.com/alluviumhq/?ti=as" target="_blank">
                                    <img src="/assets/socials/facebook.svg" alt='facebook' />
                                </a>
                            </li>
                            <li className={styles.footerSocialIcon}>
                                <a href="https://www.linkedin.com/company/alluvium-hq/" target="_blank">
                                    <img src="/assets/socials/linkedin.svg" alt='linkedin' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.altFooterMainSectionComponent}>
                        <h3 className={styles.altFooterMainSectionComponentTitle}>Company</h3>
                        <ul className={styles.altFooterContactList}>
                            <li className={styles.contactListItem}>
                                <Link href="/about">About us</Link>
                            </li>
                            <li className={styles.contactListItem}>
                                <Link href="/reel">Project Reel</Link>
                            </li>
                            <li className={styles.contactListItem}>
                                <Link href="/reel/case-studies">Case Studies</Link>
                            </li>
                            <li className={styles.contactListItem}>
                                <Link href="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.altFooterMainSectionComponent}>
                        <h3 className={styles.altFooterMainSectionComponentTitle}>Our Services</h3>
                        <ul className={styles.altFooterContactList}>
                            <li className={styles.contactListItem}>
                                <Link href="/about">Atlassian Tools Migration</Link>
                            </li>
                            <li className={styles.contactListItem}>
                                <Link href="/about">Atlassian Engineering Team</Link>
                            </li>
                            <li className={styles.contactListItem}>
                                <Link href="/about">Atlassian Marketplace PlugIns</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.newsLetterComponent}>
                        <h2 className={styles.newsLetterTitle}>Get Access to our Newsletter</h2>
                        <p className={styles.newsLetterSubtitle}>Join hundreds of business and technology in subcribing to Alluvium’s newsletter</p>
                        <form className={styles.newsLetterForm} onSubmit={submitNewsletterForm}>
                            <input type="email" className={styles.emailInput} name="emailInput" placeholder='Email Address'/>
                            <input type="submit" className={styles.formSubmitBtn} value="Sign me up"/>
                        </form>
                    </div>
                </div>
                <hr className={styles.underline}/>
                <div className={styles.copyrights}>
                    <p>© 2022 Alluvium | <span>All rights reserved</span></p>
                </div>
            </div>
        </footer>
    )
}