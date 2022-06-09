// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// import type { NextPage } from "next";
import Head from "next/head";
import Navigation from '../../components/navigation';
import BannerRotate from "../../components/BannerRotate";
// import Footer from "../components/Footer";
import styles from "../../styles/ourproject.module.scss";
import { productData } from '../../data';

const OurProject = ({products}) => {
  return (
    <div>
      <Head>
        <title>Our Projects | Alluvium</title>

        <meta name="description" content="Alluvium University privacy policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
	  	<section className="">
        	<Navigation products={products}/>
        </section>
        <section>
          <BannerRotate bg="url(assets/our-project/banner.png)" title="Our Project" text=""/>
        </section>
		<section className={styles.project}>
			<div className="container pb-5">
				<div>
					<h2 className='text-center pb-4 mx-auto'>We want you to know you are in safe hands here’s a preview of previously done projects.</h2>
				</div>
				
				<div className="bg-sec">
					<div className={styles.projectsection}>

						<h3 className='text-center pb-4 text-white'>Agile Way of Working implementation on a large scale at a top tier UK bank.</h3>

						<p className="text-white">We helped a major UK bank set up an entirely new way of working by using Atlassian tools and process in 	conjunction with their existing legacy tools. This delivery included meeting compliance standard to satisfy the stringent ISO and Audit requirements of the compliance department of the institution.
 						This helped to bring structure and organisation during this massive change.
 						Part of the legacy systems and tools involved in the migration included taiga.io, migration of 2 Jira servers to Jira Cloud and integration of SharePoint with Confluence.
						</p>
					</div>
					
				</div>

				<div className={styles.section2}>
					<div className={styles.projectsection}>
						<h3 className='text-center pb-4'>Deploying Atlassian Tools to support Project/Delivery Lifecycle / Governance with a major UK Telco</h3>
						<p className="text-justify">At the time a major telco company was going through a multimillion-pound transformation program, we came to help bring structure, simplicity, and scalability to their Safe Agile way of working adoption. This required restructuring of the entire Atlassian product set up, setting up of new configuration to help with progress reporting using advanced roadmap and BigGant, dependency tracking  using Big Picture solution board.
						As part of the delivery, regular training and workshops were organised and delivered by our team to get the clients staffs comfortable with the tools usage.
						</p>
					</div>
				</div>

				<div className="bg-pri">
					<div className={styles.projectsection}>
						<h3 className='text-center pb-4 text-white'>Jira Server/Jira Service Desk Migration</h3>
						<p className="text-justify text-white">The client had their instance being hosted on a 3rd party’s server and wanted options when it was time to renew the hosting license, the client wanted options that would help reduce cost and improve efficiency within their delivery.
						A feasibility report was provided to compare but on prem and cloud hosting of Atlassian and a cost benefit analysis was provide, once all the security questions and checks were satisfactorily answered, the client took the cloud recommendation and we proceeded to set up Atlassian cloud products (Jira, Confluence and Jira Service Desk) and then migrated the existing 3rd party hosted instances to the cloud in a timely manner to prevent them from getting double billed as their license was almost ready for renewal.. This delivery included setting up of new reporting dashboard for the different teams, workflows, automation around their change and ticket management processes as ell as building a customer centric service desk portal.
						</p>
					</div>
				</div>

			</div>
		</section>
        
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default OurProject;

export const getStaticProps = async () =>{
    return {
      props:{
        products: productData
      }
    }
}
  