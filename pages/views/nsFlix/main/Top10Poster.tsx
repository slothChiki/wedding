import { NextPage } from 'next';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import { useDispatch } from 'react-redux';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { DetailType } from '../../../../src/enums/wedding.enum';
import {
    ActorDto,
    PhotoDto,
} from '../../../../dist/domain/nsflix/dto/nsflixs.dto';

interface Props {
    data: PosterDto | ActorDto | PhotoDto;
    idx: number;
    slide: number;
    detailType: DetailType;
}

const Top10Poster: NextPage<Props> = ({
    data = { src: '', name: '' },
    idx = 0,
    slide = 0,
    detailType = DetailType.IMG,
}) => {
    // TODO - props 로 줘야 할까?
    const dispatch = useDispatch();

    const detailDataChoice = () => {
        switch (detailType) {
            case DetailType.IMG:
                dispatch(weddingReducer.detailImgChoice(data.src));
                break;
            case DetailType.CONTENTS:
                dispatch(
                    weddingReducer.detailContentsChoice({
                        ...data,
                    } as PosterDto),
                );
                break;
            case DetailType.ACTOR:
            default:
                dispatch(
                    weddingReducer.detailActorChoice({ ...data } as ActorDto),
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
            <li
                style={{
                    transform: `translateX(${slide}px)`,
                    transition: '0.5s ease',
                }}
                onClick={detailDataChoice}
            >
                {/* <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}> */}
                <div className="rank-poster">
                    <div className="rank">{idx + 1}</div>
                    <div className="image-container">
                        <img src={data.thumbSrc} />
                        {detailType !== DetailType.IMG ? (
                            data['name'] ? (
                                <div className={`small-name`}>
                                    {data['name']}
                                </div>
                            ) : (
                                ''
                            )
                        ) : null}
                    </div>
                </div>
            </li>
        </>
    );
};
export default Top10Poster;
