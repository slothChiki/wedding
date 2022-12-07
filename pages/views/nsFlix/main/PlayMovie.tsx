import { NextPage } from 'next';
import Timer from './Timer';
import moment from 'moment';
import { DetailType, TimerType } from '../../../../src/enums/wedding.enum';
import { useDispatch } from 'react-redux';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { weddingCard } from '../../../../src/domain/nsflix/variable/photo-list';

interface Props {}
const PlayMovie: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const detailDataChoice = (detailType: DetailType) => {
        window.history.pushState({ data: 'main' }, '', '/');
        if (detailType == DetailType.CONTENTS) {
            dispatch(weddingReducer.detailContentsChoice(weddingCard));
        }
        dispatch(
            weddingReducer.modalOn({ showModal: true, detailType: detailType }),
        );
    };
    return (
        <>
            <main>
                <div className="video">
                    <video src="video/doctor.mp4" autoPlay muted loop />
                </div>
                <div className="description">
                    <h1>
                        유부까지{' '}
                        <Timer
                            startDate={moment(new Date())
                                .format('YYYY-MM-DD')
                                .toString()}
                            endDate={'2023-01-07'}
                            type={TimerType.DDAY}
                        />
                        일
                    </h1>
                    <h3>매일 새로운 마음으로 갱신</h3>
                    <p>
                        2023년 1월, 차원이 다른 결혼식이 온다. <br />
                        전세계를 뒤흔들 역대급 결혼식의 시작!
                        <br />
                        [유부까지{' '}
                        <Timer
                            startDate={moment(new Date())
                                .format('YYYY-MM-DD')
                                .toString()}
                            endDate={'2023-01-07'}
                            type={TimerType.DDAY}
                        />
                        일] <br /> 2023. 1. 7 14:00 대 공개
                    </p>
                    <div className="buttons">
                        <button
                            className="play"
                            onClick={() => {
                                detailDataChoice(DetailType.CONTENTS);
                            }}
                        >
                            <i className="fa-solid fa-play" />
                            <span>청첩장</span>
                        </button>
                        <button
                            className="detail"
                            onClick={() => {
                                detailDataChoice(DetailType.LOCATION);
                            }}
                        >
                            <i className="fa-solid fa-car" />
                            <span> 오시는 길</span>
                        </button>
                        <button
                            className="detail"
                            onClick={() => {
                                detailDataChoice(DetailType.BOARD);
                            }}
                        >
                            <i className="fa-solid fa-circle-info" />
                            <span> 방명록 </span>
                        </button>
                    </div>
                </div>
                {/* <div className="age-info">
                    <i className="fa-solid fa-rotate-right" />
                    <div className="age">15+</div>
                </div> */}
            </main>
        </>
    );
};
export default PlayMovie;
