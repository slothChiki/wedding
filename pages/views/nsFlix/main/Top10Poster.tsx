import { NextPage } from 'next';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import { useDispatch } from 'react-redux';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { DetailType, ModalType } from '../../../../src/enums/wedding.enum';

interface Props {
    poster: PosterDto;
    idx: number;
    slide: number;
}

const Top10Poster: NextPage<Props> = ({
    poster = { typeof: DetailType.IMG, src: '', name: '' },
    idx = 0,
    slide = 0,
}) => {
    // TODO - props 로 줘야 할까?
    const dispatch = useDispatch();
    const detailDataChoice = () => {
        dispatch(weddingReducer.detailDataChoice({ ...poster } as PosterDto));
        dispatch(
            weddingReducer.modalChange({
                showModal: true,
                modalType: ModalType.POSTER,
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
                    <img className="image-container" src={poster.src} />
                </div>
                {/* </Link> */}
            </li>
        </>
    );
};
export default Top10Poster;
