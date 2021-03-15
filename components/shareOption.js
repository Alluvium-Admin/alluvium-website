import React from 'react'
import Link from 'next/link'

export default function ShareOption (){
    return(
        <div className="shareOption">
            <div className="shareLink">
                <Link href="/"> + <span>Share on Twitter</span></Link>
            </div>
            <div className="shareLink">
                <Link href="/"> + <span>Share on Facebook</span></Link>
            </div>
            <div className="shareLink">
                <Link href="/"> + <span>Copy link</span></Link>
            </div>
        </div>
    )
}