import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Location: NextPage<any> = () => {
    return (
        <>
            <div className="card-location">Location</div>
        </>
    );
};
export default Location;
