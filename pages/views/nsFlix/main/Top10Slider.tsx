import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Top10Poster from './Top10Poster';
import { top10Media } from '../../../../src/enums/wedding.enum';
import { useMediaQuery } from 'react-responsive';

interface Props {
    title: string;
    list: any;
}
const Top10Slider: NextPage<Props> = ({ title = '', list }) => {
    const [movePx, setMovePx] = useState(0);

    // 창 길이 만큼 움직이기 - 화살표 /////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const screen = window.innerWidth;
        setMovePx((movePx) => screen);
        let mediaImgae: top10Media;
        if (isDesktopOrLaptop) {
            mediaImgae = top10Media.PC;
        } else if (isTablet) {
            mediaImgae = top10Media.TAB;
        } else {
            mediaImgae = top10Media.MOBILE;
        }

        findLimit(mediaImgae);
    }, [movePx]);

    const [slidePx, setSlidePx] = useState(0);
    const [limit, setLimit] = useState(movePx);

    const findLimit = (imgSize: top10Media) => {
        const listLength = list.length;
        const compLegth = listLength * (imgSize + 10);

        const part = compLegth / movePx - 1;
        setLimit(-1 * part * movePx);
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 480px) and (max-width: 1023px)',
    });
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });
    const isMobileDevice = useMediaQuery({ query: '(max-width: 480px)' });

    const slidePrev = () => {
        slidePx < 0 && setSlidePx(slidePx + movePx);
    };
    const slideNext = () => {
        slidePx > limit && setSlidePx(slidePx - movePx);
    };

    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const contentsWidth = 300; // TODO - 미디어에 맞게 바꿔야 함

    // 뒤로가기, 앞으로 가기 함수 : 터치 이벤트가 발생(touchEnd())하면 호출 됨
    function touchStart(e) {
        e.stopPropagation();
        setStartX(e.changedTouches[0].pageX);
    }

    function touchEnd(e) {
        setEndX(e.changedTouches[0].pageX);

        if (startX > endX) {
            slideNext();
        } else {
            slidePrev();
        }
    }
    return (
        <>
            {list ? (
                list.length > 0 ? (
                    <>
                        <h1>{title}</h1>
                        <ul
                            className="top10-container"
                            onTouchStart={touchStart}
                            onTouchEnd={touchEnd}
                        >
                            {list.map((v, i) => (
                                <Top10Poster
                                    key={`top10-${i}`}
                                    data={v.data}
                                    detailType={v.detailType}
                                    slide={slidePx}
                                    idx={i}
                                />
                            ))}
                        </ul>

                        {slidePx === 0 ? null : (
                            <div
                                className={`prev`}
                                onClick={() => {
                                    slidePrev();
                                }}
                            >
                                <i
                                    className={`fa-solid fa-angle-right prev-arrow`}
                                />
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
                ) : null
            ) : null}
        </>
    );
};
export default Top10Slider;
