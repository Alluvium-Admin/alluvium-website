import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Navigation from '../../components/navigation'
import FaqPage from '../../components/faqPage';

export default function Support() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
        <div className="supportSubmenu">
          <button>+ Schedule a meeting</button>
          <button>+ Contact us</button>
        </div>
        <div className="supportDisplay">
          <FaqPage/>
        </div>
      </main>
    </div>
  )
}