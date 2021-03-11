import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Reel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
            Project Reels
      </main>
    </div>
  )
}