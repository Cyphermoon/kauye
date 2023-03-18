import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Screen from './Screen'

interface Props {
    children: React.ReactNode
    href?: string
}

const StartupScreen = ({ children, href }: Props) => {
    return (
        <Screen className='flex flex-col justify-center items-center overflow-clip relative background-element'>
            <figure className='-mt-20' >
                {children}
            </figure>

            <div className='space-y-8 text-center absolute bottom-10'>
                <span className='text-sm font-medium'>Powered by Kauye</span>
                <Link href={href ? href : "#"} className='text-xs text-[#59ADFF]'>Continue</Link>
            </div>

            {/* presentation image */}
            <Image
                src="/asset/circles.svg"
                alt="circle element"
                role="presentation" width={323} height={372}
                className="absolute -bottom-20 -right-44" />
        </Screen>
    )
}

export default StartupScreen