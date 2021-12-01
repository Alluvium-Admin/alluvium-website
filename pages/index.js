import { useState,useEffect } from 'react'
// import * as arrays from "../data";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/homepage.module.scss'
import Navigation from '../components/navigation';
import ProductPreview from '../components/productPreview';
// import useSWR from 'swr';
// import { baseURL } from '../config'
import { productData,featuresData } from '../data'


export default function Home({products,features}){
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
        <meta name="description" content="Alluvium is an Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers complete data migration in half the time for half the cost."/>
        <meta name="keywords" content="alluvium, team alluvium, atlassian products migration lab, atlassian, jira"/>
      </Head>
      <main className={styles.landingPage}>
          <section className={ styles.heroSection }>
            <div className={styles.heroContainer}>
              <Navigation products={products}/>
              <div className={styles.heroContent}>
                <div data-aos="fade-right" className={styles.bigText}>
                  <p>We are problem solvers</p>
                </div>
                <div data-aos="fade-left" className={styles.mainText}>
                  <p className={styles.subtitle}>
                    We are Atlassian Products Migration Lab. We produce Tools, Systems and Services that deliver complete data migration in half the time for half the cost.
                  </p>
                  <div className={styles.projectsBtn}>
                    <Link href="/products">+ See our products</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.featureSection}>
            <div className={styles.features}>
              <h3 className={styles.featuresTitle}>Our Values</h3>
              <ul className={styles.featureList}>
                {
                  features.map((feature,index)=>{
                    return(
                      <li className={styles.feature} key={index} data-aos-delay={`${300 * index}`} data-aos="fade-down">
                        <div className={styles.featureImg}>
                          <img src={feature.iconLink} alt={ feature.title }/>
                          {/* <Image src={feature.iconLink} width={471.82} height={531.19}/> */}
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
                      <ProductPreview 
                        title={ project.title } 
                        subtitle={ project.subtitle } 
                        imgLink={ project.imgLink }
                        previewImgLink={ project.previewImgLink }
                        productName={ project.projectName }
                        key={ index }
                        location={"home"}
                        index={ index }
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
      <script async id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="207734638"></script>
    </div>
  )
}

export const getStaticProps = async () =>{
  return {
    props:{
      products: productData,
      features: featuresData,
    }
  }
}
