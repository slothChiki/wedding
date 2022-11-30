import { NextPage } from 'next';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { DetailType } from '../../../../src/enums/wedding.enum';
import { RootState } from '../../../../modules/reducer/rootReducer';
import ImageOnly from './ImageOnly';
import DetailContents from './DetailContents';

interface Props {}
const DetailBody: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.wedding);
    const offModal = (e) => {
        e.stopPropagation();
        dispatch(weddingReducer.modalChange(false));
    };
    const preventEvent = (e) => {
        e.stopPropagation();
    };

    const data: PosterDto = state.detailData;

    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            <div className="detail" onClick={preventEvent}>
                {/*{data.type === DetailType.IMG ? (*/}
                {/*    <ImageOnly src={data.src} />*/}
                {/*) : data.type === DetailType.CONTENTS ?(*/}
                <DetailContents data={data} />
                {/*):(
                <ActorIntroduce actor={actor}/>
                )}*/}
            </div>
        </>
    );
};
export default DetailBody;
