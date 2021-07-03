import React, { useEffect } from 'react';
import styles from '../styles/productstatus.module.scss'

export default function ProductStatus({ product }) {
    const statusInfoArray = [];
    Object.keys(product.statusData.breakdown).forEach(key => statusInfoArray.push({
        name: key,
        status: product.statusData.breakdown[key]
    }))

    return (
        <div className={styles.productStatus}>
            <div className={styles.productHeader}>
                <div className={styles.productIcon}>
                    <img src={product.productIcon}/>
                </div>
                <div className={styles.productDetails}>
                    <h3 className={styles.productTitle}>{ product.product }</h3>
                    <div className={styles.operationStatus}>
                        <div className={styles.opertionIndicator} style={{backgroundColor:`${ product.statusData.statusColor}`}} ></div>
                        <h5>{ product.statusData.status }</h5>
                    </div>
                </div>
            </div>
            <div className={styles.statusDetails}>
                {
                    statusInfoArray.map((statusInfo, idx) => {
                        return (
                            <div className={styles.statusInfo} key={idx}>
                                <h3 className={styles.statusMessage}>{statusInfo.name}</h3>
                                <div className={styles.status}>
                                    <div className={styles.statusIndicator} style={{background:`${statusInfo.status.statusColor}`}}></div>
                                    <p className={styles.statusText}>{statusInfo.status.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
                
                
            </div>
        </div>
    )
}
