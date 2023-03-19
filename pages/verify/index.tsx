import BottomButton from '@/components/common/BottomButton'
import { Input } from '@/components/common/Input'
import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Header from '@/components/Verify'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'


const Verify = () => {
    const [inputValue, setInputValue] = useState("")
    const route = useRouter()

    const handleButtonClicked = () => {
        if (inputValue) {
            route.push("/verify/success")
        } else {
            route.push("/verify/error")
        }
    }

    return (
        <ScreenContainer>
            <PageHead title='Sign Up' />
            <Screen className='px-6 relative splash-bg' >
                <Header href='/login' />

                <div className='text-center mt-10 space-y-14 flex flex-col items-center'>
                    <p className='text-[#4A515E] text-xs'>To confirm your identity, please verify your account, enter the verification code sent to xxxx@gmail.com</p>

                    <Image src="/asset/outlook.svg" alt='' width={62} height={49} />
                    <div className='space-y-3 w-full'>
                        <Input placeholder='713-690' handleInputChange={setInputValue} />

                        <div className='space-x-2'>
                            <span className='inline-block text-xs'>{"Didn't"} get the verification code?</span>
                            <Link className='inline-block text-primary text-xs font-medium' href="#">Resend it</Link>
                        </div>
                    </div>

                </div>

                <button onClick={handleButtonClicked} className='py-1 uppercase mx-6 absolute bottom-16 left-0 right-0 bg-primary text-center text-primary-50 rounded-3xl'>verify my account</button>
            </Screen>
        </ScreenContainer>
    )
}

export default Verify