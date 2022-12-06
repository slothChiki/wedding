import { NextPage } from 'next';
import { ActorDto, PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { TimerType } from '../../../../src/enums/wedding.enum';
import SocialShare from './SocialShare';
import moment from 'moment';
import Timer from '../main/Timer';
import { DetailType } from '../../../../dist/enums/wedding.enum';
import { RootState } from '../../../../modules/reducer/rootReducer';
import Congratulatory from './common/Congratulatory';
import { actorList } from '../../../../src/domain/nsflix/variable/actor-list';

interface Props {}

const ViewContents: NextPage<Props> = () => {
    const dispatch = useDispatch();
    const offModal = (e) => {
        e.stopPropagation();
        dispatch(weddingReducer.modalOff({}));
    };

    const state = useSelector((state: RootState) => state.wedding);
    const poster: PosterDto = state.detailContents;
    const actors: ActorDto[] = actorList;

    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            <div className="contents" onClick={offModal}>
                <div
                    className="top-image"
                    style={{
                        backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(36, 36, 36, 0) 60%,
                            rgba(36, 36, 36, 0.25) 70%,
                            rgba(36, 36, 36, 0.5) 80%,
                            rgba(36, 36, 36, 0.75) 90%,
                            rgba(36, 36, 36, 1) 100%), url(${poster.thumbSrc})`,
                    }}
                >
                    <div className="detail-description">
                        <div className="detail-name">
                            {poster.name ? poster.name : '6년째 연애중'}
                        </div>
                        <SocialShare />
                    </div>
                </div>
                <div className="middle-introduce">
                    <div className="left">
                        <span> 100% 일치 </span> &nbsp; {poster.date} &nbsp;
                        에피소드{' '}
                        <Timer
                            startDate={'2017-04-17'}
                            endDate={moment(new Date())
                                .format('YYYY-MM-DD')
                                .toString()}
                            type={TimerType.FLOW}
                        />
                        개 &nbsp;
                        <i className="fa-sharp fa-solid fa-high-definition"></i>
                        <p>상민 : {poster.comment1}</p>
                        <p>나연 : {poster.comment2}</p>
                    </div>
                    <div className="right">
                        등장인물 : <a>박나연</a>, <a>안상민</a>
                    </div>
                </div>
                <Congratulatory key={`money_groom`} actor={actors[1]} />
                <Congratulatory key={`money_bride`} actor={actors[0]} />
            </div>
        </>
    );
};
export default ViewContents;
