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
import { productData,featuresData, ourServicesData, milestonesData,trustedCompaniesData } from '../data'


export default function Home({products,features,ourServices,milestones,trustedCompanies}){
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
                <div data-aos="fade-up" className={styles.bigText}>
                  <p>We are problem solvers</p>
                </div>
                <div data-aos="fade-down" className={styles.mainText}>
                  <p className={styles.subtitle}>
                    We are Atlassian Products Migration Lab. We produce Tools, Systems and Services that deliver complete data migration in half the time for half the cost.
                  </p>
                  <div className={styles.projectsBtn}>
                    <Link href="/products">See our products</Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.featureSection}>
            <h3 className={styles.featuresTitle}>Our Values</h3>
            <div className={styles.features}>
              <div className={styles.featureSectionImg} data-aos="zoom-in">
                <Image src="/assets/featuresImg.png" width={672} height={486}/>
              </div>
              <ul className={styles.featureList}>
                {
                  features.map((feature,index)=>{
                    return(
                      <li className={styles.feature} key={index} data-aos-delay={`${300 * index}`} data-aos="fade-down">
                        <div className={styles.featureImg}>
                          {/* <img src={feature.iconLink} alt={ feature.title }/> */}
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
          {/* <section className={styles.projects}>
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
        </section> */}
        <section className={styles.ourServices}>
          <div className={styles.ourServicesHeader}>
            <h1 className={styles.ourServicesTitle}>Our Services</h1>
            <p className={styles.ourServicesSubtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
          </div>
          <div className={styles.ourServicesList}>
            {
              ourServices.map((service) => {
                const { id, title, icon, subtitle } = service;

                return(
                  <div className={styles.service} key={id}>
                    <div className={styles.serviceIcon}>
                      <img src={icon} alt={title}/>
                    </div>
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceTitle}>{ title }</h3>
                      <p className={styles.serviceSubtitle}>{ subtitle }</p>
                    </div>
                    <div className={styles.serviceLink}>

                    </div>
                  </div>
                )
              })
            }
            <div className={styles.service} >
              <div className={styles.serviceIcon}>
                <img src={"/assets/service3.svg"} alt="Plugins"/>
              </div>
              <div className={styles.serviceInfo}>
                <h3 className={styles.serviceTitle}>Atlassian Marketplace Plugins</h3>
                <p className={styles.serviceSubtitle}>We engineer and support migration and implementation plugins like
                  <span className={styles.serviceProductLink}><Link href="/products/sc"> Scrum Companion</Link></span>,
                  <span className={styles.serviceProductLink}><Link href="/products/cloud-counter"> Cloud Counter</Link></span>,
                  <span className={styles.serviceProductLink}><Link href="/products/cjr"> Compare Jira Resources</Link></span>,
                </p>
              </div>
              <div className={styles.serviceLink}>

              </div>
            </div>
          </div>
        </section>
        <section className={styles.ourMilestones}>
          <div className={styles.ourMilestonesHeader} >
            <h1 className={styles.ourMilestonesTitle}>Our Major Milestones</h1>
            <p className={styles.ourMilestonesSubtitle}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. </p>
          </div>
          <div className={styles.ourMilestonesList}>
            {
              milestones.map((milestone)=>{
                return(
                  <div className={styles.milestone} key={milestone.id}>
                    <div className={styles.milestoneIcon}>
                      <img src={milestone.icon} alt={milestone.category}/>
                    </div>
                    <div className={styles.milestoneDescription}>
                      <h3 className={styles.milestoneFigure}>{ milestone.value }</h3>
                      <p className={styles.milestoneName}>{ milestone.category }</p>
                    </div>
                  </div>
                )
              })
              
            }
          </div>
        </section>
        <section className={styles.trustedBySection}>
          <h1 className={styles.trustedBySectionTitle}>Trusted by</h1>
          <div className={styles.trustedCompaniesList}>
            <div className={styles.trustedCompanies}>
              {
                trustedCompanies.map((company,idx) => {
                  return (
                    <div className={styles.trustedCompany} key={idx}>
                      <img src={ company.logoIcon } alt={ company.name }/>
                    </div>
                  )
                })
              }

            </div>
            <div className={styles.trustedCompanies}>
              {
                trustedCompanies.map((company,idx) => {
                  return (
                    <div className={styles.trustedCompany} key={idx}>
                      <img src={ company.logoIcon } alt={ company.name }/>
                    </div>
                  )
                })
              }
            </div>
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
      ourServices: ourServicesData,
      milestones: milestonesData,
      trustedCompanies: trustedCompaniesData
    }
  }
}
