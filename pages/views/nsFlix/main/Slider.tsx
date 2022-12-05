import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import Photo from './Photo';
import {
    ActorDto,
    PhotoDto,
    PosterDto,
} from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import {
    DetailType,
    imageMedia,
    SliderType,
} from '../../../../src/enums/wedding.enum';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import * as weddingReducer from '../../../../modules/reducer/wedding';

interface Props {
    list: Array<PosterDto | ActorDto | PhotoDto>;
    title: string;
    sliderType: SliderType;
}

const Slider: NextPage<Props> = ({
    list = [],
    title = '',
    sliderType = SliderType.IMG,
}) => {
    const [movePx, setMovePx] = useState(0);

    // 창 길이 만큼 움직이기 - 화살표 /////////////////////////////////////////////////////////////////////////////////
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
    // 창 길이 만큼 움직이기 - 터치 /////////////////////////////////////////////////////////////////////////////////
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

    // 디테일 창 열기 ///////////////////////////////////////////////////////////////////////////////////////////
    const dispatch = useDispatch();

    const detailDataChoice = (v: PhotoDto | PosterDto | ActorDto) => {
        let detailType = DetailType.IMG;
        switch (sliderType) {
            case SliderType.IMG:
                dispatch(weddingReducer.detailImgChoice(v['src']));
                detailType = DetailType.IMG;
                break;
            case SliderType.CONTENTS:
                dispatch(
                    weddingReducer.detailContentsChoice({ ...v } as PosterDto),
                );
                detailType = DetailType.CONTENTS;
                break;
            case SliderType.ACTOR:
            default:
                dispatch(
                    weddingReducer.detailActorChoice({ ...v } as ActorDto),
                );
                detailType = DetailType.ACTOR;
        }

        dispatch(
            weddingReducer.modalOn({
                showModal: true,
                detailType: detailType,
            }),
        );
    };

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
                        <Photo
                            key={`${title}_${i}`}
                            src={v['src']}
                            slide={slidePx}
                            clickMethod={() => {
                                detailDataChoice(v);
                            }}
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
