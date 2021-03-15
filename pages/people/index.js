import Head from 'next/head'
import Link from 'next/link'
import Profile from '../../components/profile'
import styles from '../../styles/Home.module.css'
import Navigation from '../../components/navigation'
import { server } from '../../config'


export default function People({people}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
          <section className="alluviansPageHeader">
            <div className='pageTitle'>
              <h4>People of Alluvium</h4>
              <div className="hireUsLink">
                <Link href="/">+ Hire us</Link>
              </div>
            </div>
            <h2 className="title">Alluvians? You guessed right!</h2>
            <p className="subtitle">We’re a force field of different bodies and lorem ipsum dolot amer, supraem tullet viem</p>
          </section>
          <section className="alluviansGallery">
            {
              people.map((alluvian,idx)=>{
                return(
                  <Profile
                    firstName={ alluvian.firstName }
                    lastName={ alluvian.lastName }
                    role={ alluvian.role }
                    pictureLink={ alluvian.imgUrl }
                    email={ alluvian.email }
                    key={ idx }
                  />
                ) 
              })
            }
          </section>
          <section className="scheduleMeetingLink">
            <div className="scheduleMeetingHeader">
              <p className="title">
                Launching a new product? Re-vitalising existing 
                application? Want to spark new emotions?
              </p>
              <p className="subtitle">
                We can help you through the thought process, help you align your ideas with 
                proper execution.
              </p>
            </div>
            <div className="contactInfo">
              <p className="mailContact">
                Send a mail to: <Link href="/">work@alluvium.com</Link>
              </p>
              <p className="mailContact">
                Enquiries? Mail to: <Link href="/">enquiries@alluvium.com</Link>
              </p>
            </div>
          </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`${server}/api/people`)
  const people = await res.json()

  return {
      props:{
        people
      }
  }
}