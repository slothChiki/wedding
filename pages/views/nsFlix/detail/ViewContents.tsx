import { NextPage } from 'next';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { DetailType, ModalType } from '../../../../src/enums/wedding.enum';
import { RootState } from '../../../../modules/reducer/rootReducer';
import ImageOnly from './ImageOnly';
import DetailContents from './DetailContents';

interface Props { }
const ViewContents: NextPage<Props> = ({ }) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.wedding);
    const offModal = (e) => {
        e.stopPropagation();
        dispatch(weddingReducer.modalChange({ showModal: false, modalType: ModalType.POSTER }));
    };

    const data: PosterDto = state.detailData;

    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            {data.type === DetailType.IMG ? (
                <ImageOnly src={data.src} />
            ) : data.type === DetailType.CONTENTS ? (
                <DetailContents poster={data} />
            ) : (
                <></>
                // <ActorIntroduce actor={actor}/>
            )}

        </>
    );
};
export default ViewContents;
