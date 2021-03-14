import React from 'react';
import Image from 'next/image';

export default function Search() {
    return(
        <div className="search">
            <div className="searchInput">
                <div className="searchIcon">
                    <Image src="/assets/search.svg" width={13} height={14.69}/>
                </div>
                <input type="text" placeholder="Search projects"/>
            </div>
            <div className="searchResults">

            </div>
        </div>
    )
}