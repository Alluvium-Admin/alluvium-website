import React,{ useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { baseURL } from '../../config'
import Navigation from '../../components/navigation'
import ProjectPreview from '../../components/projectPreview'
import styles from '../../styles/productpage.module.scss';
import ShareOption from '../../components/shareOption';
import { productData } from '../../data'


export default function Project({project,projects}){
    const { details } = project;
    const [ shareOptions, setShareOptions ] = useState(false);
    const router = useRouter();

    
    return(
        <div className={styles.productPage}>
            <Head>
                <title>{details.productName} | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"}/>
            <main className={styles.product}>
                <section className={styles.productHeader}>
                    <h5 className={styles.productName}>{details.productName}</h5>
                    <h2 className={styles.productTitle}>{details.productTitle}</h2>
                    <div className={styles.shareOptions}>
                        <button className={styles.shareBtn} onClick={()=>setShareOptions(shareOptions=>!shareOptions)}>
                            <span>+</span>
                            <p>Share Project</p>
                        </button>
                        <ShareOption
                            shareOptions={ shareOptions }
                            baseURL={ baseURL }
                            router={ router }  
                        />
                    </div>
                    <h4 className={styles.productSubtitle}>{details.productSubtitle}</h4>
                    <div className={styles.productDetails}>
                        <div className={styles.productLead}>
                            <h3>Product Lead</h3>
                            <p>{details.productLead}</p>
                        </div>
                        <div className={styles.client}>
                            <h3>Client</h3>
                            <p>{details.client}</p>
                        </div>
                        <div className={styles.date}>
                            <h3>Date</h3>
                            <p>{details.date}</p>
                        </div>
                    </div>
                </section>
                <section className={styles.product}>
                    <div className={styles.productImg}>
                        <Image src={details.productImg} width={1440} height={580}/>
                    </div>
                    <div className={styles.productInfo}>
                        <p>{details.productInfo}</p>
                    </div>
                    <div className={styles.moreImgs}>
                        {
                            details.moreImgs.map((img,index)=>{
                                <Image src={img} width={200} height={100} key={index}/>
                            })
                        }
                    </div>
                    <div className={styles.keyPoints}>
                        <h3 className={styles.title}>Key points</h3>
                        <ol>
                            {
                                details.keyPoints.map((keyPoint,index)=>{
                                    return(
                                        <li key={index}>{keyPoint}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </section>
                <section className={styles.moreProjects}>
                    <h3 className={styles.title}>More projects</h3>
                    <div className={styles.projects}>
                        {
                            projects.map((project)=>{
                                return(
                                    <ProjectPreview
                                        title={ project.title } 
                                        subtitle={ project.subtitle } 
                                        imgLink={ project.imgLink }
                                        projectName={ project.projectName }
                                        key={ project.id }
                                        location={"more_projects"}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}


export const getStaticProps = async ({params}) =>{
    const productsArr = productData.filter(p =>p.projectName.toString() === params.projectName )
    return {
        props:{
            project:productsArr[0],
            projects:productData
        }
    }
}

export const getStaticPaths = async ()=>{
    const paths = productData.map(product=>
        ({params: { projectName: product.projectName.toString() }
    }))

    return{
        paths,
        fallback: false,
    }

}