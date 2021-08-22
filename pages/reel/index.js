import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../../components/navigation'
import ProductReel from 'components/productReel'
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
        <div className={ styles.reelPageHeader }>
          <h3>We want you to know you are in safe hands, here’s a preview of previously done projects.</h3>
        </div>
        <div className={styles.photoGallery}>
          {
            gallery.map((product,index)=>{
              return <ProductReel product={product} key={ index }/>
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