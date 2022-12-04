import { NextPage } from 'next';
import React from 'react';

import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';

import { ModalType } from 'src/enums/wedding.enum';
import ViewContents from './ViewContents';
import ViewBoard from './ViewBoard';
import ViewLocation from './ViewLocation';
import ViewMoney from './ViewMoney';

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
                <div className="modal-close" onClick={offModal}></div>
                    {modalType == ModalType.POSTER ?
                        <ViewContents />
                        : modalType == ModalType.LOCATION ?
                            <ViewLocation />
                            : modalType == ModalType.BOARD ?
                                <><ViewBoard /></>
                                : <><ViewMoney /></>
                    }
                </div>
            </div>
        </>
    );
};
export default PopupDetail;
