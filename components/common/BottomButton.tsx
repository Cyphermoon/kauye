import Link from 'next/link'
import React from 'react'

interface Props {
    title: string
    href: string
}
const BottomButton = ({ title, href }: Props) => {
    return (
        <Link href={href} className='py-1 uppercase mx-6 absolute bottom-16 left-0 right-0 bg-primary text-center text-primary-50 rounded-3xl'>{title}</Link>
    )
}

export default BottomButton