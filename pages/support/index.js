import Head from 'next/head'
// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/supportpage.module.scss'
import Navigation from '../../components/navigation'
import FaqPage from '../../components/faqPage'
// import SupportSubmenu from '../../components/supportSubmenu'
import BannerRotate from "../../components/BannerRotate";
// import { baseURL } from '../../config'
import { faqData,productData } from '../../data'

export default function Support({faqs,products}) {
  return (
    <div className={styles.supportPage}>
      <Head>
        <title>Support | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"} products={products} />
	    <BannerRotate bg="url(assets/support/banner.png)" title="Frequently Asked Questions" text="" />
      <main>
        {/* <SupportSubmenu/> */}
        <div className={styles.supportDisplay}>
          	<FaqPage faqs={ faqs } />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{

  return {
    props:{
      faqs: faqData,
      products: productData
    }
  }
}