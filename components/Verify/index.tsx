import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

interface Props {
    href: string
}

const Header = ({ href }: Props) => (
    <div className='border-b border-[#EBECEF] py-2  flex items-center'>
        <Link href={href}>
            <IoIosArrowBack color='#788396' width={8} height={16} />
        </Link>
        <span className='text-center text-[#333942] text-sm mx-auto'>Verify Account</span>
    </div>
)

export default Header
