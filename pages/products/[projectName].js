import React,{ useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { server } from '../../config'
import Navigation from '../../components/navigation'
import ProductPreview from '../../components/productPreview'
import styles from '../../styles/productpage.module.scss';
import ShareOption from '../../components/shareOption';
import { productData } from '../../data'


export default function Product({product,products}){
    const { details } = product;
    const [ shareOptions, setShareOptions ] = useState(false);
    const router = useRouter();

    
    return(
        <div className={styles.productPage}>
            <Head>
                <title>{details.productName} | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products}/>
            <main className={styles.product}>
                <section className={styles.productHeader}>
                    <div style={{backgroundColor: details.productBg}} className={styles.productPageHeader}>
                        <img src={details.productImg} alt={`${details.productName}`} data-aos="fade-right"/>
                        <div className={styles.productUsage} data-aos="fade-right">
                            <h3>{details.productHeader}</h3>
                            <div className={styles.usageBtns}>
                                <a href={details.productLink} className={styles.tryBtn} target="_blank" rel="noopener noreferrer" data-aos-delay="300" data-aos="fade-down">Check it out</a>
                                <a href={details.ytLink} className={styles.videosBtn} style={{background: details.videosBtnBg}} target="_blank" rel="noopener noreferrer" data-aos-delay="500" data-aos="fade-down">Watch Videos</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.productPageDetails}>
                        <h5 className={styles.productName}>{details.productName}</h5>
                        <h2 className={styles.productTitle}>{details.productHeader}</h2>
                        <div className={styles.shareOptions}>
                            <button className={styles.shareBtn} onClick={()=>setShareOptions(shareOptions=>!shareOptions)}>
                                <span>+</span>
                                <p>Share Product</p>
                            </button>
                            <ShareOption
                                shareOptions={ shareOptions }
                                setShareOptions={ setShareOptions }
                                server={ server }
                                router={ router }  
                            />
                        </div>
                        <h4 className={styles.productSubtitle}>{product.subtitle}</h4>
                    </div>
                    
                    {/* <div className={styles.productDetails}>
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
                    </div> */}
                </section>
                <section className={styles.product}>
                    {/* <div className={styles.productInfo}>
                        <p>{details.productInfo}</p>
                    </div>
                    <div className={styles.moreImgs}>
                        {
                            details.moreImgs.map((img,index)=>{
                                <img src={img} key={index} alt={`${details.productName}`}/>
                            })
                        }
                    </div> */}
                    <div className={styles.keyPoints}>
                        <h3 className={styles.title}>Key points</h3>
                        <ul>
                            {
                                details.keyPoints.map((keyPoint,index)=>{
                                    return(
                                        <li key={index}>
                                            <h3>{keyPoint.title}</h3>
                                            <p>{keyPoint.body}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.usageBtns}>
                        <a href={details.productLink} className={styles.tryBtn} target="_blank" rel="noopener noreferrer">Check it out</a>
                        <a href={details.ytLink} className={styles.videosBtn} target="_blank" rel="noopener noreferrer">Watch Videos</a>
                    </div>
                </section>
                <section className={styles.moreProjects}>
                    <h3 className={styles.title}>More products</h3>
                    <div className={styles.projects}>
                        {
                            products.map((project)=>{
                                return(
                                    <ProductPreview
                                        title={ project.title } 
                                        subtitle={ project.subtitle } 
                                        imgLink={ project.imgLink }
                                        previewImgLink={ project.previewImgLink }
                                        productName={ project.projectName }
                                        key={ project.id }
                                        location={"more_products"}
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
            product:productsArr[0],
            products:productData
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