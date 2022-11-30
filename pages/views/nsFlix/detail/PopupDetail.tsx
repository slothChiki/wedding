import { NextPage } from 'next';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import DetailBody from './DetailBody';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';

interface Props {}
const PopupDetail: NextPage<Props> = ({}) => {
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
                <i></i>
                <DetailBody />
                <i></i>
            </div>
        </>
    );
};
export default PopupDetail;
