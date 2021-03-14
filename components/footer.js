import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Switch from 'react-input-switch';

export default function Footer() {
    return(
        <footer>
            <div className="newsletterSection">
                <div className="newsletter">
                    <p className="newsletterTitle">Get access to our Newsletter</p>
                    <div className="newsletterInput">
                        <input type="email" placeholder="Enter your e-mail address"/>
                        <button className="newsletterSubmitBtn">
                            <p>Shoot</p>
                            <div className="btnArrow">
                                <Image src="/assets/arrow.svg" width={ 19 } height={ 8 }/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="background">

                </div>
            </div>
            <div className="footerBody">
                <div className="footerLogo">

                </div>
                <div className="footerLists">
                    <div className="footerList">
                        <h4 className="footerListTitle">What we do</h4>
                        <ul>
                            <li className="footerListItem"><Link href="/projects">Our Products</Link></li>
                            <li className="footerListItem"><Link href="/reel">Projects Reel</Link></li>
                        </ul>
                    </div>
                    <div className="footerList">
                        <h4 className="footerListTitle">Who are we?</h4>
                        <ul>
                            <li className="footerListItem"><Link href="/projects">About us</Link></li>
                            <li className="footerListItem"><Link href="/reel">Alluvians</Link></li>
                        </ul>
                    </div>
                    <div className="footerList">
                        <h4 className="footerListTitle">Contact</h4>
                        <ul>
                            <li className="footerListItem"><Link href="/projects">LinkedIn</Link></li>
                            <li className="footerListItem"><Link href="/reel">Facebook</Link></li>
                            <li className="footerListItem"><Link href="/reel">Twitter</Link></li>
                            <li className="footerListItem"><Link href="/reel">Instagram</Link></li>
                        </ul>
                    </div>
                    <div className="footerList">
                        <h4 className="footerListTitle">Support</h4>
                        <ul>
                            <li className="footerListItem"><Link href="/projects">Ask about our rates</Link></li>
                            <li className="footerListItem"><Link href="/reel">Contact us</Link></li>
                            <li className="footerListItem"><Link href="/reel">FAQs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="themeSwitch">
                    <Switch/>
                </div>
            </div>
            <div className="copyrights">
                <p>Copyright.©2021 Alluvium Ltd. All rights reserved</p>
            </div>
        </footer>
    )
}