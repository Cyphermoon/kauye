import { Input } from '@/components/common/Input'
import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => (
    <div className='text-center flex flex-col items-center space-y-2 mt-8 mb-8'>
        <Image src="/asset/logo_stripped.svg" alt='kauye logo' width={35} height={50} />
        <h3 className='text-base font-semibold text-[#333942]'>Create Account</h3>
        <p className='text-[#4A515E] text-xs'>Create a free <b>Kauye</b> account to get started, </p>
    </div>
)


const SignUp = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign Up' />
            <Screen className='px-5 relative splash-bg' >
                <Header />

                <div className='space-y-3'>
                    <Input type='email' placeholder='john-doe@gmail.com' className='placeholder:text-neutral-500' />
                    <Input type='text' placeholder='(449)023-9245' className='placeholder:text-gray-700' showSelector />
                    <Input type='password' placeholder='xxxxxxxxxxxxxx' className='placeholder:text-neutral-500' />

                    <div className='flex items-center space-x-1'>
                        <input type="checkbox" id='terms-and-condition' />
                        <label htmlFor="terms-and-condition" className='text-xs text-black'>I accept Kauye terms & conditions</label>
                    </div>
                </div>

                <div className='space-x-2 text-center mt-8'>
                    <span className='inline-block text-xs'>Already Have an account</span>
                    <Link className='inline-block text-primary text-xs' href="login">Sign in</Link>
                </div>

                <Link href={"login"} className='py-1 mx-6 absolute bottom-16 left-0 right-0 bg-primary text-center text-primary-50 rounded-3xl'>Sign up</Link>
            </Screen>
        </ScreenContainer>
    )
}

export default SignUp