import PageHead from '@/components/common/PageHead'
import ScreenContainer from '@/components/common/ScreenContainer'
import WelcomeScreen from '@/components/common/WelcomeScreen'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper'
import Screen from '@/components/common/Screen'
import { useRef, useState } from 'react'


const Welcome = () => {
    const [sliderEnd, setSliderEnd] = useState<boolean>()
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);

    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle?.current.style.setProperty('--progress', (1 - progress).toString());
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }

    };
    return (
        <ScreenContainer>
            <PageHead title='Welcome - KauyeLite' />
            {!sliderEnd &&
                <Screen className='px-6 relative gradient-bg text-left' >
                    <Swiper
                        spaceBetween={0}
                        centeredSlides={true}
                        onReachEnd={(swiper) => setSliderEnd(true)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            stopOnLastSlide: true
                        }}
                        pagination={{
                            clickable: true,
                        }}

                        modules={[Autoplay, Pagination]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <WelcomeScreen title='community driven.' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <WelcomeScreen title='Customer Focused.' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <WelcomeScreen title='Fast Services.' />
                        </SwiperSlide>
                        {!sliderEnd ?
                            <div className="autoplay-progress" slot="container-end">
                                <svg viewBox="0 0 48 48" ref={progressCircle}>
                                    <circle className='p-1' cx="24" cy="24" r="20"></circle>
                                </svg>
                                <span ref={progressContent}></span>
                            </div> : null}

                    </Swiper>
                </Screen>}

            {sliderEnd &&
                <Screen className='px-6 relative gradient-bg text-left'>
                    <WelcomeScreen title='Request Delivery.' isLast />
                </Screen>
            }

        </ScreenContainer>
    )
}

export default Welcome