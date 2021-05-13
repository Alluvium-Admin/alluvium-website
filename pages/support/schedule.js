import React from 'react'
import Head from 'next/head'
import Navigation from '../../components/navigation'
import SupportSubmenu from '../../components/supportSubmenu'
import styles from '../../styles/schedule.module.scss'
import { productData } from '../../data'

export default function ScheduleForm({products}){
    return(
        <div className={styles.schedulePage}>
            <Head>
                <title>Schedule Meeting | Alluvium</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation theme={"dark"} products={products}/>
            <main className={styles.scheduleForm}>
                <SupportSubmenu/>
                <div className={styles.scheduleFormHeader}>
                    <p className={styles.title}>Would you like to chat with a professional?</p>
                </div>
                <form className={styles.mainForm}>
                    <div className={styles.formInput}>
                        <label htmlFor="full_name">Full Name<span>*</span></label>
                        <input type="text" name="full_name" required placeholder="Kostantinos Mavropanos"/> 
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="company_name">Company Name<span>*</span></label>
                        <input type="text" name="company_name" required placeholder="Mavro Corp"/> 
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="email">E-mail Address<span>*</span></label>
                        <input type="email" name="email" required placeholder="kmavr@mavrocorp.com"/> 
                    </div>
                    <div className={styles.formInput}>
                        <label htmlFor="reason">Reason for meeting<span>*</span></label>
                        <textarea rows="4" name="reason" required placeholder="Tell us what’s on your mind" className={styles.reasonText}></textarea>
                    </div>
                    <input type="submit" className={styles.scheduleSubmitBtn} value="+ Schedule Meeting"/>
                </form>
            </main>
        </div>
    )
}


export const getStaticProps = async () =>{
    return{
      props:{
        products:productData,
      }
    }
  }