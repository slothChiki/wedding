import { NextPage } from 'next';
import Timer from './banner/Timer';

interface Props {
    aaa: string;
}
const Banner: NextPage<any> = () => {
    return (
        <>
            <div className="card-banner">
                <Timer />
                <img src={'/images/home-img.jpg'} />
            </div>
        </>
    );
};
export default Banner;
