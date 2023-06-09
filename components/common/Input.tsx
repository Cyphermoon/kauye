import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";
import CountrySelector from "./CountrySelector";

interface inputProps {
    type?: string
    className?: string
    showSelector?: boolean
    placeholder: string
    handleInputChange?: Function
}


export const Input = ({ type, className, placeholder, handleInputChange, showSelector = false }: inputProps) => {
    const [value, setValue] = useState<string>("");

    const handleChange = (value: string) => {
        setValue(value)

        if (handleInputChange)
            handleInputChange(value)
    }

    return (
        <div className={`flex px-3 py-2 bg-white  border border-[#959EAC] items-center focus-within:border-2 focus-within:border-gray-400 rounded-full`}>
            {showSelector && <CountrySelector />}
            <input
                className={`grow outline-none bg-transparent placeholder:text-sm placeholder:text-gray-700 ${className}`}
                type={type}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                placeholder={placeholder} />

            {value && <BsCheckLg className='text-green-700 bg-green-200 p-1 rounded-full w-[22px] h-[22px]' />}

            {!value && <FaTimesCircle className='text-red-500 w-[22px] h-[22px]' />}

        </div>
    )
}