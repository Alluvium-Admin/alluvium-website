import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import styles from '../../styles/about.module.scss'
import { productData } from '../../data'

export default function Products({products}) {
  return (
    <div className={styles.aboutUsPage}>
        <Head>
        <title>About us | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation theme={"dark"} products={products}/>
        <main>
            <section className={styles.ourStory}>
                <h2 className={styles.ourStoryTitle} data-aos="fade-down">Our Story</h2>
                <div className={styles.ourStoryBody}>
                    <div className={styles.ourStoryContent}>
                        <p>
                            It was the summer of 2016, Taiwo, formerly of the Big Four, had been brought into a large UK Bank digital transformation programme to consolidate their project management tool estate into one consolidated Atlassian toolset, was joined by Wale, also formerly of the Big Four, to establish an Agile Way of Working. The synergy was instant and long lasting.
                        </p>
                        <p>
                            The tools supported the controls, deployment and scaling of the new way of working while the methodology utilised and maximised the Atlassian toolset.
                        </p>
                        <p>
                            We had to consolidate data and configuration from several third-party application, couple of Jira instances to a single new Jira instance. Same for documentation storage and dev ops tools. All the while building, integrating to, and reporting from a new data lake.
                        </p>
                        <p>
                            After the success of that programme, we went to repeat a similar delivery for one of UK's biggest telecom providers.
                        </p>
                        <p>
                            We have since delivered some of the largest Atlassian tools Consolidation and accompanying Administration, Engineering, Integration, and long-term Support of the Atlassian products for all ways of working. 
                        </p>
                        <p>
                            We routinely put back into the customers' pockets, 15 – 45% of their annual licence costs, by consolidating and scaling their use of Jira, Confluence, Bitbucket and other Atlassian products, from multiple Atlassian and third-party applications. 
                        </p>  
                    </div>
                    <div className={styles.ourStoryImg} data-aos-delay={"200"} data-aos="zoom-in">
                        <img src={require('../../public/assets/engineer.svg')} />        
                    </div>
                </div>
            </section>
            <section className={styles.reasonsSection}>
                <h2 className={styles.reasonsSectionTitle}>Reasons to go with us ?</h2>
                <div className={styles.reasonsList}>
                    <div className={styles.reason} data-aos="fade-up">
                        <h3 className={styles.title}>Digital Transformation Experience</h3>
                        <p className={styles.description}>
                            Server to Cloud is the future, let us get you there securely, simply and at scale.
                        </p>
                    </div>
                    <div className={styles.reason} data-aos-delay={"200"} data-aos="fade-up">
                        <h3 className={styles.title}>Global Presence</h3>
                        <div className={styles.description}>
                            <p>Industry leading Experience across all Atlassian Migration use cases</p>
                            <ol type="a">
                                <li>Server to DC</li>
                                <li>Server to Cloud</li>
                                <li>Cloud to Server/DC</li>
                                <li>Any combination of the above</li>
                            </ol>
                        </div>
                    </div>
                    <div className={styles.reason} data-aos-delay={"300"} data-aos="fade-up">
                        <h3 className={styles.title}>Speed and Scale</h3>
                        <p className={styles.description}>
                            Agile Introduction and Scaling
                        </p>
                    </div>
                </div>
                <div className={styles.reasonsImg}>
                    <img src={require('../../public/assets/coworking.svg')} alt="coworking"/>   
                </div>  
            </section>
            <section className={styles.cultureMattersSection} data-aos="fade-up">
                <h2 className={styles.cultureMattersSectionTitle}>Culture Matters</h2>
                <div className={styles.cultureMattersContainer}>
                    <p>Distributed team of British trained Atlassian Engineers with highest GDPR Data Protection qualifications working remotely from British Computers.</p> 
                </div>
            </section>
            <section className={styles.foundersSection}>
                <h2 className={styles.foundersSectionTitle}>Meet the Founders</h2>
                <div className={styles.founders}>
                    <div className={styles.founder} data-aos="fade-up">
                        <div className={styles.founderImg}>
                            <img src="https://res.cloudinary.com/geniesys/image/upload/ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_1000/v1638165393/Alluvium%20Website/Team(new)/jt_pics_2-removebg-preview_1_ft8jdd.png" alt="Taiwo"/>
                        </div>
                        <div className={styles.founderInfo}>
                            <h3 className={styles.founderName}>Taiwo Ojo</h3>
                            <h3 className={styles.founderRole}>Co-founder</h3>  
                            <p className={styles.founderDesc}>
                                With more than a decade, award-winning experience Administering, Engineering, Migrating, Integrating, Upgrading, Security Patching, Scripting, Supporting, and building custom applications, macros and extensions for the Atlassian tool set across Financial Services, FinTech, Health, Fashion, Entertainment, Telecoms, Securities & Exchange, Food and Transport and other industries, Taiwo is a Prince II, Agile and GDPR Practitioner <br/> <br/>
                                An Arsenal supporter, Taiwo love football, books and food in his leisure time.      
                            </p>      
                        </div>
                    </div>
                    <div className={styles.founder} data-aos="fade-up">
                        <div className={styles.founderImg}>
                            <img src="https://res.cloudinary.com/geniesys/image/upload/ar_1:1,bo_0px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_1000/v1638165393/Alluvium%20Website/Team(new)/oga_wale_white_bg_zhshnj.png" alt="Wale" />
                        </div>
                            <div className={styles.founderInfo}>
                            <h3 className={styles.founderName}>Wale Olojo</h3>
                            <h3 className={styles.founderRole}>Co-founder</h3>  
                            <p className={styles.founderDesc}>
                                An experienced Technical IT Consultant with a proven track record of supporting and delivering major complex end-to-end programmes including large Atlassian Tool migrations, operating within diverse sectors including retail, telecoms, energy and financial services. Highly adept at project, programme, and portfolio management.
                                Embeds best practices and takes control for the entire lifecycle management from initiation, planning, governance, and stakeholder relationship management, through to progress reporting, risk management, quality assurance and financial controls, to safeguard the delivery of large-scale initiatives.<br/><br/>
                                Wale also supports Arsenal and enjoys football – real and virtual, and travel.
                            </p>
                        </div>
                    </div>  
                </div>  
            </section>  
        </main>
    </div>
    )
}


export const getStaticProps = async () =>{
    return{
      props:{
        products:productData,
      }
    }
  }