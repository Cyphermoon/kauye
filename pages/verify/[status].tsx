import BottomButton from '@/components/common/BottomButton'
import PageHead from '@/components/common/PageHead'
import Screen from '@/components/common/Screen'
import ScreenContainer from '@/components/common/ScreenContainer'
import Header from '@/components/Verify'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { FaRegTimesCircle } from 'react-icons/fa'


interface Response {
    success: ResponseItem,
    error: ResponseItem
}

interface ResponseItem {
    icon: React.ReactElement,
    msg: string,
    status: string
}


const _response: Response = {
    "success": {
        icon: <BsFillCheckCircleFill className='text-[#78A60F] p-1 rounded-full w-[76px] h-[76px]' />,
        msg: "Your account has been successfully verified, please proceed to the onboarding area.",
        status: "Successful"
    },
    "error": {
        icon: <FaRegTimesCircle className='text-red-500 p-1 rounded-full w-[76px] h-[76px]' />,
        msg: "Your account has been successfully verified, please proceed to the onboarding area.",
        status: "Failed"
    }
}


const Verify = () => {
    const route = useRouter()
    const { status } = route.query
    const [response, setResponse] = useState<ResponseItem>()


    useEffect(() => {
        if (typeof status === "string") {

            if (status === "error")
                setResponse(_response["error"])

            else if (status === "success")
                setResponse(_response["success"])
        }


    }, [status])


    return (
        <ScreenContainer>
            <PageHead title='Sign Up' />
            <Screen className='px-6 relative splash-bg' >
                <Header href='/verify' />

                <div className='text-center mt-20 space-y-7 flex flex-col items-center'>

                    {response?.icon}
                    <p className='text-[#4A515E] w-[45ch] text-xs text-center'>{response?.msg}</p>

                    <h5 className='font-semibold text-[#333942]'>{response?.status}</h5>

                </div>

                <BottomButton href='/verify' title='Proceed' />
            </Screen>
        </ScreenContainer>
    )
}

export default Verify