import React from 'react';
import Footer from './footer';

export default function Layout ({children}) {
    return (
        <div>
            {children}
            <Footer/>
        </div>  
    )
}