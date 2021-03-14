import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MainProjectPreview({title,subtitle,imgLink,projectLink}) {
    return(
        <div className="mainProjectPreview">
            <div className="previewImg">
                <Image src={imgLink} width={13} height={14.69}/>
            </div>
            <div className="previewContent">
                <div className="previewDetails">
                    <h4 className="previewTitle">{title}</h4>
                    <p className="previewSubtitle">{subtitle}</p>
                </div>
                <div className="projectLink">
                    <Link href={projectLink}>+ See full project</Link>
                </div>
            </div>
        </div>
    )
}