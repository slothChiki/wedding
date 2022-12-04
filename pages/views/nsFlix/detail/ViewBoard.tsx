import { NextPage } from 'next';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { DetailType, ModalType } from '../../../../src/enums/wedding.enum';
import { RootState } from '../../../../modules/reducer/rootReducer';
import ImageOnly from './ImageOnly';
import DetailContents from './DetailContents';
import BoardView from './board/BoardView';
import { BoardListApi } from 'src/domain/board/api/board-list.api';
import InputComment from './board/InputComment';
import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react';
import { load } from 'modules/load';

interface Props { }
const ViewBoard: NextPage<Props> = ({ }) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.board);

    const boardList: BoardListApi[] = state.boardList;

    useEffect(()=>{
        dispatch(
            load({
                apiPath: 'board/getBoard',
                method: 'POST',
                param: {},
            }),
        );
    },[])

    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            <BoardView boardList={boardList} />
            <InputComment />

        </>
    );
};
export default ViewBoard;
