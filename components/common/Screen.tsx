import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Screen = ({ children, className }: Props) => {
    return (
        <section className={`w-full p-4 lg:max-w-sm h-screen lg:h-5/6 lg:rounded-3xl overflow-y-scroll lg:shadow-2xl bg-red-300 ${className}`}>
            {children}
        </section>
    )
}

export default Screen