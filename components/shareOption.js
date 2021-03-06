import React from 'react'
import styles from '../styles/shareoptions.module.scss'
import { useToasts } from 'react-toast-notifications'

export default function ShareOption ({server,router,shareOptions, setShareOptions}){
    const { addToast } = useToasts()
    
    const copyLink = () =>{
        let link = server+router.asPath;
        let urlInput = document.body.appendChild(document.createElement('input'))
        urlInput.value = link;
        urlInput.focus();
        urlInput.select();
        document.execCommand("copy")
        urlInput.parentNode.removeChild(urlInput);
        addToast('Copied to Clipboard', { appearance: 'success' });
        setShareOptions(false);
    }

    return(
        <div className={ shareOptions ? styles.shareOption : styles.hideShareOption}>
            <div className={styles.shareLink}>
                <a target="_blank" href={`https://twitter.com/share?text=Check out this project&url=${server+router.asPath}`}> + Share on Twitter </a>
            </div>
            <div className={styles.shareLink}>
                <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${server+router.asPath}`}> + Share on Facebook</a>
            </div>
            <div className={styles.shareLink}>
                <button onClick={copyLink}> + Copy link</button>
            </div>
        </div>
    )
}