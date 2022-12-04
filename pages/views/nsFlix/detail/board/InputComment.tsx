import rootReducer, { RootState } from 'modules/reducer/rootReducer';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import * as boardReducer from 'modules/reducer/board';
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../../../../modules/load';
import { BoardListApi } from '../../../../../src/domain/board/api/board-list.api';
import { ErrorCode } from 'src/core/exception/errorCode';

interface Props {
    aaa: string;
}
const InputComment: NextPage<any> = () => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [contents, setContents] = useState('');
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.board);

    const inputName = (e) => {
        setName(e.target.value);
    };

    const inputTel = (e) => {
        setTel(e.target.value);
    };

    const inputComment = (e) => {
        setContents(e.target.value);
    };
    const resetInput = () => {
        setName('');
        setTel('');
        setContents('');
    }
    const submitComment = () => {
        const boardData = new BoardListApi({
            name: name,
            tel: tel,
            contents: contents,
        });
        dispatch(
            load({
                apiPath: 'board/putBoard',
                method: 'POST',
                param: boardData,
            }),
        );
    };

    useEffect(() => {
        const inputState = state.apiResult.putBoardResult;
        if (inputState == ErrorCode.SUCCESS) {
            dispatch(
                load({
                    apiPath: 'board/getBoard',
                    method: 'POST',
                    param: {},
                }),
            );
            resetInput();
            dispatch(boardReducer.resetCode({}));
        }
    }, [state.apiResult.putBoardResult])

    return (
        <>
            <div className="input-board">
                <label htmlFor="input-name">작성자</label>
                <input
                    type="text"
                    className="input-name"
                    value={name}
                    onChange={inputName}
                />
                <label htmlFor="input-name">연락처</label>
                <input
                    type="text"
                    className="input-name"
                    value={tel}
                    onChange={inputTel}
                />
                <br />

                <label htmlFor="input-comment">내용</label>
                <textarea
                    className="input-comment"
                    value={contents}
                    onChange={inputComment}
                />
                <button className="input-btn" onClick={submitComment}>
                    등록
                </button>
            </div>
        </>
    );
};
export default InputComment;
