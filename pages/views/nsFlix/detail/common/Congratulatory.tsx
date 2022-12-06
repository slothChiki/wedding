import { ActorDto } from '../../../../../src/domain/nsflix/dto/nsflixs.dto';

``;
import { NextPage } from 'next';

interface Props {
    actor: ActorDto;
}

const Congratulatory: NextPage<Props> = ({
    actor = {
        name: '',
        src: '',
        bank: '',
        kakaoQr: '',
        account: '',
        toss: '',
        comment1: '',
        comment2: '',
    },
}) => {
    const handleClickKakaoPay = () => {
        window.open(`https://qr.kakaopay.com/${actor.kakaoQr}`, '_blank');
    };

    return (
        <>
            <div className={`congratulatory`}>
                <p>
                    {actor.name == '박나연' ? '신부' : '신랑'}에게 마음 전하기
                </p>
                <ul className="send-choice">
                    <li>
                        <div
                            className="send-btn"
                            onClick={handleClickKakaoPay}
                            id="forceRedirect"
                        >
                            카카오페이 송금
                        </div>
                    </li>
                    <li>
                        <div className="send-btn">toss 송금</div>
                    </li>
                    <li>
                        <div className="send-btn">계좌번호 복사</div>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Congratulatory;
