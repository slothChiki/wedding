import { NextPage } from 'next';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch } from 'react-redux';
import { TimerType } from '../../../../src/enums/wedding.enum';
import { DetailType } from '../../../../dist/enums/wedding.enum';
import SocialShare from './SocialShare';
import moment from 'moment';
import Timer from '../main/Timer';

interface Props {
    poster: PosterDto;
}

const DetailContents: NextPage<Props> = ({
    poster = { src: '', name: '', type: DetailType.CONTENTS },
}) => {
    const dispatch = useDispatch();
    const offModal = (e) => {
        e.stopPropagation();
        dispatch(weddingReducer.modalChange(false));
    };
    const preventEvent = (e) => {
        e.stopPropagation();
    };

    // const [detailMenu, setDetailMenu] = useState(DetailMenu.)
    return (
        <>
            <div className="detail-contents" onClick={offModal}>
                <div
                    className="top-image"
                    style={{
                        backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(36, 36, 36, 0) 60%,
                            rgba(36, 36, 36, 0.25) 70%,
                            rgba(36, 36, 36, 0.5) 80%,
                            rgba(36, 36, 36, 0.75) 90%,
                            rgba(36, 36, 36, 1) 100%), url(${poster.src})`,
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
                        <span> 100% 일치 </span> &nbsp; 2023. 1. 7 &nbsp;
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
                        <p>
                            2017년 4월 19일에 시작한 우리의 만남이 어느덧
                            <Timer
                                startDate={'2017-04-17'}
                                endDate={moment(new Date())
                                    .format('YYYY-MM-DD')
                                    .toString()}
                                type={TimerType.FLOW}
                            />
                            일이 지나고 있습니다.
                            <br />
                            행복하게 살겠습니다.
                        </p>
                    </div>
                    <div className="right">bbb</div>
                </div>
            </div>
        </>
    );
};
export default DetailContents;
