import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import BoardList from './board/BoardList';
import { BoardListApi } from 'src/domain/board/api/board-list.api';
import InputComment from './board/InputComment';
import { load } from 'modules/load';
import { useEffect } from 'react';

interface Props {}
const RequestCard: NextPage<Props> = ({}) => {

    return (
        <>
            <div className="board">
                <h2>지면 청첩장 요청</h2>
                <br />
                <p>지류 청첩장을 원하시는 분들은 여기서 신청해 주세요.</p>
                <p>정확한 주소를 입력하시고 연락처도 반드시 기재해 주세요.</p>
                <br />
                <InputComment />
                <BoardList />
            </div>
        </>
    );
};
export default RequestCard;
