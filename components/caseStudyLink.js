import React from 'react';
import Link from 'next/link';
import styles from '../styles/casestudylink.module.scss'

const CaseStudyLink = ({ caseStudy }) => {
    const { projectImgLink, projectName, title, description } = caseStudy;
    return (
        <div className={styles.casestudyLink}>
            <div className={styles.casestudyLinkImg}>
                <img src={projectImgLink} alt={projectName} />
            </div>
            <div className={styles.casestudyLinkDetails}>
                <h2 className={styles.casestudyTitle}>{ title }</h2>
                <p className={styles.casestudyDescription}>{ description }</p>
                <Link>+ View Case Study</Link>
            </div>
        </div>
    )
}

export default CaseStudyLink
