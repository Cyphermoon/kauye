import React from 'react'

interface Props {
    text?: string
    icon: React.ReactElement
    className?: string
}

const SignInOption = ({ text, icon, className }: Props) => {
    return (
        <button className={`px-2 py-3 flex items-center space-x-4 focus:bg-[#E6F2FF] focus:border rounded-lg bg-[#F2F2F2] ${className}`}>
            {icon}
            {text ? <span>{text}</span> : null}
        </button>
    )
}

export default SignInOption