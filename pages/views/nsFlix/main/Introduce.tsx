import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
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
import { weddingCard } from '../../../../src/domain/nsflix/variable/photo-list';

interface Props {
    list: Array<PosterDto | ActorDto | PhotoDto>;
    title: string;
}

const Introduce: NextPage<Props> = ({ list = [], title = '' }) => {
    const [movePx, setMovePx] = useState(0);

    // 창 길이 만큼 움직이기 - 화살표 /////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const screen = window.innerWidth;
        setMovePx((movePx) => screen);
        let mediaImgae: imageMedia;
        if (isDesktopOrLaptop) {
            mediaImgae = imageMedia.PC;
        } else if (isTablet) {
            mediaImgae = imageMedia.TAB;
        } else {
            mediaImgae = imageMedia.MOBILE;
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

    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    // 창 길이 만큼 움직이기 - 터치 /////////////////////////////////////////////////////////////////////////////////
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

    // 디테일 창 열기 ///////////////////////////////////////////////////////////////////////////////////////////
    const dispatch = useDispatch();

    const detailDataChoice = (
        v: PhotoDto | PosterDto | ActorDto,
        detailType: DetailType,
    ) => {
        switch (detailType) {
            case DetailType.IMG:
                dispatch(weddingReducer.detailImgChoice(v['src']));
                break;
            case DetailType.CONTENTS:
                dispatch(
                    weddingReducer.detailContentsChoice({ ...v } as PosterDto),
                );
                break;
            case DetailType.ACTOR:
            default:
                dispatch(
                    weddingReducer.detailActorChoice({ ...v } as ActorDto),
                );
        }
        window.history.pushState({ data: 'main' }, '', '/');
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
                className="poster-container intro"
                onTouchStart={touchStart}
                onTouchEnd={touchEnd}
            >
                <Photo
                    key={`${title}_1`}
                    data={weddingCard}
                    sliderType={SliderType.CONTENTS}
                    slide={slidePx}
                    clickMethod={() => {
                        detailDataChoice(weddingCard, DetailType.CONTENTS);
                    }}
                />
                {list.map((v, i) => {
                    return (
                        <Photo
                            key={`${title}_${i + 1}`}
                            data={v}
                            sliderType={SliderType.ACTOR}
                            slide={slidePx}
                            clickMethod={() => {
                                detailDataChoice(v, DetailType.ACTOR);
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
export default Introduce;
