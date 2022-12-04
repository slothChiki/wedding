import { NextPage } from 'next';
import ViewContents from './ViewContents';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import ViewLocation from './ViewLocation';
import { ModalType } from 'src/enums/wedding.enum';
import ViewBoard from './ViewBoard';

interface Props { }
const PopupDetail: NextPage<Props> = ({ }) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const showModal = state.showModal;
    const modalType = state.modalType;
    const offModal = (e) => {
        dispatch(weddingReducer.modalChange({ showModal: false, modalType: ModalType.BOARD }));
    };
    const preventEvent = (e) => {
        e.stopPropagation();
    };


    return (
        <>
            <div
                className={`detail-modal ${showModal ? 'on' : ''}`}
                onClick={offModal}
            >
                <div className="detail" onClick={preventEvent}>
                    {modalType == ModalType.POSTER ?
                        <ViewContents />
                        : modalType == ModalType.LOCATION ?
                            <ViewLocation />
                        : <><ViewBoard /></>
                    }
                </div>
            </div>
        </>
    );
};
export default PopupDetail;
