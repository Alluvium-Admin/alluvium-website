import Head from 'next/head'
import Link from 'next/link'
import Profile from '../../components/profile'
import styles from '../../styles/teampage.module.scss'
import Navigation from '../../components/navigation'
// import { baseURL } from '../../config'
import { teamData, productData} from '../../data'
import Verification from 'components/verification'


export default function Team({team,products}) {
  return (
    <div className={styles.teamPage}>
      <Head>
        <title>Team | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"} products={products}/>
      <main>
          <section className={styles.alluviansPageHeader}>
            <div className={styles.pageTitle}>
              <h4>Our Team</h4>
              <div className={styles.hireUsLink}>
                <Link href="/team#schedule">+ Hire us</Link>
              </div>
            </div>
            <h2 className={styles.title}>Meet our Team</h2>
            <p className={styles.subtitle}>Meet a few new friendly faces with 100% dedication to your technological needs and success.</p>
          </section>
          <section className={styles.alluviansGallery}>
            <div className={styles.dept}>
              <h3 className={styles.deptTitle}>Engineering Team</h3>
              <div className={styles.deptMembers}>
                {
                  team.map((alluvian, idx) => {
                    if (alluvian.dept === "Engineering team") {
                      return(
                        <Profile alluvian={alluvian} key={ idx }/>
                      ) 
                    }  
                  
                  })
                }
              </div>
            </div>
            <div className={styles.dept}>
              <h3 className={styles.deptTitle}>Product Office</h3>
              <div className={styles.deptMembers}>
                {
                  team.map((alluvian, idx) => {
                    if (alluvian.dept === "Product Office") {
                      return(
                        <Profile alluvian={alluvian} key={ idx }/>
                      ) 
                    }  
                  
                  })
                }
              </div>
            </div>
            <div className={styles.dept}>
              <h3 className={styles.deptTitle}>Cosmetics  and Marketing Team</h3>
              <div className={styles.deptMembers}>
                {
                  team.map((alluvian, idx) => {
                    if (alluvian.dept === "Cosmetics team" || alluvian.dept === "Marketing team") {
                      return(
                        <Profile alluvian={alluvian} key={ idx }/>
                      ) 
                    }  
                   
                  })
                }
              </div>
            </div>
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
        team:teamData,
        products: productData
      }
  }
}