import { NextPage } from 'next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { ActorDto } from '../../../../dist/domain/nsflix/dto/nsflixs.dto';
import SocialShare from './SocialShare';
import Timer from '../main/Timer';
import moment from 'moment';
import { TimerType } from '../../../../src/enums/wedding.enum';
import Congratulatory from './common/Congratulatory';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    A11y,
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

interface Props {}
const ViewActor: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.wedding);
    const actor: ActorDto = state.detailActor;
    const [swiper, setSwiper] = useState(null);
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
    return (
        <>
            <div className="contents">
                <div className={`top-image`}>
                    <Swiper
                        onSwiper={setSwiper}
                        className="swiper slide-tab"
                        observer={true}
                        observeParents={true}
                        loop={true}
                        pagination={{ clickable: true }}
                        onTap={(e) => {
                            swiper.slideTo(e.clickedIndex);
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        scrollbar={{
                            el: 'swiper sect-desc swiper-scrollbar',
                            draggable: true,
                        }}
                        slidesPerView={1}
                    >
                        {actor.photoList.map((v, i) => (
                            <SwiperSlide key={`swiper_${i}`}>
                                <img src={v} />
                            </SwiperSlide>
                        ))}
                        <div className="detail-description">
                            <div className="detail-name on">
                                {actor.name == '박나연' ? '신부' : '신랑'}{' '}
                                {actor.name}
                            </div>
                            <SocialShare shadow={'on'} />
                        </div>
                    </Swiper>
                </div>
                <div className="middle-introduce">
                    <div className="center">
                        <p>
                            <span>
                                {`>>`} 결혼 날짜가
                                <Timer
                                    startDate={'2017-04-17'}
                                    endDate={moment(new Date())
                                        .format('YYYY-MM-DD')
                                        .toString()}
                                    type={TimerType.FLOW}
                                />{' '}
                                밖에 남지 았았습니다. 소감이 어떠신가요?
                            </span>
                            <br />
                            {actor.comment1}
                        </p>
                        <p>
                            <span>
                                {' '}
                                {`>>`} 와주신 하객분들께 한마디 하신다면??
                            </span>
                            <br />
                            {actor.comment2}
                        </p>
                    </div>
                </div>
                <div className={`congratulatory-box`}>
                    <Congratulatory key={`money_groom`} actor={actor} />
                </div>
            </div>
        </>
    );
};
export default ViewActor;
