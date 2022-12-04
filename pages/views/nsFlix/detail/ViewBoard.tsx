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
                <InputComment />
                <BoardView boardList={boardList} />
            </div>


        </>
    );
};
export default ViewBoard;
