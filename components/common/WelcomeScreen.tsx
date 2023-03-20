import Breadcrumbs from '@/components/common/BreadCrumb'
import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Image from 'next/image'
import Link from 'next/link'
import { useSwiper } from 'swiper/react'

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
            <h2 className='text-[48px] font-bold leading-[2.75rem] uppercase'>{title}</h2>
            <p>
                Kauye is an ever-expanding ecosystem of
                interconnected apps and services, built for a
                decentralised future.
            </p>
        </div>
    )
}

interface Props {
    title: string
    isLast?: boolean
}


const WelcomeScreen = ({ title, isLast }: Props) => {
    const swiper = useSwiper()

    const slideNext = () => {
        swiper.slideNext()
    }

    return (
        <>

            <button onClick={slideNext}
                className={`flex text-primary w-full justify-end mt-5 mb-8 text-right ${isLast && "invisible"}`}>
                Skip
            </button>
            <Header title={title} />

            <figure className='flex flex-col space-y-4 items-start mt-10'>
                <Image src={"/asset/bui.svg"} role="presentation" alt='banner' width={349} height={145} />
                <Image src={"/asset/din.svg"} className="-ml-3 inline-block" role="presentation" alt='banner' width={349} height={145} />
            </figure>


            {isLast ?
                <Link href={"/signup"} className='py-8 px-6 absolute bottom-0 left-0 right-0 bg-primary flex justify-between text-primary-50'>
                    Explore the Future
                    <Image alt="line arrow" src="/asset/line.svg" width={123} height={24} />
                </Link> :
                <Breadcrumbs items={items} />}
        </>
    )
}

export default WelcomeScreen