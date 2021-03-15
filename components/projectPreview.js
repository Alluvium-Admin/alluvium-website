import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectPreview({title,subtitle,imgLink,projectName}) {
    return(
        <div className="projectPreview">
            <div className="previewImg">
                <Image src={imgLink} width={13} height={14.69}/>
            </div>
            <div className="previewContent">
                <div className="previewDetails">
                    <h4 className="previewTitle">{title}</h4>
                    <p className="previewSubtitle">{subtitle}</p>
                </div>
                <div className="projectLink">
                    <Link href='/products/[projectName]' as={`/products/${projectName}`} >+ See full project</Link>
                </div>
            </div>
        </div>
    )
}