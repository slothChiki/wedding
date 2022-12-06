import { NextPage } from 'next';
import React from 'react';

import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';

import { DetailType } from 'src/enums/wedding.enum';
import ViewBoard from './ViewBoard';
import ViewLocation from './ViewLocation';
import ViewActor from './ViewActor';
import ViewImage from './ViewImage';
import ViewContents from './ViewContents';

interface Props {}
const PopupDetail: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const showModal = state.showModal;
    const detailType: DetailType = state.detailType;
    const offModal = (e) => {
        dispatch(weddingReducer.modalOff({}));
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
                    <div
                        className="modal-close"
                        onClick={offModal}
                        style={{ backgroundImage: '/img/iconsX100.png' }}
                    ></div>
                    {detailType == DetailType.IMG ? (
                        <ViewImage />
                    ) : detailType == DetailType.CONTENTS ? (
                        <ViewContents />
                    ) : detailType == DetailType.LOCATION ? (
                        <ViewLocation />
                    ) : detailType == DetailType.BOARD ? (
                        <>
                            <ViewBoard />
                        </>
                    ) : (
                        <>
                            <ViewActor />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};
export default PopupDetail;
