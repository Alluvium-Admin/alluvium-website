import React, { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import styles from '../styles/productstatus.module.scss'

export default function ProductStatus({product,statusData}) {
    useEffect(() => {
        console.log(product);
        console.log(statusData);
    })

    return (
        <div className={styles.productStatus}>
            <div className={styles.productHeader}>
                <div className={styles.productIcon}>
                    <img src={product.productIconLink}/>
                </div>
                <div className={styles.productDetails}>
                    <h3 className={styles.productTitle}>{ product.productName }</h3>
                    <div className={styles.operationStatus}>
                        <div className={styles.opertionIndicator}></div>
                        <h5></h5>
                    </div>
                </div>
            </div>
            <div className={styles.statusDetails}>
                <div className={styles.statusInfo}>
                    <h3 className={styles.statusMessage}></h3>
                    <div className={styles.status}>
                        <div className={styles.statusIndicator}></div>
                        <p className={styles.statusText}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await axios.get(product.statusLink);
    const data = await res.json();
    return {
        props:{
            statusData: data,
            product: product
        }
    }
}