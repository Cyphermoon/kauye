import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => (
    <div className='flex items-start justify-between space-y-1 mt-2'>
        <div>
            <p>Welcome to <span className='text-primary inline-block grow'>Kauye</span></p>
            <h2 className='uppercase font-semibold text-[40px]'>Sign up</h2>
        </div>
        <p className='text-[#8D8D8D] text-[13px] w-2/12'>Have an account <Link href={"verify"} className='text-primary inline-block'>Sign in</Link></p>
    </div>
)

const login = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign In' />
            <Screen className='px-6 relative' >
                <Header />

                <div className='flex w-full items-start space-x-1'>
                    <input type="checkbox" id='terms-and-condition' />
                    <label htmlFor="terms-and-condition" className='text-sm text-black whitespace-pre-line -mt-1'>
                        By signing up, you agree to the <Link href={"#"} className='inline-block'>Terms of Service and Privacy Policy</Link>
                    </label>
                </div>

                <form action="" className='text-center'>
                    <p className='text-base font-normal'>Enter your username or email address</p>
                </form>

                <Link href={"verify"} className='py-8 px-6 absolute bottom-0 left-0 right-0 bg-primary flex justify-between text-primary-50'>
                    Sign up
                    <Image alt="line arrow" src="/asset/line.svg" width={123} height={24} />
                </Link>
            </Screen>
        </ScreenContainer>
    )
}

export default login