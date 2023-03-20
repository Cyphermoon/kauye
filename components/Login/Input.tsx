import { useState } from "react"
import { MdOutlineInfo } from "react-icons/md"

const Input = ({ placeholder, id, className, label, type = "text" }: inputProps) => {
    const [value, setValue] = useState("")

    const isEmpty = () => {
        return value === ""
    }

    return (
        <fieldset
            className={`flex p-3 bg-[#21394205]  border border-gray-100 items-center focus-within:border-2 
             focus-within:border-black rounded-md justify-start group  ${isEmpty() ? "border-red-600 focus-within:border-red-600" : null} ${className}`}>
            <legend className={`px-2 items-start hidden mr-auto text-[10px] group-focus-within:inline-block ${isEmpty() ? "text-red-600" : null}`}>
                {label}
            </legend>

            <input
                className={`grow outline-none bg-transparent placeholder:text-[#333942] group-focus-within:placeholder:text-black placeholder:opacity-60 group-focus-within:placeholder:opacity-100 peer ${isEmpty() ? "placeholder:text-red-600 group-focus-within:placeholder:text-red-600" : null}`}
                type={type}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                minLength={3}
                placeholder={placeholder} />

            <MdOutlineInfo className={`text-gray-500 w-[20px] h-[20px] 
             ${isEmpty() ? "text-red-400 group-focus-within:visible" : 'group-focus-within:invisible'} `} />
        </fieldset>
    )
}

export default Input