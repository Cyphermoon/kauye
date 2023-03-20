import React from 'react'

interface Props {
  children: React.ReactNode
}

const ScreenContainer = ({ children }: Props) => {
  return (
    <main className='w-screen h-screen bg-primary-50 grid place-items-stretch md:place-items-center'>
      {children}
    </main>
  )
}

export default ScreenContainer