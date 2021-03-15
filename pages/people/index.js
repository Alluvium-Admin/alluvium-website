import Head from 'next/head'
import Link from 'next/link'
import Profile from '../../components/profile'
import styles from '../../styles/Home.module.css'
import Navigation from '../../components/navigation'

const alluviansData = [
  {
    firstName:"taiwo",
    lastName:"ojo",
    role:"Founder/Team lead",
    email:"taiwo@alluvium.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"ibukun",
    lastName:"akilo",
    role:"Founder/Team Lead",
    email:"ibukunakilo@gmail.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"enyioma",
    lastName:"osondu",
    role:"Backend engineer",
    email:"enyioma.osondu@geniesys.co.uk",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"stanley",
    lastName:"onwuka",
    role:"Frontend engineer",
    email:"stanley@geniesys.co.uk",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"ayodamola",
    lastName:"alonge",
    role:"UI/UX Designer",
    email:"pelumi@geniesys.co.uk",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"damilola",
    lastName:"daramola",
    role:"Employee",
    email:"daramola@geniesys.co.uk",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"adeola",
    lastName:"lawal",
    role:"Employee",
    email:"adeola@geniesys.co.uk",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"isaac",
    lastName:"temidayo",
    role:"Employee",
    email:"isaac@geniesys.co.uk",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"precious",
    lastName:"charles",
    role:"Employee",
    email:"charlespreciousa@gmail.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"francis",
    lastName:"okeke",
    role:"Employee",
    email:"okeke98@gmail.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"idiongette",
    lastName:"enimini",
    role:"Employee",
    email:"idiongette@alluvium.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"yusuf",
    lastName:"braimoh",
    role:"Employee",
    email:"yusuf@alluvium.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"georgette",
    lastName:"idrissou",
    role:"Employee",
    email:"georgette@alluvium.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"anjola",
    lastName:"oyelakin",
    role:"Employee",
    email:"anjolly@alluvium.com",
    imgUrl:"/assets/test.png"
  },
  {
    firstName:"adegboyega",
    lastName:"adesanya",
    role:"Employee",
    email:"adeadesanya2015@gmail.com",
    imgUrl:"/assets/test.png"
  },
]

export default function People() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
          <section className="alluviansPageHeader">
            <div className='pageTitle'>
              <h4>People of Alluvium</h4>
              <div className="hireUsLink">
                <Link href="">+ Hire us</Link>
              </div>
            </div>
            <h2 className="title">Alluvians? You guessed right!</h2>
            <p className="subtitle">We’re a force field of different bodies and lorem ipsum dolot amer, supraem tullet viem</p>
          </section>
          <section className="alluviansGallery">
            {
              alluviansData.map((alluvian,idx)=>{
                return(
                  <Profile
                    firstName={ alluvian.firstName }
                    lastName={ alluvian.lastName }
                    role={ alluvian.role }
                    pictureLink={ alluvian.imgUrl }
                    email={ alluvian.email }
                    key={ idx }
                  />
                ) 
              })
            }
          </section>
          <section className="scheduleMeetingLink">
            <div className="scheduleMeetingHeader">
              <p className="title">
                Launching a new product? Re-vitalising existing 
                application? Want to spark new emotions?
              </p>
              <p className="subtitle">
                We can help you through the thought process, help you align your ideas with 
                proper execution.
              </p>
            </div>
            <div className="contactInfo">
              <p className="mailContact">
                Send a mail to: <Link href="/">work@alluvium.com</Link>
              </p>
              <p className="mailContact">
                Enquiries? Mail to: <Link href="/">enquiries@alluvium.com</Link>
              </p>
            </div>
          </section>
      </main>
    </div>
  )
}