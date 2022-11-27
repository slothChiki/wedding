import { NextPage } from 'next';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import Poster from './Poster';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import Top10Poster from './Top10Poster';

interface Props {
    title: string;
    list: string[];
}
const Slider: NextPage<Props> = ({ title = '', list = []}) => {
    const swiper = useSwiper();
    return (
        <>
            <h1>{title}</h1>
            {/* <div className="slider"> */}
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={'auto'}
                centeredSlides={false}
                slideToClickedSlide={true}
                loopFillGroupWithBlank={false}
                // touchRatio={1}
                navigation
                // breakpoints={{
                //     480: {
                //         slidesPerView: 1,
                //         spaceBetween: 10,                        
                //     },
                //     768: {
                //         slidesPerView: 2,
                //         spaceBetween: 1,
                //     },
                //     982: {
                //         slidesPerView: 3,
                //         spaceBetween: 1,
                //     },
                //     1128: {
                //         slidesPerView: 4,
                //         spaceBetween: 1,
                //     }

                // }}
            >
                {list.map((v, i) => {
                    return (
                        <SwiperSlide
                            key={`photo-swiper${i}`}
                            className='top10-container'
                        >
                            <Top10Poster src={v} idx={i}/>

                        </SwiperSlide>)
                })}

            </Swiper>
            {/* </div> */}
            <div className="prev">
                <i className="fa-solid fa-angle-right prev-arrow" onClick={() => { swiper.slidePrev() }} />
            </div>
            <div className="next">
                <i className="fa-solid fa-angle-right" onClick={() => { swiper.slideNext() }} />
            </div>
        </>
    );
}
export default Slider;