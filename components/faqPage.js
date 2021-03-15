import React from 'react'
import Faq from '../components/faq'

export default function FaqPage({faqs}){
    return(
        <section className="faqPage">
            <div className="supportPageHeader">
                <h4 className="title">
                    Frequently Asked Questions
                </h4>
          </div>
          <div className="faqCollection">
            {
              faqs.map((faq,index)=>{
                return(
                  <Faq title={ faq.question } body={ faq.answer } key={ index }/>
                )
              })
            }
          </div>
        </section>
    )
}