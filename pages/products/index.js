import Head from 'next/head'
import Link from 'next/link'
import MainProjectPreview from '../../components/mainProjectPreview'
import Navigation from '../../components/navigation'
import styles from '../../styles/Home.module.css'

const projectData = [
  {
    title:"Cloud Counter",
    subtitle:"Employ our fast and efficient cloud counter to keep count of your resources",
    imgLink:"/assets/Secure.svg",
    projectLink:"",
    details:{
      productName:"Cloud Counter",
      productTitle:"Resource count? No worries.",
      productSubtitle: "Get The Most out of Jira Software Cloud with our Quick and Easy Resource Counter.",
      productLead:"Taiwo Ojo",
      client:"alluvium",
      date: "September 2020",
      productImg: '/assets/test.png',
      productInfo: "Sollicitudin risus aenean et, tellus tellus hendrerit senectus in. Quis senectus quam sed nunc id vulputate purus. Volutpat sit pretium a vitae. Eget sapien leo purus non libero, purus nunc, sit sed. In lobortis morbi at cras ultrices tristique. Aliquam in proin sed ultricies dignissim orci aliquet. Sagittis, massa nam dui quis est praesent. Eu quisque sed tincidunt nisl. At nulla blandit urna aenean. Diam auctor libero egestas fermentum metus condimentum nisi aenean urna. Ultrices iaculis leo id tempus magna orci. Eleifend risus, integer mauris consectetur at purus facilisis proin facilisi. Convallis egestas porta ullamcorper habitant viverra feugiat. Pellentesque orci consequat porttitor aenean sit nam velit viverra rhoncus. Velit, enim et massa sed diam neque amet aenean interdum. Et, in amet tempor, dui, tempus blandit sit egestas. Eu sollicitudin quisque neque, mi duis tellus ornare fermentum. Tempor nibh sed proin amet enim ut egestas gravida pretium. Et vehicula semper quam nulla. Orci orci eget tellus id. Tincidunt imperdiet dui etiam tellus. Aenean adipiscing commodo, augue purus in donec tellus augue. Sit tellus vitae rhoncus sed at urna, nibh vitae habitant. Elit, rhoncus, fringilla aenean mauris nunc sapien nibh nunc. Mauris pulvinar est venenatis diam pharetra venenatis suspendisse donec. Ac risus etiam pretium tincidunt. Mauris sapien fames senectus elementum phasellus sed nec at. Faucibus diam est eu et in eget potenti risus adipiscing. Eu enim auctor non dignissim. Velit ac at morbi vitae gravida adipiscing elit odio cras. Ultrices tristique ullamcorper lorem egestas etiam a. Tristique ullamcorper",
      moreImgs: [ "/assets/test.png","/assets/test.png" ],
      keyPoints: [
        "Quis nisl elementum nunc in. Egestas urna consectetur risus neque, euismod aliquam dictum. Mi at scelerisque tristique",
        "Matoque vulputate pellentesque felis. Dignissim aliquet amet, sit augue diam. Massa hac lorem iaculis senectus diam feugiat tristique.",
        "Tugue purus in donec tellus augue. Sit tellus vitae rho"
      ],
    },
  },
  {
    title:"CJR: Compare Jira Resources",
    subtitle:"Compare Jira Resources is an efficient way to check that you have fully migrated",
    imgLink:"/assets/Simple.svg",
    projectLink:"",
    details:{
      productName:"CJR",
      productTitle:"Compare Jira Resources",
      productSubtitle: "Validate success of your migration, Compare Source & For Accuracy of Jira.",
      productLead:"Taiwo Ojo",
      client:"alluvium",
      date: "November 2020",
      productImg: '/assets/test.png',
      productInfo: "Sollicitudin risus aenean et, tellus tellus hendrerit senectus in. Quis senectus quam sed nunc id vulputate purus. Volutpat sit pretium a vitae. Eget sapien leo purus non libero, purus nunc, sit sed. In lobortis morbi at cras ultrices tristique. Aliquam in proin sed ultricies dignissim orci aliquet. Sagittis, massa nam dui quis est praesent. Eu quisque sed tincidunt nisl. At nulla blandit urna aenean. Diam auctor libero egestas fermentum metus condimentum nisi aenean urna. Ultrices iaculis leo id tempus magna orci. Eleifend risus, integer mauris consectetur at purus facilisis proin facilisi. Convallis egestas porta ullamcorper habitant viverra feugiat. Pellentesque orci consequat porttitor aenean sit nam velit viverra rhoncus. Velit, enim et massa sed diam neque amet aenean interdum. Et, in amet tempor, dui, tempus blandit sit egestas. Eu sollicitudin quisque neque, mi duis tellus ornare fermentum. Tempor nibh sed proin amet enim ut egestas gravida pretium. Et vehicula semper quam nulla. Orci orci eget tellus id. Tincidunt imperdiet dui etiam tellus. Aenean adipiscing commodo, augue purus in donec tellus augue. Sit tellus vitae rhoncus sed at urna, nibh vitae habitant. Elit, rhoncus, fringilla aenean mauris nunc sapien nibh nunc. Mauris pulvinar est venenatis diam pharetra venenatis suspendisse donec. Ac risus etiam pretium tincidunt. Mauris sapien fames senectus elementum phasellus sed nec at. Faucibus diam est eu et in eget potenti risus adipiscing. Eu enim auctor non dignissim. Velit ac at morbi vitae gravida adipiscing elit odio cras. Ultrices tristique ullamcorper lorem egestas etiam a. Tristique ullamcorper",
      moreImgs: [ "/assets/test.png","/assets/test.png" ],
      keyPoints: [
        "Quis nisl elementum nunc in. Egestas urna consectetur risus neque, euismod aliquam dictum. Mi at scelerisque tristique",
        "Matoque vulputate pellentesque felis. Dignissim aliquet amet, sit augue diam. Massa hac lorem iaculis senectus diam feugiat tristique.",
        "Tugue purus in donec tellus augue. Sit tellus vitae rho"
      ],
    },
  },
]

export default function Products() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alluvium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <main>
          <section className="projectPageTitle">
            <div className="subtitle">
              <p>we help you</p>
            </div>
            <div className="titleGroup">
              <p className="title">Analyze your ideas.</p>
              <p className="title">Create unique experiences.</p>
              <p className="title">Strengthen your Customer base.</p>
            </div>
          </section>
          <section className="projects">
            {
              projectData.map((project,index)=>{
                <MainProjectPreview
                  title={ project.title } 
                  subtitle={ project.subtitle } 
                  imgLink={ project.imgLink }
                  projectLink={ project.projectLink }
                  key={ index }
                />
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
            <div className="linkBtn">
              + <Link href="/contact">Schedule a meeting</Link>
            </div>
          </section>
      </main>
    </div>
  )
}