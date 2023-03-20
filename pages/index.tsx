import Breadcrumbs from '@/components/common/BreadCrumb'
import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Image from 'next/image'
import Link from 'next/link'

interface headerProps {
    title: string
}

const items = [
    { label: 'Twitter', path: 'https://twitter.com/moon_cypher' },
    { label: 'Insta', path: '#' },
    { label: 'Faceb.', path: '#' },
    { label: 'Git.', path: 'https://github.com/Cyphermoon' },
];

const Header = ({ title }: headerProps) => {
    return (
        <div className='space-y-8'>
            <h2 className='text-[48px] font-bold leading-10 uppercase'>{title}</h2>
            <p>
                Kauye is an ever-expanding ecosystem of
                interconnected apps and services, built for a
                decentralised future.
            </p>
        </div>
    )
}



const Welcome = () => {
    return (
        <ScreenContainer>
            <PageHead title='Sign In' />
            <Screen className='px-6 relative gradient-bg text-left' >
                <Link href={"signup"} className="flex justify-end mt-5 mb-8 text-right">Sign Up</Link>
                <Header title="community Driven." />

                <figure className='flex flex-col space-y-4 items-start mt-10'>
                    <Image src={"/asset/bui.svg"} role="presentation" alt='banner' width={349} height={145} />
                    <Image src={"/asset/din.svg"} className="-ml-3 inline-block" role="presentation" alt='banner' width={349} height={145} />
                </figure>


                <Breadcrumbs items={items} />
            </Screen>
        </ScreenContainer>
    )
}

export default Welcome