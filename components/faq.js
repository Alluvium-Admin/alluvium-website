import React from 'react'
import styles from '../styles/faq.module.scss'

export default function Faq({id,title,body,toggleFaq,faqState}){
    
    return(
        <div className={styles.faq} onClick={()=>toggleFaq(id)} >
            <div className={styles.faqTitle}>
                <div className={ faqState[id] ? styles.dropdownFlip : styles.dropdownReturn}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 0C7.16129 0 0 7.16129 0 16C0 24.8387 7.16129 32 16 32C24.8387 32 32 24.8387 32 16C32 7.16129 24.8387 0 16 0ZM25.2903 17.8065C25.2903 18.2323 24.9419 18.5806 24.5161 18.5806H18.5806V24.5161C18.5806 24.9419 18.2323 25.2903 17.8065 25.2903H14.1935C13.7677 25.2903 13.4194 24.9419 13.4194 24.5161V18.5806H7.48387C7.05806 18.5806 6.70968 18.2323 6.70968 17.8065V14.1935C6.70968 13.7677 7.05806 13.4194 7.48387 13.4194H13.4194V7.48387C13.4194 7.05806 13.7677 6.70968 14.1935 6.70968H17.8065C18.2323 6.70968 18.5806 7.05806 18.5806 7.48387V13.4194H24.5161C24.9419 13.4194 25.2903 13.7677 25.2903 14.1935V17.8065Z" fill="#009BC0"/>
                    </svg>
               </div>
               <h3>{title}</h3>
            </div>
            <div className={ faqState[id] ? styles.showFaqBody : styles.hideFaqBody}>
                    <p>{body}</p>
            </div>
        </div>
    )
}