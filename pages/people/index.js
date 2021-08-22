import Head from 'next/head'
import Link from 'next/link'
import Profile from '../../components/profile'
import styles from '../../styles/peoplepage.module.scss'
import Navigation from '../../components/navigation'
// import { baseURL } from '../../config'
import { alluviansData, productData} from '../../data'
import Verification from 'components/verification'


export default function People({people,products}) {
  return (
    <div className={styles.peoplePage}>
      <Head>
        <title>Team | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"} products={products}/>
      <main>
          <section className={styles.alluviansPageHeader}>
            <div className={styles.pageTitle}>
              <h4>People of Alluvium</h4>
              <div className={styles.hireUsLink}>
                <Link href="/people#schedule">+ Hire us</Link>
              </div>
            </div>
            <h2 className={styles.title}>Alluvians? You guessed right!</h2>
            <p className={styles.subtitle}>We’re a force field of different bodies and lorem ipsum dolot amer, supraem tullet viem</p>
          </section>
          <section className={styles.alluviansGallery}>
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
          <section className={styles.scheduleMeetingLink} id="schedule">
            <div className={styles.scheduleMeetingHeader}>
              <p className={styles.title}>
                Launching a new product? Re-vitalising existing 
                application? Want to spark new emotions?
              </p>
              <p className={styles.subtitle}>
                We can help you through the thought process, help you align your ideas with 
                proper execution.
              </p>
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.mailContact}>
                <p>Send a mail to:</p>
                <a target="_blank" href="mailto:work@alluvium.com" rel="noopener noreferrer">work@alluvium.com</a>
              </div>
              <div className={styles.mailContact}>
                <p>Enquiries? Mail to: </p>
                <a target="_blank" href="mailto:enquiries@alluvium.com" rel="noopener noreferrer">enquiries@alluvium.com</a>
              </div>
            </div>
          </section>
      </main>
      <Verification/>
    </div>
  )
}

export const getStaticProps = async () =>{
  return {
      props:{
        people:alluviansData,
        products: productData
      }
  }
}