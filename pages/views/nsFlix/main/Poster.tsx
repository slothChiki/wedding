import { NextPage } from 'next';
import styled from 'styled-components';
import { PosterDto } from '../../../../src/domain/nsflix/dto/nsflixs.dto';

interface Props {
    poster: PosterDto;
    slide: number;
}

const Poster: NextPage<Props> = ({
    poster = { src: '', name: '' },
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
                <img className="image-container" src={poster.src} />
                {/* </Link> */}
            </li>
        </>
    );
};
export default Poster;
