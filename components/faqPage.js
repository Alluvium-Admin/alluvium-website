import React,{useState} from 'react'
import Faq from '../components/faq'
import styles from '../styles/faqpage.module.scss'

export default function FaqPage({faqs}){
    const [faqState, setFaqState] = useState({});

    const toggleFaq =(id)=>{
        setFaqState(prevState=>({
            [id]: !prevState[id]
        }))
    } 
    return(
        <section className={styles.faqPage}>
          <div className={styles.supportPageHeader}>
            <h4 className={styles.title}>
              Frequently Asked Questions
            </h4>
          </div>
          <div className={styles.faqCollection} data-aos-delay="300" data-aos="fade-down">
            {
              faqs.map((faq,index)=>{
                return(
                  <Faq 
                    id={ faq.id } 
                    title={ faq.question } 
                    body={ faq.answer } 
                    key={ index }
                    faqState={ faqState }
                    toggleFaq={ toggleFaq }
                  />
                )
              })
            }
          </div>
        </section>
    )
}