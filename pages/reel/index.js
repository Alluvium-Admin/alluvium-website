import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../../components/navigation'
import styles from '../../styles/reelpage.module.scss'
import { server } from '../../config'


export default function Reel({gallery}) {
  return (
    <div className={styles.reelPage}>
      <Head>
        <title>Project Reel | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"}/>
      <main>
        <div className={styles.hireUsLink}>
          <Link href="/enquiries"> + Hire us</Link>
        </div>
        <div className={styles.photoGallery}>
          {
            gallery.map((photo,index)=>{
              const {imgLink,imgAlt}=photo
              return(
                <div className={styles.photo} key={index}>
                 <img src={imgLink} alt={imgAlt}/>
                </div>
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () =>{
  const res = await fetch(`${server}/api/gallery`)
  const gallery = await res.json()

  return{
    props:{
      gallery
    }
  }
}