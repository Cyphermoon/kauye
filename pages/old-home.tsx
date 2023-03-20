import Logo from '@/components/common/Logo'
import PageHead from '@/components/common/PageHead'
import ScreenContainer from '@/components/common/ScreenContainer'
import StartupScreen from '@/components/common/StartupScreen'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const route = useRouter()

  useEffect(() => {
    const timeout = setTimeout(() => {
      route.push("/loading")
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [route])

  return (
    <ScreenContainer>
      <PageHead title='Home' />
      <StartupScreen href="/loading">
        <Logo />
      </StartupScreen>
    </ScreenContainer>
  )
}
