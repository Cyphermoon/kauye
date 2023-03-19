import BottomButton from '@/components/common/BottomButton'
import { Input } from '@/components/common/Input'
import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => (
    <div className='border-b border-[#EBECEF] py-2  flex items-center'>
        <Link href={"login"}>
            <IoIosArrowBack color='#788396' width={8} height={16} />
        </Link>
        <span className='text-center text-[#333942] text-sm mx-auto'>Verify Account</span>
    </div>
)

const Verify = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign Up' />
            <Screen className='px-6 relative splash-bg' >
                <Header />

                <div className='text-center mt-10 space-y-14 flex flex-col items-center'>
                    <p className='text-[#4A515E] text-xs'>To confirm your identity, please verify your account, enter the verification code sent to xxxx@gmail.com</p>

                    <Image src="/asset/outlook.svg" alt='' width={62} height={49} />
                    <div className='space-y-3 w-full'>
                        <Input placeholder='713-690' />

                        <div className='space-x-2'>
                            <span className='inline-block text-xs'>{"Didn't"} get the verification code?</span>
                            <Link className='inline-block text-primary text-xs font-medium' href="#">Resend it</Link>
                        </div>
                    </div>

                </div>

                <BottomButton href='#' title='verify my account' />
            </Screen>
        </ScreenContainer>
    )
}

export default Verify