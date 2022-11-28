import { NextPage } from 'next';
import styled from 'styled-components';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';

interface Props {
    poster: PosterDto;
    idx: number;
    slide: number;
}

const Top10Poster: NextPage<Props> = ({
    poster = { src: '', name: '' },
    idx = 0,
    slide = 0,
}) => {
    return (
        <>
            <li
                style={{
                    transform: `translateX(${slide}px)`,
                    transition: '0.5s ease',
                }}
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
