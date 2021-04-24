import Head from 'next/head'
import styles from '../../styles/supportpage.module.scss'
import Navigation from '../../components/navigation'
import FaqPage from '../../components/faqPage'
import SupportSubmenu from '../../components/supportSubmenu'
// import { baseURL } from '../../config'
import { faqData } from '../../data'

export default function Support({faqs}) {
  return (
    <div className={styles.supportPage}>
      <Head>
        <title>Support | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"} />
      <main>
        <SupportSubmenu/>
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
      faqs: faqData
    }
  }
}