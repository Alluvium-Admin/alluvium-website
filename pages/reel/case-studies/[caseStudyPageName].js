import Head from 'next/head'
import styles from '../../../styles/casestudypage.module.scss'
import Navigation from '../../../components/navigation'
import { productData, caseStudiesData } from '../../../data'

export default function CaseStudy({ caseStudy, products }){
    
    const { details } = caseStudy;
    
    return (
        <div className={styles.caseStudyPage}>
            <Head>
                <title>{ caseStudy.title } | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products} />
            <main>
                <section className={styles.caseStudyHeaderSection}>
                    <h2 className={styles.caseStudyTitle}>{ details.caseStudyTitle }</h2>
                    <div className={styles.caseStudyHeader}>
                        <div className={styles.caseStudyImg}>
                            <img src={ details.caseStudyImg } alt={ details.caseStudyTitle }/>
                        </div>
                        <div className={styles.caseStudyHeaderText}>
                            <p>
                                {details.caseStudyHeaderText}
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.caseStudySituationAndChallenge}>
                    <div className={styles.caseStudySituation}>
                        <div className={styles.caseStudySituationText}>
                            <div className={styles.caseStudySituationHeader}>
                                <span>
                                    <img src="/assets/situation-icon.svg" alt="Situation icon" />
                                </span>
                                <h3>The Situation</h3>
                            </div>
                            <p className={styles.caseStudySituationBody}>
                                {details.caseStudySituation}
                            </p>
                        </div>
                        <div className={styles.caseStudySituationImg}>
                            <img src="/assets/case-studies/situation.png" alt="situation"/>
                        </div>
                    </div>
                    <div className={styles.caseStudyChallenge}>
                        <div className={styles.caseStudyChallengeText}>
                            <div className={styles.caseStudyChallengeHeader}>
                                <span>
                                    <img src="/assets/challenge-icon.svg" alt="Challenge icon" />
                                </span>
                                <h3>The Challenge</h3>
                            </div>
                            <p className={styles.caseStudyChallengeBody}>
                                {details.caseStudyChallenge}
                            </p>
                        </div>
                        <div className={styles.caseStudyChallengeImg}>
                            <img src="/assets/case-studies/challenge.png" alt="Challenge"/>
                        </div>
                    </div>
                </section>
                <section className={styles.caseStudySolutions}>
                    <div className={styles.caseStudySolutionsText}>
                        <div className={styles.caseStudySolutionsHeader}>
                            <h3 className={styles.caseStudySolutionsTitle}>The Solution</h3>
                            <p className={styles.caseStudySolutionSubtitle}>
                                {details.caseStudySolutionSubtitle}
                            </p>
                        </div>
                        <ul className={styles.caseStudySolutionsList}>
                            {
                                details.caseStudySolutions.map((solution, idx) => {
                                    return (
                                        <li className={styles.caseStudySolution} key={idx}>
                                            <img src="/assets/pointer-icon.svg" alt="Pointer Icon"/>
                                            {solution}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className={styles.caseStudySolutionsParagraphs}>
                            {
                                details.caseStudySolutionsParagraphs.map((paragraph, idx) => {
                                    return (
                                        <p className={styles.caseStudySolutionsParagraph} key={idx}>{ paragraph }</p>       
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={styles.caseStudySolutionsImg}>
                        <img src="/assets/case-studies/solution.png" alt="Solution" />
                    </div>
                </section>
                <section className={styles.caseStudyResults}>
                    <h3 className={styles.caseStudyResultsTitle}>The Result</h3>
                    <ul className={styles.caseStudyResultsList}>
                        {
                            details.caseStudyResults.map((result,idx) => {
                                return (
                                    <li className={styles.caseStudyResult} key={idx}>
                                        <img src="/assets/pointer-icon.svg" alt="Pointer Icon"/>
                                        {result}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section className={styles.caseStudyDownload}>
                    <a href={caseStudy.downloadLink} alt={caseStudy.filename} target="_blank" rel="noopener noreferrer">
                        Download Complete Case Study
                        <span>
                            <img src="/assets/download-icon.svg" alt="Download icon" />
                        </span>
                    </a>
                </section>
            </main> 
        </div>
    )
}


export const getStaticProps = async ({params}) =>{
    const caseStudiesArr = caseStudiesData.filter(caseStudy => caseStudy.caseStudyPageName.toString() === params.caseStudyPageName)
    
    return {
        props: {
            caseStudy: caseStudiesArr[0],
            products: productData,
        }
    }
}


export const getStaticPaths = async ()=>{
    const paths = caseStudiesData.map(caseStudy =>
        ({params: { caseStudyPageName: caseStudy.caseStudyPageName.toString() }
    }))

    return{
        paths,
        fallback: false,
    }

}