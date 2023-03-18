import Image from 'next/image'
import React from 'react'

const Logo = () => {
    return (
        <Image src={"/asset/logo.svg"} alt="Company Logo" width={146} height={61} />
    )
}

export default Logo