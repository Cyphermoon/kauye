import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Screen = ({ children, className }: Props) => {
    return (
        <section className={`w-full p-4 bg-white md:max-w-sm h-screen md:h-[90%] md:rounded-3xl overflow-y-scroll overflow-x-hidden md:shadow-2xl ${className}`}>
            {children}
        </section>
    )
}

export default Screen