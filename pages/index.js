import { useState,useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import Navigation from '../components/navigation';
import ProjectPreview from '../components/projectPreview';
// import useSWR from 'swr';
// import { baseURL } from '../config'
import { productData,featuresData } from '../data'


export default function Home({projects,features}){
  const [ lightTheme,setLightTheme ] = useState('')
  useEffect(()=>{
    const theme = localStorage.getItem("light-mode");
    setLightTheme(JSON.parse(theme))
    console.log(lightTheme)
  },[])
  return (
    <div>
      <Head>
        <title>Home | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.landingPage}>
          <section className={styles.hero}>
            <div className={ styles.heroSection }>
              <div className={styles.heroContainer}>
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
                      <Link href="/projects">+ See our projects</Link>
                    </div>
                  </div>
                </div>
              </div>
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
                  projects.slice(0,2).map((project,index)=>{
                    return(
                      <ProjectPreview 
                        title={ project.title } 
                        subtitle={ project.subtitle } 
                        imgLink={ project.imgLink }
                        previewImgLink={ project.previewImgLink }
                        projectName={ project.projectName }
                        key={ index }
                        location={"home"}
                      />
                    )
                  })
                }
            </div>
            <div className={styles.allProjectsBtn}>
              <Link href="/projects">+ See more works</Link>
            </div>
          </section>
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{
  return {
    props:{
      projects: productData,
      features: featuresData,
    }
  }
}
