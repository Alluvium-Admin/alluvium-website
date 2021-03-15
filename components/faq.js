import React from 'react'

export default function Faq({title,body}){
    return(
        <div className="faq">
           <div className="faqTitle">
               <h3>{title}</h3>
               <div className="dropdownIcon">
                    <svg width="21" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 14L0 3.49938L3.50165 0L10.5 7.00124L17.4984 0L21 3.49938L10.5 14Z" fill="black"/>
                    </svg>
               </div>
           </div>
           <div className="faqBody">
                <p>{body}</p>
           </div>
        </div>
    )
}