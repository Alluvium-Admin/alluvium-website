import Head from 'next/head'
import Link from 'next/link'
import { server } from '../../config'
import ProjectPreview from '../../components/projectPreview'
import Navigation from '../../components/navigation'
import styles from '../../styles/productspage.module.scss'

export default function Products({products}) {
  return (
    <div className={styles.productsPage}>
      <Head>
        <title>Products | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"}/>
      <main>
          <section className={styles.projectPageTitle}>
            <div className={styles.subtitle}>
              <p>we help you</p>
            </div>
            <div className={styles.titleGroup}>
              <p className={styles.title}>Analyze your ideas.</p>
              <p className={styles.title}>Create unique experiences.</p>
              <p className={styles.title}>Strengthen your Customer base.</p>
            </div>
          </section>
          <section className={styles.projects}>
            {
              products.map((project)=>{
                return(
                  <ProjectPreview
                    title={ project.title } 
                    subtitle={ project.subtitle } 
                    imgLink={ project.imgLink }
                    projectName={ project.projectName }
                    key={ project.id }
                    onHomepage={false}
                  />
                )
                
              })
            }
          </section>
          <section className={styles.scheduleMeetingLink}>
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
            <div className={styles.linkBtn}>
              + <Link href="/contact">Schedule a meeting</Link>
            </div>
          </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`${server}/api/products`)
  const products = await res.json()

  return{
    props:{
      products
    }
  }
}