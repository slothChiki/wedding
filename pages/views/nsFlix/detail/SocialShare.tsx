import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { Sns } from '../../../../src/enums/wedding.enum';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { useEffect, useState } from 'react';
import clipBoard from '../../../../src/common/clip-board/clip-board';

interface Props {
    shadow: string;
}
const SocialShare: NextPage<Props> = ({ shadow = '' }) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.wedding);
    const [currentUrl, setcurrentUrl] = useState(null);
    const [onCopy, onCopySet] = useState(0);

    useEffect(() => {
        setcurrentUrl(window.location.href);
    }, []);

    const onCopyClipBoard = async () => {
        if (onCopy !== 1 && navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(
                    currentUrl ? currentUrl : '',
                );
            } catch (err) {}
        }

        if (onCopy !== 1 && !navigator.clipboard) {
            const textArea = document.createElement('textarea');
            textArea.value = currentUrl ? currentUrl : '';
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

    const onSosialShare = (sns: Sns) => {
        // e.preventDefault();

        if (sns === Sns.TWITTER)
            window.open(
                `https://twitter.com/intent/tweet?url=${currentUrl}`,
                '_blank',
            );

        if (sns === Sns.FACEBOOK)
            window.open(
                `https://www.facebook.com/sharer.php?u=${currentUrl}`,
                '_blank',
            );

        if (sns === Sns.INSTARGRAM)
            window.open(
                `https://www.facebook.com/sharer.php?u=${currentUrl}`,
                '_blank',
            );
        // setTimeout(function (    ) {
        //     onCopySet(0)
        // }, 3000)
    };
    return (
        <>
            <div className={`share ${shadow}`}>
                <i
                    className="fa-brands fa-facebook-square"
                    onClick={() => {
                        onSosialShare(Sns.FACEBOOK);
                    }}
                />
                {/*<i*/}
                {/*    className="fa-brands fa-instagram"*/}
                {/*    onClick={() => {*/}
                {/*        onSosialShare(Sns.INSTARGRAM);*/}
                {/*    }}*/}
                {/*/>*/}
                <i
                    className="fa-brands fa-twitter"
                    onClick={() => {
                        onSosialShare(Sns.TWITTER);
                    }}
                />
                <i
                    className="fa-sharp fa-solid fa-copy"
                    onClick={onCopyClipBoard}
                />
                {/*<img*/}
                {/*    src="/images/icon/kakao.png"*/}
                {/*    style={{*/}
                {/*        width: '1.5rem',*/}
                {/*        height: '1.5rem',*/}
                {/*        marginLeft: '0.5rem',*/}
                {/*    }}*/}
                {/*/>*/}
            </div>
        </>
    );
};
export default SocialShare;
