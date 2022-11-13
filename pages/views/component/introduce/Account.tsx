import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
    aaa: string;
}
const Account: NextPage<any> = () => {
    return (
        <>
            <div className="account">
                <div className="kakao">
                    {' '}
                    <a href="kakaotalk://kakaopay/money/to/qr?qr_code=FGvNZV8Af" target="_blank" className="link_append" id="forceRedirect">
                        <span className="txt_link">카카오페이 앱오픈</span>
                    </a>
                    <a href="https://qr.kakaopay.com/FOydv8tBC" target="_blank" className="link_append" id="forceRedirect">
                        <span className="txt_link">카카오페이 바로가기</span>
                    </a>
                </div>
                <div className="toss">
                    {' '}
                    <Link href={'#'}>toss send</Link>
                </div>
                <div className="copy">
                    {' '}
                    <Link href={'#'}>account copy</Link>
                </div>
            </div>

        </>);
};
export default Account;