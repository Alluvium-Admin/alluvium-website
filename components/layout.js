import React from 'react';
import { AltFooter } from './footer';

export default function Layout ({children}) {
    return (
        <div>
            {children}
            <AltFooter/>
        </div>  
    )
}