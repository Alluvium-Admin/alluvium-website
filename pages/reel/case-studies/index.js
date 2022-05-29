import Head from 'next/head'
import styles from '../../../styles/casestudiespage.module.scss'
import Navigation from '../../../components/navigation'
import { productData, caseStudiesData } from '../../../data'
import { AltCaseStudyLink } from 'components/caseStudyLink'

export default function Support({ products, caseStudies }) {
    return (
        <div className={styles.casestudiesPage}>
            <Head>
                <title>Case Studies | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products} />
            <section className={styles.hero}>
                <div className={styles.us}>
                    <h1>Our</h1>
                    <h1> Case Studies</h1>
                </div>
            </section>
            <main>
                {/* <h2 className={styles.casestudiesPageTitle} data-aos="fade-down">Our Case Studies</h2> */}
                <p className={styles.casestudiesPageDesc} data-aos="fade-down" data-aos-delay={100}>Nothing demonstrates our problem solving ability and expertise more than real-world examples.</p>
                <div className={styles.casestudiesList} data-aos="fade-up" data-aos-delay={100}>
                    {
                        caseStudies.map(caseStudy => {
                            return <AltCaseStudyLink key={caseStudy.id} caseStudy={caseStudy} />
                        })
                    }
                </div>
            </main>
        </div>
    )
}


export const getStaticProps = async () => {

    return {
        props: {
            products: productData,
            caseStudies: caseStudiesData
        }
    }
}
