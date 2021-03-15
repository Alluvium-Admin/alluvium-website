import React from 'react'
import Image from 'next/image'
import projectPreview from './projectPreview'


export default function Product({details}){
    return(
        <main className="productDisplay">
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
                        details.moreImgs
                    }
                </div>
                <div className="keyPoints">
                    <h3 className="title">Key points</h3>
                    <ol>
                        {
                            details.keyPoints
                        }
                    </ol>
                </div>
            </section>
            <section className="moreProjects">
                <h3 className="title">More projects</h3>
                <div className="projects">
                    {
                        
                    }
                </div>
            </section>
        </main>
    )
}