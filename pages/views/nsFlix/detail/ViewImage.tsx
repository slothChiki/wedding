import { NextPage } from 'next';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';

interface Props {}
const ViewImage: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.wedding);
    const offModal = (e) => {
        e.stopPropagation();
        dispatch(weddingReducer.modalOff({}));
    };
    const preventEvent = (e) => {
        e.stopPropagation();
    };

    const image = state.detailImage;
    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            <div className="detail-image" onClick={offModal}>
                <img src={image} />
            </div>
        </>
    );
};
export default ViewImage;
