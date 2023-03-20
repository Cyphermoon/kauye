import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import { Header, Select } from '@/components/Login'
import SignInOption from '@/components/Login/SignInOption'
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Input from '@/components/Login/Input'


const SignUp = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign In' />
            <Screen className='px-6 relative gradient-bg' >
                <Header title="Sign in" href="/signup" />

                <div className='flex items-center justify-between mt-12'>
                    <SignInOption
                        icon={<FcGoogle
                            width={22} height={22} />}
                        text="Sign in with Google"
                        className="bg-[#E6F2FF] text-[#0582FD] w-8/12" />
                    <SignInOption icon={<Image src={"/asset/facebook.svg"} alt="facebook logo" width={22} height={22} />} />
                    <SignInOption icon={<Image src={"/asset/apple.svg"} alt="apple logo" width={22} height={22} />} />
                </div>

                <form action="" className="space-y-4 mt-12 text-right">
                    <p className='text-base font-normal text-[#131313] text-left mb-9'>Enter your username or email address</p>
                    <Input type='email' placeholder='example@gmail.com' id='login_email' label='Email' />

                    <Input type='password' placeholder='Password' id='login_password' label='Password' />

                    <Link href={"#"} className='inline-block'>Forgot Password?</Link>
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