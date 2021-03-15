import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../../components/navigation'

export default function Contact() {
    return(
        <div className="contactPage">
            <Head>
                <title>Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <main className="contactUsPage">
                <div className="contactImg">
                    <Image src='/assets/test.png' width={600} height={400}/>
                </div>
                <div className="contactDetails">
                    <div className="emailContact">
                        <h3>Launching a new product? Got enquiries?</h3>
                        <p>Send a mail to: <Link href="/">hello@alluvium.net</Link></p>
                    </div>
                    <div className="mailingAddress">
                        <h3>Mailing Address:</h3>
                        <p>689 Heathrow, cantebury, London, Lagos.</p>
                        <Link href="/">+234 816 133 5033</Link>
                    </div>
                </div>
            </main>
        </div>
    )
}