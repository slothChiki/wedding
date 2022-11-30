import { NextPage } from 'next';
import styled from 'styled-components';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';
import { useDispatch } from 'react-redux';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { detailDataChoice } from '../../../../modules/reducer/wedding';
import { DetailType } from '../../../../src/enums/wedding.enum';

interface Props {
    poster: PosterDto;
    slide: number;
}

const Poster: NextPage<Props> = ({
    poster = { typeof: DetailType.IMG, src: '', name: '' },
    slide = 0,
}) => {
    // TODO - props 로 줘야 할까?
    const dispatch = useDispatch();
    const detailDataChoice = () => {
        dispatch(weddingReducer.detailDataChoice({ ...poster } as PosterDto));
        dispatch(weddingReducer.modalChange(true));
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
                <img className="image-container" src={poster.src} />
                {/* </Link> */}
            </li>
        </>
    );
};
export default Poster;
