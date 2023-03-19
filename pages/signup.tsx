import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SignUp = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign Up' />
            <Screen className='px-6 relative splash-bg' >
                <div className='text-center flex flex-col items-center space-y-1 mt-8'>
                    <Image src="/asset/logo_stripped.svg" alt='kauye logo' width={35} height={50} />
                    <h3 className='text-base font-semibold text-[#333942]'>Create Account</h3>
                    <p className='text-[#4A515E] text-xs'>Create a free <b>Kauye</b> account to get started, </p>
                </div>
                {/* <form action="">

                </form> */}
                <div className='flex items-center space-x-1'>
                    <input type="checkbox" id='terms-and-condition' />
                    <label htmlFor="terms-and-condition" className='text-xs text-black'>I accept Kauye terms & conditions</label>
                </div>
                <div className='space-x-2'>
                    <span className='inline-block text-xs'>Already Have an account</span>
                    <Link className='inline-block text-primary text-xs' href="login">Sign in</Link>
                </div>

                <Link href={"login"} className='py-1 mx-6 absolute bottom-16 left-0 right-0 bg-primary text-center text-primary-50 rounded-3xl'>Sign up</Link>
            </Screen>
        </ScreenContainer>
    )
}

export default SignUp