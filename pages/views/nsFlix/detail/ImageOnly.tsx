import { NextPage } from 'next';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { DetailMenu, ModalType } from '../../../../src/enums/wedding.enum';

interface Props {
    src: string;
}
const ImageOnly: NextPage<Props> = ({ src = '' }) => {
    const dispatch = useDispatch();
    const offModal = (e) => {
        e.stopPropagation();
        dispatch(weddingReducer.modalChange({showModal:false, modalType:ModalType.POSTER }));
    };
    const preventEvent = (e) => {
        e.stopPropagation();
    };

    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            <div className="detail-image" onClick={offModal}>
                <img src={src} />
            </div>
        </>
    );
};
export default ImageOnly;
