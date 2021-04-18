import Head from 'next/head'
import Link from 'next/link'
import { server } from '../../config'
import ProjectPreview from '../../components/projectPreview'
import Navigation from '../../components/navigation'
import styles from '../../styles/Home.module.css'

export default function Products({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Products | Alluvium</title>
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

export const getStaticProps = async () =>{
  const res = await fetch(`${server}/api/products`)
  const products = await res.json()

  return{
    props:{
      products
    }
  }
}