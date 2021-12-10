import Head from 'next/head'
import styles from '../../../styles/casestudiespage.module.scss'
import Navigation from '../../../components/navigation'
import { productData } from '../../../data'

export default function Support({ products }) {
    return (
        <div className={styles.casestudiesPage}>
            <Head>
                <title>Case Studies | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products} />
            <main>
                <h2 className={styles.casestudiesPageTitle}>Our Case Studies</h2>
                <p className={styles.casestudiesPageDesc}>Nothing demonstrates our problem solving ability and expertise more than real-world examples. The case studies below illustrate how ALLUVIUM has risen to the toughest challenges, ensured business growth and supported businesses across the globe.</p>
                <div className={styles.casestudiesList}>

                </div>
            </main>
        </div>
    )
}


export const getStaticProps = async () =>{

    return {
      props:{
        products: productData
      }
    }
  }
