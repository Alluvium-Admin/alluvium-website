import React from 'react'
import Faq from '../components/faq'

const faqData = [
    {
      question:"Do you work for European brands only?",
      answer:"No! Our services are extended to other parts of the world. We have good success running through Africa, parts of America and other continents."
    },
    {
      question:"How long does it take to complete projects?",
      answer:"No! Our services are extended to other parts of the world. We have good success running through Africa, parts of America and other continents."
    },
    {
      question:"How much does it cost to develop a software?",
      answer:"No! Our services are extended to other parts of the world. We have good success running through Africa, parts of America and other continents."
    },
    {
      question:"Can i get my job done in a week?",
      answer:"No! Our services are extended to other parts of the world. We have good success running through Africa, parts of America and other continents."
    },
  ]

export default function FaqPage(){
    return(
        <section className="faqPage">
            <div className="supportPageHeader">
                <h4 className="title">
                    Frequently Asked Questions
                </h4>
          </div>
          <div className="faqCollection">
                {
                    faqData.map((faq,index)=>{
                        return(
                            <Faq title={ faq.question } body={ faq.answer } key={ index }/>
                        )
                    })
                }
          </div>
        </section>
    )
}