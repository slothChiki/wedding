import { NextPage } from 'next';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { PosterDto } from 'dist/domain/nsflix/dto/nsflixs.dto';
import { ModalType } from 'src/enums/wedding.enum';

interface Props { poster: PosterDto }
const DetailContents: NextPage<Props> = ({ poster = { name: '', src: '', type: '' } }) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const showModal = state.showModal;
    const offModal = (e) => {
        dispatch(weddingReducer.modalChange({ showModal: false, modalType:ModalType.POSTER }));
    };

    return (
        <>
            <div
                className={`detail-contents`}
                onClick={offModal}
            >
                <i>와 망함</i>
                <i></i>
            </div>
        </>
    );
};
export default DetailContents;
