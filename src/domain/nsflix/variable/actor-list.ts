import { ActorDto } from '../dto/nsflixs.dto';

export const actorList: ActorDto[] = [
    new ActorDto({
        name: '박나연',
        src: '/images/introduce/wny01.jpg',
        thumbSrc: '/images/introduce/wny01.jpg',
        photoList: [
            '/images/introduce/wny01.jpg',
            '/images/introduce/wny02.jpg',
            '/images/introduce/wny03.jpg',
            '/images/introduce/nny01.jpg',
            '/images/introduce/nny02.jpg',
            '/images/introduce/nny03.jpg',
        ],
        bank: '국민은행',
        account: '723002-00-096535',
        kakaoQr: 'FOydv8tBC',
        toss: 'nayeonS2',
        comment1:
            '실감이 안나네요ㅎㅎㅎ 그래도 둘이 같이 살면서 서로 의지하고 보듬으면서 살 생각을 하니 든든하고, 저도 책임감이 확 드네요 ㅎㅎ 내 가족의 건강과 영화를 위하여!!',
        comment2:
            '결혼식 준비 많이 했습니다. 와서 보시고 즐거운 추억으로 남으셨으면 좋겠어요. 와주셔서 감사합니다. 물론 못오신 분들도 감사합니다! 잘 살께요><',
    }),
    new ActorDto({
        name: '안상민',
        src: '/images/introduce/wsm01.jpg',
        thumbSrc: '/images/introduce/wsm01.jpg',
        photoList: [
            '/images/introduce/wsm01.jpg',
            '/images/introduce/wsm02.jpg',
            '/images/introduce/nsm01.jpg',
            '/images/introduce/nsm02.jpg',
            '/images/introduce/nsm03.jpg',
        ],
        bank: '하나은행',
        account: '359-910311-78707',
        kakaoQr: 'FPU3I5s0z',
        toss: '안상민입니다',
        comment1:
            '이제 정말 서로의 삶에도 책임감을 가지면서 살아야 겠다는 생각?',
        comment2:
            '식장에선 큰 박수 상시 장착 해주세요!! 와주셔서 감사하고 사랑합니다~',
    }),
];
