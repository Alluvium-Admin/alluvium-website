import Head from 'next/head'
import Link from 'next/link'
import MainProjectPreview from '../../components/mainProjectPreview'
import Navigation from '../../components/navigation'
import styles from '../../styles/Home.module.css'

const projectData = [
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

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
          <section className="projectPageTitle">
            <div className="subtitle">
              <p>we help you</p>
            </div>
            <div className="titleGroup">
              <p className="title">Analyze your ideas.</p>
              <p className="title">Create unique experiences.</p>
              <p className="title">Strengthen your Customer base.</p>
            </div>
          </section>
          <section className="projects">
            {
              projectData.map((project,index)=>{
                <MainProjectPreview
                  title={ project.title } 
                  subtitle={ project.subtitle } 
                  imgLink={ project.imgLink }
                  projectLink={ project.projectLink }
                  key={ index }
                />
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
            <div className="linkBtn">
              + <Link href="/contact">Schedule a meeting</Link>
            </div>
          </section>
      </main>
    </div>
  )
}