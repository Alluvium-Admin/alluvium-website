import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../../components/navigation'
import styles from '../../styles/reelpage.module.scss'
// import { baseURL } from '../../config'
import { galleryLinks, productData } from '../../data'


export default function Reel({gallery,products}) {
  return (
    <div className={styles.reelPage}>
      <Head>
        <title>Project Reel | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation theme={"dark"} products={products}/>
      <main>
        <div className={styles.hireUsLink}>
          <Link href="/support"> + Hire us</Link>
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
  return{
    props:{
      gallery:galleryLinks,
      products: productData
    }
  }
}