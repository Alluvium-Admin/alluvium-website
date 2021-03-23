import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../../components/navigation'
import styles from '../../styles/Home.module.css'
import { server } from '../../config'


export default function Reel({gallery}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Project Reel | Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
        <div className="hireUsLink">
          <Link href="/enquiries"> + Hire us</Link>
        </div>
        <div className="photoGallery">
          {
            gallery.map((photo,index)=>{
              const {imgName,imgAlt,width,height}=photo
              return(
                <div className="photo" key={index}>
                  <Image src={imgName} width={width} height={height} alt={imgAlt} />
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