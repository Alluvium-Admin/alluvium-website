import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { server } from '../../config'
import Navigation from '../../components/navigation'
import ProjectPreview from '../../components/projectPreview'


export default function Product({product,products}){
    const { details } = product;
    
    return(
        <div className="productPage">
            <Head>
                <title>Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation/>
            <main className="product">
                <section className="productHeader">
                    <h5 className="productName">{details.productName}</h5>
                    <h2 className="productTitle">{details.productTitle}</h2>
                    <button className="shareBtn">
                        + <p>Share Project</p>
                    </button>
                    <h4 className="productSubtitle">{details.productSubtitle}</h4>
                    <div className="productDetails">
                        <div className="productLead">
                            <h3>Product Lead</h3>
                            <p>{details.productLead}</p>
                        </div>
                        <div className="client">
                            <h3>Client</h3>
                            <p>{details.client}</p>
                        </div>
                        <div className="date">
                            <h3>Date</h3>
                            <p>{details.date}</p>
                        </div>
                    </div>
                </section>
                <section className="product">
                    <div className="productImg">
                        <Image src={details.productImg} width={1440} height={580}/>
                    </div>
                    <div className="productInfo">
                        <p>{details.productInfo}</p>
                    </div>
                    <div className="moreImgs">
                        {
                            details.moreImgs.map((img,index)=>{
                                <Image src={img} width={200} height={100} key={index}/>
                            })
                        }
                    </div>
                    <div className="keyPoints">
                        <h3 className="title">Key points</h3>
                        <ol>
                            {
                                details.keyPoints.map((keyPoint,index)=>{
                                    return(
                                        <li key={index}>{keyPoint}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>
                </section>
                <section className="moreProjects">
                    <h3 className="title">More projects</h3>
                    <div className="projects">
                        {
                            products.map((project)=>{
                                return(
                                    <ProjectPreview
                                        title={ project.title } 
                                        subtitle={ project.subtitle } 
                                        imgLink={ project.imgLink }
                                        projectName={ project.projectName }
                                        key={ project.id }
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}


// export const getServerSideProps = async (context) =>{

// }

export const getStaticProps = async (context) =>{
    const res = await fetch(`${server}/api/products/${context.params.projectName}`)
    const productRes = await fetch(`${server}/api/products`)

    const product = await res.json()
    const products = await productRes.json()

    return {
        props:{
            product,
            products
        }
    }
}

export const getStaticPaths = async ()=>{
    const res = await fetch(`${server}/api/products`)

    const products = await res.json()

    const ids = products.map((product)=>product.projectName)
    
    const paths = ids.map((id)=>({params: { projectName: id.toString() }}))

    return{
        paths,
        fallback: false,
    }

}