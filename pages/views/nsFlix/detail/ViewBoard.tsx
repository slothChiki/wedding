import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import BoardView from './board/BoardView';
import { BoardListApi } from 'src/domain/board/api/board-list.api';
import InputComment from './board/InputComment';
import { load } from 'modules/load';
import { useEffect } from 'react';

interface Props { }
const ViewBoard: NextPage<Props> = ({ }) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.board);

    const boardList: BoardListApi[] = state.boardList;

    useEffect(() => {
        dispatch(
            load({
                apiPath: 'board/getBoard',
                method: 'POST',
                param: {},
            }),
        );
    }, [])

    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            <div className="board" >
                <h2>방명록</h2>
                <br/>
                <p>신랑신부에게 해주고 싶은 말씀을 써주세요.</p>
                <p>욕설, 비방, 혐오감을 주는 언행은 삼가주세요.^^</p>
                <br/>
                <InputComment />
                <BoardView boardList={boardList} />
            </div>


        </>
    );
};
export default ViewBoard;
