import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import { Header, Input, Select } from '@/components/Login'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SignUp = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign In' />
            <Screen className='px-6 relative gradient-bg' >
                <Header />

                <form action="" className="space-y-4 mt-12">
                    <p className='text-base font-normal text-[#131313] text-left mb-9'>Enter your username or email address</p>
                    <Input type='gmail' placeholder='example@gmail.com' />

                    <div className='flex items-center justify-between space-x-3'>
                        <Select className="w-3/12 h-[50px]" />
                        <Input type='text' placeholder='8039398213' className='grow h-full' />
                    </div>

                    <Input type='password' placeholder='Password' />

                    <div className='flex w-full items-start space-x-1'>
                        <input type="checkbox" id='terms-and-condition' className='rounded-sm border-blue-500' />

                        <label htmlFor="terms-and-condition" className='text-sm text-[#131313] text-left grow whitespace-normal break-words -mt-1'>
                            By signing up, you agree to the <Link href={"#"} className='inline'>Terms of Service and Privacy Policy</Link>
                        </label>
                    </div>
                </form>

                <Link href={"verify"} className='py-8 px-6 absolute bottom-0 left-0 right-0 bg-primary flex justify-between text-primary-50'>
                    Sign up
                    <Image alt="line arrow" src="/asset/line.svg" width={123} height={24} />
                </Link>
            </Screen>
        </ScreenContainer>
    )
}

export default SignUp