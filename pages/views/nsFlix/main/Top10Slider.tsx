import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Navigation } from 'swiper';
import Top10Poster from './Top10Poster';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import { imageMedia, moveMedia, top10Media } from '../../../../src/enums/wedding.enum';
import { useMediaQuery } from 'react-responsive';

interface Props {
    title: string;
    list: PosterDto[];
}
const Top10Slider: NextPage<Props> = ({
    title = '',
    list = [],
}) => {
    const [movePx, setMovePx] = useState(0);

    useEffect(() => {
        console.log(JSON.stringify(window.innerWidth));
        console.log(movePx);
        setMovePx(window.innerWidth);
        console.log(movePx);

    }, []);

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

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px) and (max-width: 1279px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 768px)',
    });
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });
    const isMobileDevice = useMediaQuery({ query: '(max-width: 480px)' });

    useEffect(() => {
        let mediaImgae: top10Media;
        if (isDesktopOrLaptop) {
            mediaImgae = top10Media.TAB;
        } else if (isTablet) { 
            mediaImgae = top10Media.MOBILE; }
        else {
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
            {/* <div className="slider"> */}
            <ul
                className="top10-container"
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
            >
                {list.map((v, i) => {
                    return (
                        <Top10Poster
                            key={`top10-${i}`}
                            poster={v}
                            slide={slidePx}
                            idx={i}
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
export default Top10Slider;
