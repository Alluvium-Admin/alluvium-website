import React from 'react'
import styles from '../styles/productreel.module.scss';

function ProductReel({ product,id }) {
    const { productName,imgs } = product;
    return (
        <div className={styles.productReel} key={ id }>
            <h3 className={styles.productTitle}>{ productName }</h3>
            <div className={styles.productImages}>
                {
                    imgs.map((img,idx) => {
                        return (
                            <div className={styles.productImg} key={idx} >
                                <img src={img.imgLink} alt={img.imgAlt} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductReel
