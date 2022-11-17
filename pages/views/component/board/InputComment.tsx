import rootReducer from 'modules/reducer/rootReducer';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구
import * as weddingReducer from 'modules/reducer/wedding';
import { useDispatch } from 'react-redux';

interface Props {
    aaa: string;
}
const InputComment: NextPage<any> = () => {
    const store = createStore(rootReducer, composeWithDevTools());
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const inputName = (e) => {
        setName(e.target.value);
    };

    const inputComment = (e) => {
        setComment(e.target.value);
    };
    // const dispatch = useDispatch();

    const submitComment = () => {
        // TODO : api 만들어야 함 notion 보내는
        console.log(store.getState()); // 스토어의 상태를 확인해봅시다.
        console.log(name + ' / ' + comment);
        store.dispatch(weddingReducer.initDetailInfo({ aaa: 'fhkfhkfhk' }));
    };

    return (
        <>
            <div className="input-board">
                <label htmlFor="input-name">작성자</label>
                <input
                    type="text"
                    className="input-name"
                    value={name}
                    onChange={(e) => {
                        inputName(e);
                    }}
                />
                <label htmlFor="input-comment">내용</label>
                <textarea
                    className="input-comment"
                    value={comment}
                    onChange={(e) => {
                        inputComment(e);
                    }}
                />
                <button className="input-btn" onClick={submitComment}>
                    등록
                </button>
            </div>
        </>
    );
};
export default InputComment;
