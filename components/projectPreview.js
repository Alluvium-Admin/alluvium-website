import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/projectpreview.module.scss';

export default function ProjectPreview({title,subtitle,imgLink,projectName,location}) {
    const [ previewStyle, setPreviewStyle ] = useState(styles.projectHomePreview);
    
    useEffect(()=>{
        if(location === "home"){
            setPreviewStyle(styles.projectHomePreview);
        } else if(location === "products"){
            setPreviewStyle(styles.projectPreview);
        } else if(location === "more_projects" ){
            setPreviewStyle(styles.projectMpPreview)
        }
    },[])
    
    return(
        <div className={previewStyle}>
            <div className={styles.previewImg}>
                <Image src={imgLink} width={600} height={400}/>
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