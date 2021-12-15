import React from 'react';
// import Link from 'next/link';
import styles from '../styles/casestudylink.module.scss'

const CaseStudyLink = ({ caseStudy }) => {
    const { projectImgLink, projectName, title, description, downloadLink, filename } = caseStudy;
    return (
        <div className={styles.casestudyLink}>
            <div className={styles.casestudyLinkImg}>
                <img src={projectImgLink} alt={projectName} />
            </div>
            <div className={styles.casestudyLinkDetails}>
                <h2 className={styles.casestudyTitle}>{ title }</h2>
                <p className={styles.casestudyDescription}>{description}</p>
                <div className={styles.casestudyViewLink}>
                    <a href={downloadLink} alt={filename} target="_blank" rel="noopener noreferrer">+ View Case Study</a>
                </div>
            </div>
        </div>
    )
}

export default CaseStudyLink
