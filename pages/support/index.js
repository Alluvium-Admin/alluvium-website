import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Navigation from '../../components/navigation'
import FaqPage from '../../components/faqPage'
import SupportSubmenu from '../../components/supportSubmenu'
import { server } from '../../config'

export default function Support({faqs}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Support | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
        <SupportSubmenu/>
        <div className="supportDisplay">
          <FaqPage faqs={ faqs } />
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`${server}/api/faqs`)
  const faqs = await res.json() 

  return {
    props:{
      faqs
    }
  }
}