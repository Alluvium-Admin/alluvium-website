import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import styles from '../../styles/reelpage.module.scss'
// import { baseURL } from '../../config'
import { clientTestimonies,productData } from '../../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonal from '../../components/testimonal'


export default function Reel({ products }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.reelPage}>
      <Head>
        <title>Project Reel | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"} products={products}/>
      <main>
        <div className={styles.hireUsLink}>
          <Link href="/reel/case-studies"> + View Our Case Studies</Link>
        </div>
        <section className={styles.reelPageHeader}>
          <div className={styles.header}>
            <div className={styles.titleContainer} data-aos="fade-down">
              <div className={styles.title}>
                <div className={styles.titleVector}>
                  <img src={"/assets/our-projects-vector.svg"} alt="Project Reel Title" />
                </div>
                <h3>Our <br/> Projects</h3>
              </div>
              <p className={styles.subtitle} >We want you to know you are in safe hands, here’s a preview of previously done projects.</p>
            </div>
            <div className={styles.titleImg} data-aos="fade-down">
              <img src="https://res.cloudinary.com/geniesys/image/upload/v1639555142/Alluvium%20Website/our-projects_ffyhox.png" alt="Project Reel"/>
            </div>
          </div>
        </section>
        <section className={styles.projectReelList} id="projectReelList">
          <div className={styles.projectReel}>
            <h3 className={styles.projectReelTitle}>Agile Way of Working implementation on a large scale at a top tier UK bank.</h3>
            <p className={styles.projectReelInfo}>
              We helped a major UK bank set up an entirely new way of working by using Atlassian tools and process in conjunction with their existing legacy tools. This delivery included meeting compliance standard to satisfy the stringent ISO and Audit requirements of the compliance department of the institution.
              This helped to bring structure and organisation during this massive change.
              Part of the legacy systems and tools involved in the migration included taiga.io, migration of 2 Jira servers to Jira Cloud and integration of SharePoint with Confluence.
            </p>
          </div>
          <div className={styles.projectReel}>
            <h3 className={styles.projectReelTitle}>Deploying Atlassian Tools to support Project/Delivery Lifecycle / Governance with a major UK Telco</h3>
            <p className={styles.projectReelInfo}>
              At the time a major telco company was going through a multimillion-pound transformation program, we came to help bring structure, simplicity, and scalability to their Safe Agile way of working adoption. This required restructuring of the entire Atlassian product set up, setting up of new configuration to help with progress reporting using advanced roadmap and BigGant, dependency tracking  using Big Picture solution board.
              As part of the delivery, regular training and workshops were organised and delivered by our team to get the clients staffs comfortable with the tools usage.
            </p>
          </div>
          <div className={styles.projectReel}>
            <h3 className={styles.projectReelTitle}>Jira Server/Jira Service Desk Migration</h3>
            <p className={styles.projectReelInfo}>
              The client had their instance being hosted on a 3rd party’s server and wanted options when it was time to renew the hosting license, the client wanted options that would help reduce cost and improve efficiency within their delivery.
              A feasibility report was provided to compare but on prem and cloud hosting of Atlassian and a cost benefit analysis was provide, once all the security questions and checks were satisfactorily answered, the client took the cloud recommendation
              and we proceeded to set up Atlassian cloud products (Jira, Confluence and Jira Service Desk) and then migrated the existing 3rd party hosted instances to the cloud in a timely manner to prevent them from getting double billed as their license was almost ready for renewal.
              This delivery included setting up of new reporting dashboard for the different teams, workflows, automation around their change and ticket management processes as ell as building a customer centric service desk portal.
            </p>
          </div>
        </section>
        {/* <section className={styles.testimonalSection}>
          <h4 className={styles.testimonalSectionTitle}>WHAT OUR CLIENTS SAY</h4>
          <div className={styles.testimonalSectionList}>
            <Slider {...settings}>
              {
                clientTestimonies.map((client, idx) => {
                  return <Testimonal key={idx} client={client} />
                })
              }
            </Slider>
          </div>
        </section> */}
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{
  return{
    props:{
      products: productData,
      clientTestimonies : clientTestimonies
    }
  }
}