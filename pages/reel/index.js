import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../../components/navigation'
import styles from '../../styles/Home.module.css'

const galleryLinks = [
  {
    imgName:"/assets/featuresImg.png",
    imgAlt:"reel",
    width:200,
    height:200
  },
  {
    imgName:"/assets/featuresImg.png",
    imgAlt:"reel",
    width:200,
    height:200
  },
]

export default function Reel() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
        <div className="hireUsLink">
          <Link href="/enquiries"> + Hire us</Link>
        </div>
        <div className="photoGallery">
          {
            galleryLinks.map((photo,index)=>{
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