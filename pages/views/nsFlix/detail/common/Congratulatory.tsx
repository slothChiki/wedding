import { ActorDto } from '../../../../../src/domain/nsflix/dto/nsflixs.dto';

``;
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import clipBoard from '../../../../../src/common/clip-board/clip-board';

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

    const [onCopy, onCopySet] = useState(0);

    const onCopyClipBoard = async () => {
        if (onCopy !== 1 && navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(
                    actor.bank + ' ' + actor.account,
                );
            } catch (err) {}
        }

        if (onCopy !== 1 && !navigator.clipboard) {
            const textArea = document.createElement('textarea');
            textArea.value = actor.bank + ' ' + actor.account;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            textArea.style.top = '-999999px';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
        }
        onCopySet(1);

        clipBoard();

        setTimeout(function () {
            onCopySet(0);
        }, 3000);
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
                        <div className="send-btn" onClick={onCopyClipBoard}>
                            계좌번호 복사
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Congratulatory;
