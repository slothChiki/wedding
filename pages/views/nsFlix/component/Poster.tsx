import { NextPage } from 'next';
import styled from 'styled-components';

interface Props {
    src: string;
    slide: number;
}

const Poster: NextPage<Props> = ({ src = '', slide = 0 }) => {

    return (<>
        <li  style={{
                transform: `translateX(${slide}px)`,
                transition: "0.5s ease",
              }}>
            {/* <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}> */}
            <img className='image-container' src={src} 
            />
            {/* </Link> */}
        </li>
    </>);
}
export default Poster;