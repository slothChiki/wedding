import { NextPage } from 'next';
import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import Poster from './Poster';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { useState } from 'react';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import {
    imageMedia,
    moveMedia,
    top10Media,
} from '../../../../src/enums/wedding.enum';

interface Props {
    movePx: moveMedia;
    title: string;
    list: PosterDto[];
}
const Slider: NextPage<Props> = ({
    title = '',
    list = [],
    movePx = moveMedia.PC,
}) => {
    const [slidePx, setSlidePx] = useState(0);
    const [limit, setLimit] = useState(movePx);

    const findLimit = (imgSize: top10Media) => {
        const listLength = list.length;
        const compLegth = listLength * (imgSize + 20);

        const part = compLegth / movePx;
        console.log(`part -> ${part}`);
        setLimit(part * movePx * -1);
        console.log(`slider -> ${limit}`);
    };

    useEffect(() => {
        let mediaImgae: top10Media;
        switch (movePx) {
            case moveMedia.TAB:
                mediaImgae = top10Media.TAB;
            case moveMedia.MOBILE:
                mediaImgae = top10Media.MOBILE;
            case moveMedia.PC:
            default:
                mediaImgae = top10Media.PC;
        }
        findLimit(mediaImgae);
    }, []);

    const slidePrev = () => {
        slidePx < 0 && setSlidePx(slidePx + movePx);
    };
    const slideNext = () => {
        slidePx > limit && setSlidePx(slidePx - movePx);
    };

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
        e.stopPropagation();
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
            <ul
                className="poster-container"
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
            >
                {list.map((v, i) => {
                    return (
                        <Poster
                            key={`${title}_${i}`}
                            poster={v}
                            slide={slidePx}
                        />
                    );
                })}
            </ul>

            {slidePx === 0 ? null : (
                <div
                    className={`prev`}
                    onClick={() => {
                        slidePrev();
                    }}
                >
                    <i className={`fa-solid fa-angle-right prev-arrow`} />
                </div>
            )}
            {slidePx <= limit ? null : (
                <div
                    className={`next`}
                    onClick={() => {
                        slideNext();
                    }}
                >
                    <i className={`fa-solid fa-angle-right`} />
                </div>
            )}
        </>
    );
};
export default Slider;
