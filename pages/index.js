import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import Navigation from '../components/navigation';
import ProjectPreview from '../components/projectPreview';
import { server } from '../config'

export default function Home({products,features}) {
  return (
    <div>
      <Head>
        <title>Home | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.landingPage}>
          <section className={styles.heroSection}>
            <Navigation/>
            <div className={styles.heroContent}>
              <div className={styles.bigText}>
                <p>We are problem solvers</p>
              </div>
              <div className={styles.mainText}>
                <p className={styles.subtitle}>
                  We are Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers 
                  complete data migration in half the time for half the cost.
                </p>
                <div className={styles.projectsBtn}>
                  <Link href="/products">+ See our projects</Link>
                </div>
              </div>
            </div>
            <div className={styles.heroImg}>
              <Image src="/assets/hero.png" width={ 1392 } height={ 882.5 } alt="heroBackground"/>
            </div>
          </section>
          <section className={styles.featureSection}>
            <div className={styles.featureSectionImg}>
              <Image src="/assets/featuresImg.png" width={506} height={506}/>
            </div>
            <div className={styles.features}>
              <h3 className={styles.featuresTitle}>Our Values</h3>
              <ul className={styles.featureList}>
                {
                  features.map((feature,index)=>{
                    return(
                      <li className={styles.feature} key={index}>
                        <div className={styles.featureImg}>
                          <Image src={feature.iconLink} width={57} height={57}/>
                        </div>
                        <div className={styles.featureContent}>
                          <h4 className={styles.featureTitle}>{feature.title}</h4>
                          <p className={styles.featureSubtitle}>{feature.subtitle}</p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </section>
          <section className={styles.projects}>
            <div className={styles.projectList}>
                {
                  products.slice(0,2).map((project,index)=>{
                    return(
                      <ProjectPreview 
                        title={ project.title } 
                        subtitle={ project.subtitle } 
                        imgLink={ project.imgLink }
                        projectName={ project.projectName }
                        key={ index }
                        location={"home"}
                      />
                    )
                  })
                }
            </div>
            <div className={styles.allProjectsBtn}>
              <Link href="/products">+ See more works</Link>
            </div>
          </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`${server}/api/products`)
  const featuresRes = await fetch(`${server}/api/features`)

  const products = await res.json()
  const features = await featuresRes.json()

  return {
    props:{
      products,
      features
    }
  }
}
