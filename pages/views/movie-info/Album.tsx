import { NextPage } from 'next';
import StillCut from './album/StillCut';
import PhotoSwiper from './album/PhotoSwiper';

interface Props {
    aaa: string;
}
const Album: NextPage<any> = () => {
    return (
        <>
            <div className="card-album">
                <PhotoSwiper />
                <StillCut />
            </div>
        </>
    );
};
export default Album;
