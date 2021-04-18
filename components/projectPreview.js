import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/projectpreview.module.scss';

export default function ProjectPreview({title,subtitle,imgLink,projectName,onHomepage}) {
    return(
        <div className={onHomepage ? styles.projectHomePreview : styles.projectPreview}>
            <div className={styles.previewImg}>
                <Image src={imgLink} width={13} height={14.69}/>
            </div>
            <div className={styles.previewContent}>
                <div className={styles.previewDetails}>
                    <h4 className={styles.previewTitle}>{title}</h4>
                    <p className={styles.previewSubtitle}>{subtitle}</p>
                </div>
                <div className={styles.projectLink}>
                    <Link href='/products/[projectName]' as={`/products/${projectName}`} >+ See full project</Link>
                </div>
            </div>
        </div>
    )
}