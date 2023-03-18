import Image from 'next/image'
import React from 'react'

interface Props {
    className?: string
}

const Logo = ({ className }: Props) => {
    return (
        <Image src={"/asset/logo.svg"} className={className} alt="Company Logo" width={146} height={61} />
    )
}

export default Logo