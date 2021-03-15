import React from 'react'
import Link from 'next/link'

const SupportSubmenu = () => {
    return (
        <div className="supportSubmenu">
          <Link href="/support/schedule">+ Schedule a meeting</Link>
          <Link href="/support/contact">+ Contact us</Link>
        </div>
    )
}

export default SupportSubmenu
