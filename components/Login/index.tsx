import Link from "next/link"
import { MdOutlineInfo } from "react-icons/md"

interface HeaderProps {
    title: string
    href: string
}

export const Header = ({ title, href }: HeaderProps) => (
    <div className='flex items-start justify-between space-y-1 mt-2'>
        <div>
            <p>Welcome to <span className='text-primary inline-block grow mb-3'>Kauye</span></p>
            <h2 className='uppercase font-medium text-[40px]'>{title}</h2>
        </div>
        <p className='text-[#8D8D8D] text-[13px] w-2/12'>Have an account <Link href={href} className='text-primary inline-block'>Sign in</Link></p>
    </div>
)


export const Input = ({ placeholder, className, type = "text" }: inputProps) => {
    return (
        <div className={`flex p-3 bg-[#21394205]  border border-gray-100 items-center focus-within:border-2 focus-within:border-gray-400 rounded-md ${className} `}>
            <input
                className='grow outline-none bg-transparent placeholder:text-[#333942] placeholder:opacity-60'
                type={type}
                placeholder={placeholder} />

            <MdOutlineInfo className='text-gray-500 w-[20px] h-[20px]' />
        </div>
    )
}


export const Select = ({ className }: SelectProps) => {
    return (
        <select defaultValue={"NG"} id="countries" className={`bg-[#21394205] text-left border border-gray-100 text-[#333942] text-opacity-60 text-sm rounded-md focus:ring-gray-400 focus:border-gray-400 outline-none block w-full p-3 h-full ${className} `}>
            <option value="NG">+234 -NGN</option>
            <option value="US">+1 - US</option>
            <option value="FR">+33 - FR</option>
            <option value="DE">+49 - DE</option>
        </select>
    )
}