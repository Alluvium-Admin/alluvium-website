import Head from 'next/head'
import styles from '../../../styles/casestudiespage.module.scss'
import Navigation from '../../../components/navigation'
import { productData, caseStudiesData } from '../../../data'
import CaseStudyLink from 'components/caseStudyLink'

export default function Support({ products, caseStudies }) {
    return (
        <div className={styles.casestudiesPage}>
            <Head>
                <title>Case Studies | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products} />
            <main>
                <h2 className={styles.casestudiesPageTitle} data-aos="fade-down">Our Case Studies</h2>
                <p className={styles.casestudiesPageDesc} data-aos="fade-down" data-aos-delay={100}>Nothing demonstrates our problem solving ability and expertise more than real-world examples. The case studies below illustrate how ALLUVIUM has risen to the toughest challenges, ensured business growth and supported businesses across the globe.</p>
                <div className={styles.casestudiesList} data-aos="fade-up" data-aos-delay={100}>
                    {
                        caseStudies.map(caseStudy => {
                            return <CaseStudyLink key={caseStudy.id} caseStudy={ caseStudy }/>
                        })
                    }
                </div>
            </main>
        </div>
    )
}


export const getStaticProps = async () =>{

    return {
      props:{
        products: productData,
        caseStudies: caseStudiesData
      }
    }
  }
