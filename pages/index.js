import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation';
import ProjectPreview from '../components/projectPreview';

const featuresData = [
  {
    title:"Secure",
    subtitle:"Data Security is so important to us that Everyone in our company is GDPR certified, even the janitor.",
    iconLink:"/assets/Secure.svg"
  },
  {
    title:"Simple-UX",
    subtitle:"We do our best to make sure the customer do not notice changes in their user experience, post migration",
    iconLink:"/assets/Simple.svg"
  },
  {
    title:"Scalable",
    subtitle:"Build, rinse, repeat",
    iconLink:"/assets/Scalable.svg"
  },
]

const previewData = [
  {
    title:"Cloud Counter",
    subtitle:"Employ our fast and efficient cloud counter to keep count of your resources ",
    imgLink:"/assets/Secure.svg",
    projectLink:""
  },
  {
    title:"CJR: Compare Jira Resources",
    subtitle:"Compare Jira Resources is an efficient way to check that you have fully migrated",
    imgLink:"/assets/Simple.svg",
    projectLink:""
  },
]

export default function Home() {
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
                  featuresData.map((feature,index)=>{
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
                  previewData.map((project,index)=>{
                    return(
                      <ProjectPreview 
                        title={ project.title } 
                        subtitle={ project.subtitle } 
                        imgLink={ project.imgLink }
                        projectLink={ project.projectLink }
                        key={ index }
                      />
                    )
                  })
                }
            </div>
            <div className="allProjectsBtn">
              <Link href="/projects">+ See more works</Link>
            </div>
          </section>
      </main>
    </div>
  )
}
