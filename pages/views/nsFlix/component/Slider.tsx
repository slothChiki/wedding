import { NextPage } from 'next';
import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import Poster from './Poster';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { useState } from 'react';

interface Props {
    movePx: number;
    title: string;
    list: string[];
}
const Slider: NextPage<Props> = ({ title = '', list = [], movePx = 1128 }) => {
    const [slidePx, setSlidePx] = useState(0);
    const [limit, setLimit] = useState(movePx);

    useEffect(() => {
        console.log(`movePx--> ${movePx}`);

        setLimit(-1*movePx * list.length);
        console.log(`limit----> ${limit}`);
        console.log(`${title} slidePx--> ${slidePx}`);
    }, [slidePx]);

    const slidePrev = () => {
        slidePx < 0 && setSlidePx(slidePx + movePx);
    }
    const slideNext = () => {
        slidePx > limit && setSlidePx(slidePx - movePx);
    }

    const [curPos, serCurPos] = useState(0);

    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const contentsWidth = 300; // TODO - 미디어에 맞게 바꿔야 함

    // 뒤로가기, 앞으로 가기 함수 : 터치 이벤트가 발생(touchEnd())하면 호출 됨
    function prev() {
        if (curPos > 0) {
            setSlidePx(slidePx + contentsWidth);
            serCurPos(curPos - 1);
        }
    }

    function next() {
        if (curPos < 2) {
            setSlidePx(slidePx + contentsWidth);
            serCurPos(curPos + 1);
        }
    }

    function touchStart(e) {
        e.stopPropagation()
        console.log(`touchStart --- ${e.changedTouches[0].pageX}`);
        setStartX(e.changedTouches[0].pageX);
    }

    function touchEnd(e) {
        console.log(`touchEnd --- ${e.changedTouches[0].pageX}`);

        setEndX(e.changedTouches[0].pageX);
        console.log(`startX- ${startX} / endX ${endX}`);

        if (startX > endX) {
            next();
        } else {
            prev();
        }
    }

    return (
        <>
            <h1>{title}</h1>
            <ul className='poster-container' onTouchStart={touchStart} onTouchEnd={touchEnd}>
                {list.map((v, i) => {
                    return (
                        <Poster key={`${title}_${i}`} src={v} slide={slidePx} />
                    )
                })}
            </ul>

            {slidePx <= 0 ? null :
                <div className={`prev`} onClick={() => { slidePrev() }}
                >
                    <i className={`fa-solid fa-angle-right prev-arrow`} />
                </div>
            }
            {slidePx <= limit ? null :
                <div className={`next`} onClick={() => { slideNext() }}
                >
                    <i className={`fa-solid fa-angle-right`} />
                </div>
            }
        </>
    );
}
export default Slider;
