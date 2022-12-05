import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { ActorDto } from '../../../../dist/domain/nsflix/dto/nsflixs.dto';

interface Props {}
const ViewActor: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const actor: ActorDto = state.detailActor;

    const handleClickKakaoPay = () => {
        window.open(`https://qr.kakaopay.com/${actor.kakaoQr}`, '_blank');
    };

    return (
        <>
            <div className="actor">
                <div className="actor-face">
                    <img src={actor.src} />
                </div>
                <div className="send-choice">
                    <div className="kakao">
                        {' '}
                        {/*<a href="kakaotalk://kakaopay/money/to/qr?qr_code=FGvNZV8Af" target="_blank" className="link_append" id="forceRedirect">*/}
                        {/*    <span className="txt_link">카카오페이 앱오픈</span>*/}
                        {/*</a>*/}
                        <a
                            onClick={handleClickKakaoPay}
                            className="link_append"
                            id="forceRedirect"
                        >
                            <span className="txt_link">카카오페이 send</span>
                        </a>
                    </div>
                    <div className="toss">
                        {' '}
                        <a href={'#'}>toss send</a>
                    </div>
                    <div className="copy">
                        {' '}
                        <a href={'#'}>account copy</a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ViewActor;
