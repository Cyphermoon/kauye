import PageHead from '@/components/common/PageHead'
import ScreenContainer from '@/components/common/ScreenContainer'
import StartupScreen from '@/components/common/StartupScreen'
import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
        <ScreenContainer>
            <PageHead title='Loading' />
            <StartupScreen>
                <Image src={"/asset/spinner.svg"} alt="loading spinner" width={210} height={210} />
            </StartupScreen>
        </ScreenContainer>
    )
}

export default loading