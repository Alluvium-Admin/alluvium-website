import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/search.module.scss';
import Link from 'next/link';

export default function Search({theme,products}) {
    const [searchData, setSearchData] = useState([]);
    const [ searchInput, setSearchInput ] = useState("")
    const [ searchResults, setSearchResults ] = useState([])

    useState(()=>{
        setSearchData(products)
    },[products])


    useEffect(()=>{
        if(searchInput === ""){
            setSearchResults([])
        }
    },[searchInput])

    useEffect(()=>{
        setSearchResults(searchData.filter(project=>{ return project.details.productName.toLowerCase().match( new RegExp(searchInput,"g"))}))
    },[searchInput])


    // const searchResults = productData.filter(project=>{ project.projectName.toLowerCase().includes(searchInput.toLowerCase())}
    // )

    return(
        <div style={{minWidth: searchInput === "" ? "unset" : "20vw"}} className={ theme === "dark" ? styles.searchDark : styles.search}>
            <div className={styles.searchInput}>
                <div className={styles.searchIcon}>
                    {
                        theme === "dark" ? <Image src="/assets/search_dark.svg" width={16} height={16}/> : <Image src="/assets/search.svg" width={16} height={16}/>
                    }
                   
                </div>
                <input type="text" placeholder="Search products" onChange={(e)=>setSearchInput(e.target.value)}/>
            </div>
            <div style={{display: searchInput === "" ? "none" : "block" }} className={styles.searchResults}>
                {
                    searchResults.length === 0 
                    ?
                        <p className={styles.errorText}>No products found</p>
                    :
                        searchResults.map((searchResult)=>{
                            return(
                                <div className={ styles.searchResult } key={searchResult.id}>
                                    <Link href='/products/[projectName]' as={`/products/${searchResult.projectName}`} >
                                        <div className={styles.resultDetails}>
                                            <h3>{searchResult.details.productName}</h3>
                                            <p>{searchResult.details.productSubtitle}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}


export function MobileSearch({products}) {
    const [ searchData, setSearchData ] = useState([])
    const [ searchInput, setSearchInput ] = useState("")
    const [ searchResults, setSearchResults ] = useState([])

    useEffect(()=>{
        if(searchInput === ""){
            setSearchResults([])
        }
    },[searchInput])

    useState(()=>{
        setSearchData(products)
    },[products])

    useEffect(()=>{
        setSearchResults(searchData.filter(project=>{ return project.details.productName.toLowerCase().match( new RegExp(searchInput,"g"))}))
    },[searchInput])

    return(
        <div className={styles.mobileSearch}>
            <div style={{borderRadius: searchInput === "" ? "15px" : "15px 15px 0 0"}} className={styles.searchInput}>
                <div className={styles.searchIcon}>
                    <Image src="/assets/search_dark.svg" width={16} height={16}/>
                </div>
                <input type="text" placeholder="Search products" onChange={(e)=>setSearchInput(e.target.value)}/>
            </div>
            <div style={{display: searchInput === "" ? "none" : "block" }} className={styles.searchResults}>
                {
                    searchResults.length === 0 
                    ?
                        <p className={styles.errorText}>No products found</p>
                    :
                        searchResults.map((searchResult)=>{
                            return(
                                <div className={ styles.searchResult } key={searchResult.id}>
                                    <Link href='/products/[projectName]' as={`/products/${searchResult.projectName}`} >
                                        <div className={styles.resultDetails}>
                                            <h3>{searchResult.details.productName}</h3>
                                            <p>{searchResult.details.productSubtitle}</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

