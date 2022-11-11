import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Board: NextPage<any> = () => {
    return (
        <>
            <div className="card-board">Board</div>
        </>
    );
};
export default Board;
