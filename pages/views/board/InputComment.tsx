import rootReducer from 'modules/reducer/rootReducer';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import * as weddingReducer from 'modules/reducer/wedding';
import { useDispatch } from 'react-redux';
import { load } from '../../../modules/load';
import { BoardListApi } from '../../../src/domain/board/api/board-list.api';

interface Props {
    aaa: string;
}
const InputComment: NextPage<any> = () => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [contents, setContents] = useState('');
    const dispatch = useDispatch();

    const inputName = (e) => {
        setName(e.target.value);
    };

    const inputTel = (e) => {
        setTel(e.target.value);
    };

    const inputComment = (e) => {
        setContents(e.target.value);
    };
    // const dispatch = useDispatch();

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
