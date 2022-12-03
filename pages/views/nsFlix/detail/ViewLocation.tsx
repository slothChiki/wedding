import { NextPage } from 'next';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import { DetailType, ModalType } from 'src/enums/wedding.enum';

interface Props {
}
const ViewLocation: NextPage<Props> = ({ }) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const showModal = state.showModal;
    const offModal = (e) => {
        dispatch(weddingReducer.modalChange({ showModal: false, modalType:ModalType.LOCATION  }));
    }

    return (
        <>
            durls wleh
        </>
    );

};
export default ViewLocation;
