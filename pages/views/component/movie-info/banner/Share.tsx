import React, { useState, useEffect } from 'react';
import clipBoard from '../../../../../src/common/clip-board/clip-board';
interface Props {
    owner?: boolean;
    uid?: number;
}

const Share = ({ owner = false, uid = null }: Props) => {
    const [currentUrl, setcurrentUrl] = useState(null);
    const [onCopy, onCopySet] = useState(0);

    useEffect(() => {
        if (owner) setcurrentUrl(window.location.href + `/${uid}`);
        else setcurrentUrl(window.location.href);
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

    const onSosialShare = (e) => {
        e.preventDefault();

        if (e.target.value === 'twitter')
            window.open(
                `https://twitter.com/intent/tweet?url=${currentUrl}`,
                '_blank',
            );

        if (e.target.value === 'facebook')
            window.open(
                `https://www.facebook.com/sharer.php?u=${currentUrl}`,
                '_blank',
            );

        // setTimeout(function () {
        //     onCopySet(0)
        // }, 3000)
    };

    return (
        <>
            <ul className="list-share">
                <li>
                    <button
                        type="button"
                        className="btn-copy"
                        onClick={onCopyClipBoard}
                    >
                        url 복사
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="btn-twitter"
                        value="twitter"
                        onClick={(e) => onSosialShare(e)}
                    >
                        Twitter
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        className="btn-fb"
                        value="facebook"
                        onClick={(e) => onSosialShare(e)}
                    >
                        Facebook
                    </button>
                </li>
            </ul>

            <button
                type="button"
                className="btn-close"
                onClick={() => onCopySet(0)}
            />
        </>
    );
};

export default Share;
