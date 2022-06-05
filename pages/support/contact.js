import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import SupportSubmenu from '../../components/supportSubmenu'
import styles from '../../styles/contactpage.module.scss'
import { productData } from '../../data'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Contact({ products }) {
    return (
        <div className={styles.contactPage}>
            <Head>
                <title>Contact | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products} />
            <section className={styles.hero}>
                <div className={styles.us}>
                    <h1>Get In</h1>
                    <h1> Touch with Us</h1>
                </div>
            </section>
            <section className='container-fluid'>
                <div className={styles.main}>
                    <h2 className='text-center text-capitalize'>Get in touch for</h2>
                    <div className='row justify-content-md-around justify-content-between my-5' style={{ rowGap: '3rem' }}>
                        <div className='col-md-5 col-lg-4 text-center align-self-end'>
                            <Image src='/assets/contact/demo.svg' width={73.59} height={115.97} priority loading='eager' />
                            <div className='container-fluid'>
                                <h3 className='text-capitalize'>Request a demo</h3>
                                <p>Request a demonstration
                                    of our products</p>
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-4 text-center align-self-end'>
                            {/* <Image src='' width={73.59} height={115.97} priority loading='eager' /> */}
                            <div className='container-fluid'>
                                <h3 className='text-capitalize'>Product Advice</h3>
                                <p>Confused between products? Contact and tell
                                    us your needs.</p>
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-4 text-center align-self-md-end'>
                            <Image src='/assets/contact/support.svg' width={64.89} height={67.83} priority loading='eager' />
                            <div className='container-fluid'>
                                <h3 className='text-capitalize'>Customer Support</h3>
                                <p>Contact for support regarding  your order or
                                    service.</p>
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-4 text-center'>
                            <Image src='/assets/contact/location.svg' width={51.8} height={54.15} priority loading='eager' />
                            <div className='container-fluid'>
                                <h3 className='text-capitalize'>Find us at:</h3>
                                <p>Kemp House 160,
                                    City Road London, EC1V 2NX</p>
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-4 text-center'>
                            <Image src='/assets/contact/call.svg' width={51.8} height={54.15} priority loading='eager' />
                            <div className='container-fluid'>
                                <h3 className='text-capitalize'>Give us a ring at:</h3>
                                <a href='tel:+11110000000'>+11110000000</a>
                            </div>
                        </div>
                        <div className='col-md-5 col-lg-4 text-center'>
                            <Image src='/assets/contact/mail.svg' width={51.8} height={54.15} priority loading='eager' />
                            <div className='container-fluid'>
                                <h3 className='text-capitalize'>Drop an email to:</h3>
                                <a href='mailto:contact@alluvium.net' rel="noopener noreferrer" target='_blank'>contact@alluvium.net</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-5 pt-5'>
                    <h2 className='text-center'>We'd Love To Help</h2>
                    <p className='text-center'>We’ll get back to you within one business day.</p>
                    <div className='row justify-content-center'>
                        <div className="col-md-9">
                            <iframe frameBorder="0" className={styles.contactus} src='https://forms.zohopublic.com/admin1711/form/ContactUs/formperma/ywG1UqqTEfcSggqvjWrl_fTDGN6tS6l8KxBzlvUhZUU'></iframe>
                            {/* <Form handleInput={handleInput} handleSubmit={handleSubmit} /> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <main className={styles.contactUsPage}>
                <div className={styles.contactImg}>
                    <Image src='/assets/contactImg.png' width={1392} height={461} />
                </div>
                <div className={styles.contactDetails}>
                    <div className={styles.emailContact} data-aos="fade-right">
                        <h3>Launching a new product? Got enquiries?</h3>
                        <p>Send a mail to: <a target="_blank" href="mailto:contact@alluvium.net" rel="noopener noreferrer">contact@alluvium.net</a></p>
                    </div>
                    <div className={styles.mailingAddress} data-aos="fade-left">
                        <h3>Mailing Address:</h3>
                        <p>Kemp House 160, City Road London, EC1V 2NX</p>
                    </div>
                </div>

            </main> */}
        </div>
    )
}


export const getStaticProps = async () => {
    return {
        props: {
            products: productData,
        }
    }
}