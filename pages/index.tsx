import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Head from 'next/head'

export default function Home() {
  return (
    <ScreenContainer>
      <PageHead title='Home' />
      <Screen>
        <h1>go</h1>
      </Screen>
    </ScreenContainer>
  )
}
