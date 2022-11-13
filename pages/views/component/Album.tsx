import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Album: NextPage<any> = () => {
    return (
        <>
            <div className="card-album">Album</div>
        </>
    );
};
export default Album;
