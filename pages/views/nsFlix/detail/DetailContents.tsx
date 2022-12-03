import { NextPage } from 'next';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';

interface Props {}
const DetailContents: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const showModal = state.showModal;
    const offModal = (e) => {
        dispatch(weddingReducer.modalChange(false));
    };

    return (
        <>
            <div
                className={`detail-modal ${showModal ? 'on' : ''}`}
                onClick={offModal}
            >
                <i>와 망함</i>
                <i></i>
            </div>
        </>
    );
};
export default DetailContents;
