import Head from 'next/head'
import Link from 'next/link'
// import { baseURL } from '../../config'
import ProductPreview from '../../components/productPreview'
import Navigation from '../../components/navigation'
import styles from '../../styles/productspage.module.scss'
import { productData } from '../../data'

export default function Products({products}) {
  return (
    <div className={styles.productsPage}>
      <Head>
        <title>Products | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"} products={products}/>
      <main>
          <section className={styles.projectPageTitle}>
            <div className={styles.subtitle} data-aos="fade-down" data-aos-delay="400">
              <p>we help you</p>
            </div>
            <div className={styles.titleGroup}>
              <p className={styles.title} data-aos="fade-down" data-aos-delay="600">Analyze your ideas.</p>
              <p className={styles.title}  data-aos="fade-down" data-aos-delay="800">Create unique experiences.</p>
              <p className={styles.title}  data-aos="fade-down" data-aos-delay="1000">Strengthen your Customer base.</p>
            </div>
          </section>
          <section className={styles.projects}>
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
                    location={"products"}
                  />
                )
                
              })
            }
          </section>
          <section className={styles.statusPageLink}>
            <div className={styles.productImgs} data-aos="fade-left">
              <img className={styles.productImg} src={"https://res.cloudinary.com/geniesys/image/upload/v1625169799/Alluvium%20Website/Group_1_nterzr.png"}/>
            </div>
            <div className={styles.statusLink}>
              <h3 className={styles.linkTitle} data-aos="fade-down">Check the <span>status</span> of our products</h3>
              <div className={styles.linkBtn} data-aos="fade-down" data-aos-delay="100">
                + <Link href="/products/statuspage">Click here</Link>
              </div>  
            </div>
          </section>
          <section className={styles.scheduleMeetingLink}>
            <div className={styles.scheduleMeetingHeader}>
              <p className={styles.title} data-aos="fade-right">
                Launching a new product? Re-vitalising existing 
                application? Want to spark new emotions?
              </p>
              <p className={styles.subtitle} data-aos="fade-right" data-aos-delay="300">
                We can help you through the thought process, help you align your ideas with 
                proper execution.
              </p>
            </div>
            <div className={styles.linkBtn} data-aos="fade-right" data-aos-delay="400">
              + <Link href="/support/contact">Schedule a meeting</Link>
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