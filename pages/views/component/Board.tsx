import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Board: NextPage<any> = () => {
    return (
        <>
            <div className="card-board"></div>
        </>
    );
};
export default Board;
