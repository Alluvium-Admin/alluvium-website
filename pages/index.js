import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation';
import ProjectPreview from '../components/projectPreview';
import { server } from '../config'

export default function Home({products,features}) {
  return (
    <div>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main className="landingPage">
          <section className="heroSection">
            <div className="heroContent">
              <div className="bigText">
                <p>We are problem solvers</p>
              </div>
              <div className="mainText">
                <p className="subtitle">
                  We are Atlassian Products Migration Lab. We produce Tools, Systems and Services that delivers 
                  complete data migration in half the time for half the cost.
                </p>
                <div className="projectsBtn">
                  <Link href="/projects">+ See our projects</Link>
                </div>
              </div>
            </div>
            <div className="heroImg">

            </div>
          </section>
          <section className="featureSection">
            <div className="featureSectionImg">
              <Image src="/assets/featuresImg.png" width={506} height={506}/>
            </div>
            <div className="features">
              <h3 className="featuresTitle">Alluvium</h3>
              <ul className="featureList">
                {
                  features.map((feature,index)=>{
                    return(
                      <li className="feature" key={index}>
                        <div className="featureImg">
                          <Image src={feature.iconLink} width={57} height={57}/>
                        </div>
                        <div className="featureContent">
                          <h4 className="featureTitle">{feature.title}</h4>
                          <p className="featureSubtitle">{feature.subtitle}</p>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </section>
          <section className="projects">
            <div className="projectList">
                {
                  products.slice(0,2).map((project,index)=>{
                    return(
                      <ProjectPreview 
                        title={ project.title } 
                        subtitle={ project.subtitle } 
                        imgLink={ project.imgLink }
                        projectName={ project.projectName }
                        key={ index }
                      />
                    )
                  })
                }
            </div>
            <div className="allProjectsBtn">
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
