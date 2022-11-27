import { NextPage } from 'next';
import styled from 'styled-components';

interface Props {
    src: string;
    idx: number;
}

const Top10Poster: NextPage<Props> = ({ src = '', idx = 0 }) => {

    return (<>
        <div>
            {/* <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}> */}
            <div className="link">
            
               {idx + 1}
            
            </div>
            <img className='image-container' src={src} />
            {/* </Link> */}
        </div>
    </>);
}
export default Top10Poster;