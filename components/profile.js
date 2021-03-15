import React from 'react'
import Image from 'next/image'

export default function Profile({firstName,lastName,role,email,pictureLink}){
    return(
        <div className="profile">
            <div className="profilePicture">
                <Image src={pictureLink} width={100} height={100}/>
            </div>
            <div className="details">
                <p className="fullname">
                    <span className="firstname">{firstName}, </span>
                    <span className="lastname">{lastName}</span>
                </p>
                <p className="role">{role}</p>
                <p className="email">{email}</p>
            </div>
        </div>
    )
}