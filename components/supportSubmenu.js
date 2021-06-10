import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/supportsubmenu.module.scss'


const SupportSubmenu = () => {
  const [ currentLocation, setCurrentLocation ]=useState('');
  const router = useRouter();

  useEffect(()=>{
    if(router.asPath === "/support/schedule"){
      setCurrentLocation("schedule")
    } else if(router.asPath === "/support/contact"){
      setCurrentLocation("contact")
    }
    else{
      setCurrentLocation("")
    }
  },[])
  
  return (
    <div className={styles.supportSubmenu}>
      {/* <div className={ currentLocation==="schedule" ? styles.activeOption : styles.option }>
        <span>+</span>
        <Link href="/support/schedule">Schedule a meeting </Link>
      </div> */}
      <div className={ currentLocation==="contact" ? styles.activeOption : styles.option}>
        <span>+</span>
        <Link href="/support/contact">Contact us </Link>
      </div>
    </div>
  )
}

export default SupportSubmenu
