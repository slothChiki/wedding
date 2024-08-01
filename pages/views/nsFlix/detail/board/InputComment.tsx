import { RootState } from 'modules/reducer/rootReducer';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
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

    const [valName, setValName] = useState(false);
    const [valTel, setValTel] = useState(false);
    const [valContents, setValContents] = useState(false);

    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.board);

    const inputName = (e) => {
        setName(e.target.value);
        if (e.target.value.length >= 1) {
            setValName(true);
        } else {
            setValName(false);
        }
    };

    const inputTel = (e) => {
        setTel(e.target.value);
        const regPhone =
            /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$|^[0-9]+$/;
        if (regPhone.test(e.target.value) === true) {
            setValTel(true);
        } else {
            setValTel(false);
        }
    };

    const inputContents = (e) => {
        setContents(e.target.value);
        if (e.target.value.length >= 5) {
            setValContents(true);
        } else {
            setValContents(false);
        }
    };

    const resetInput = () => {
        setName('');
        setTel('');
        setContents('');
    };

    const [submitBtn, setBtn] = useState(false);
    const [errorMsg, setMsg] = useState('');
    const changBtn = (tf: boolean) => {
        setBtn(tf);
    };
    const changMsg = (msg: string) => {
        setMsg(msg);
    };
    useEffect(() => {
        if (!changMsg && !tel && !contents) {
            changMsg('');
        }
        if (valName && valTel && valContents) {
            changBtn(true);
        } else {
            changBtn(false);
        }
    }, [inputName, inputTel, inputContents]);

    const submitComment = () => {
        if (!changBtn) {
            changMsg('모두 입력해 주세요');
        }

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
    }, [state.apiResult.putBoardResult]);

    return (
        <>
            <div className="input-board">
                <p>
                    연락처는 신랑신부의 인물 대조용으로만 사용됩니다. 노출되거나
                    하지 않아요. <br />
                    써주시면 너무 감사하겠습니다.
                </p>

                <div className="inputs">
                    <div className="input-box">
                        <label htmlFor="input-name">작성자 </label>
                        <input
                            type="text"
                            className="input-name"
                            value={name}
                            onChange={inputName}
                            placeholder="작성자"
                        />
                        <label htmlFor="input-name">연락처 </label>
                        <input
                            type="text"
                            className="input-name"
                            value={tel}
                            onChange={inputTel}
                            placeholder="연락처"
                        />
                        <button
                            className={`input-btn ${submitBtn ? '' : 'off'}`}
                            disabled={!submitBtn}
                            onClick={submitComment}
                        >
                            등록
                        </button>
                        <span>{errorMsg}</span>
                    </div>

                    <div className="input-box">
                        <label htmlFor="input-comment">내용 </label>
                        <textarea
                            className="input-comment"
                            value={contents}
                            onChange={inputContents}
                            placeholder="내용을 써주세요."
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default InputComment;
