import PageHead from '@/components/common/PageHead'
import ScreenContainer from '@/components/common/ScreenContainer'
import StartupScreen from '@/components/common/StartupScreen'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Loading = () => {
    const route = useRouter()

    useEffect(() => {
        const timeout = setTimeout(() => {
            route.push("/old-signup")
        }, 2000)

        return () => {
            clearTimeout(timeout)
        }
    }, [route])

    return (
        <ScreenContainer>
            <PageHead title='Loading' />
            <StartupScreen href='/old-signup' >
                <Image src={"/asset/spinner.svg"} alt="loading spinner" width={210} height={210} />
            </StartupScreen>
        </ScreenContainer>
    )
}

export default Loading