import Logo from '@/components/common/Logo'
import PageHead from '@/components/common/PageHead'
import ScreenContainer from '@/components/common/ScreenContainer'
import StartupScreen from '@/components/common/StartupScreen'

export default function Home() {
  return (
    <ScreenContainer>
      <PageHead title='Home' />
      <StartupScreen href="/loading">
        <Logo />
      </StartupScreen>
    </ScreenContainer>
  )
}
