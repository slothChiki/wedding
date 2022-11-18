import { NextPage } from 'next';
import React from 'react';
import InputComment from './board/InputComment';

interface Props {
    aaa: string;
}
const Board: NextPage<any> = () => {
    return (
        <>
            <div className="card-board">
                <InputComment />
            </div>
        </>
    );
};
export default Board;
