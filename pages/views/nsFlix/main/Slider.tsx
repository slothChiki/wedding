import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import Poster from './Poster';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import { imageMedia } from '../../../../src/enums/wedding.enum';
import { useMediaQuery } from 'react-responsive';

interface Props {
    title: string;
    list: PosterDto[];
}
const Slider: NextPage<Props> = ({ title = '', list = [] }) => {
    const [movePx, setMovePx] = useState(0);

    useEffect(() => {
        const screen = window.innerWidth;
        console.log(screen);
        setMovePx((movePx) => screen);
        console.log(movePx);

        let mediaImgae: imageMedia;
        if (isDesktopOrLaptop) {
            mediaImgae = imageMedia.TAB;
        } else if (isTablet) {
            mediaImgae = imageMedia.MOBILE;
        } else {
            mediaImgae = imageMedia.PC;
        }

        findLimit(mediaImgae);
    }, [movePx]);

    const [slidePx, setSlidePx] = useState(0);
    const [limit, setLimit] = useState(movePx);

    const findLimit = (imgSize: imageMedia) => {
        const listLength = list.length;
        const compLegth = listLength * (imgSize + 10);

        const part = compLegth / movePx - 1;
        setLimit(-1 * part * movePx);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px) and (max-width: 1279px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1023px)',
    });
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });
    const isMobileDevice = useMediaQuery({ query: '(max-width: 480px)' });

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
