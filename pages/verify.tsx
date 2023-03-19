import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Header from '@/components/Verify'
import OTPInput from '@/components/Verify/OtpInput'
import Link from 'next/link'
import React from 'react'


const Verify = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign In' />
            <Screen className='px-6 relative gradient-bg' >
                <Header href='login' />
                <div className='mt-6'>
                    <p>Welcome to <span className='text-primary inline-block grow mb-4'>Kauye</span></p>
                    <h2 className='uppercase font-medium leading-9 text-[40px] mb-8'>Verify Account</h2>

                    <div>
                        <p className='text-[#363D4E] text-center mb-8'>Please enter the 4-digit code just sent to
                            <b className='inline-block text-gray-700 font-semibold'>+1 (562) 859-4936</b>
                        </p>

                        <OTPInput length={4} />
                    </div>
                </div>
                <Link href={"#"} className="absolute left-6 bottom-5">Resend code</Link>
            </Screen>
        </ScreenContainer>
    )
}

export default Verify