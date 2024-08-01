import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import clipBoard from 'src/common/clip-board/clip-board';
import { Sns } from 'src/enums/wedding.enum';

interface Props {}
const Footer = ({}) => {
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
            <footer>
                <div className="wrap">
                    <div className="social-icons">
                        <i
                            className="fa-brands fa-facebook-square"
                            onClick={() => {
                                onSosialShare(Sns.FACEBOOK);
                            }}
                        />
                        {/*<i className="fa-brands fa-instagram"  onClick={()=>{onSosialShare(Sns.INSTARGRAM)}} />*/}
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
                        {/*<img src='/img/kakao.png' style={{width:'1.5rem', height:'1.5rem', marginLeft:'4px'}}/>*/}
                    </div>
                    <div className="options">
                        <div className="option">청첩장 신청</div>
                        <div className="option">쿠키 설정</div>
                        <div className="option">회사 정보</div>
                        <div className="option">문의하기</div>
                    </div>
                </div>
            </footer>
        </>
    );
};
export default Footer;
