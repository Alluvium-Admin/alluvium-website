import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import SupportSubmenu from '../../components/supportSubmenu'
import styles from '../../styles/contactpage.module.scss'

export default function Contact() {
    return(
        <div className={styles.contactPage}>
            <Head>
                <title>Contact | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"}/>
            <main className={styles.contactUsPage}>
                <SupportSubmenu/>
                <div className={styles.contactImg}>
                    <Image src='/assets/contactImg.png' width={1392} height={461}/>
                </div>
                <div className={styles.contactDetails}>
                    <div className={styles.emailContact}>
                        <h3>Launching a new product? Got enquiries?</h3>
                        <p>Send a mail to: <Link href="/">hello@alluvium.net</Link></p>
                    </div>
                    <div className={styles.mailingAddress}>
                        <h3>Mailing Address:</h3>
                        <p>689 Heathrow, cantebury, London, Lagos.</p>
                        <Link href="/">+234 816 133 5033</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}