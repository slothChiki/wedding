import { NextPage } from 'next';
import ViewContents from './ViewContents';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import ViewLocation from './ViewLocation';
import { ActorType, ModalType } from 'src/enums/wedding.enum';
import ViewBoard from './ViewBoard';
import {
    actorList
} from '../../../../src/domain/nsflix/variable/actor-list';
import { Actor } from 'src/domain/nsflix/dto/nsflixs.dto';

interface Props { }
const ViewMoney: NextPage<Props> = ({ }) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const sendingActor: ActorType = state.sendingActor;
    const actors: Actor[] = actorList;
    const actor: Actor = sendingActor == ActorType.NY ? actors[0] : actors[1];

    const handleClickKakaoPay = () => {
        window.open(`https://qr.kakaopay.com/${actor.kakaoQr}`, '_blank');
    };

    return (
        <>

            <div className="money" >
                <div className="actor-face">
                    <img src={actor.imgSrc} />
                </div>
                <div className='send-choice'>
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
export default ViewMoney;
