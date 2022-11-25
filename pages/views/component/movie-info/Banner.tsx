import { NextPage } from 'next';
import Timer from './banner/Timer';
import Share from './banner/Share';

interface Props {
    aaa: string;
}
const Banner: NextPage<any> = () => {
    return (
        <>
            <div className="card-banner">
                <Timer />
                <img src={'/images/home-img.jpg'} />
                <Share />
            </div>
        </>
    );
};
export default Banner;
