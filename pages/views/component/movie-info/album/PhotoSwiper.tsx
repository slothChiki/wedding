import { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Props {
    aaa: string;
}
const PhotoSwiper: NextPage<any> = () => {
    return (
        <>
            <div className="swiper">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    scrollbar={{ draggable: true }}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                        768: {
                            slidesPerView: 7,
                        },
                    }}
                >
                    <SwiperSlide>aaa</SwiperSlide>
                    <SwiperSlide>bbb</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};
export default PhotoSwiper;
