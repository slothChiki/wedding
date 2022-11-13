import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
    aaa: string;
}
const Account: NextPage<any> = () => {
    return (
        <>
            <a href="kakaotalk://kakaopay/money/to/qr?qr_code=FGvNZV8Af" target="_blank" className="link_append" id="forceRedirect">
                <span className="txt_link">카카오페이 앱오픈</span>
            </a>
            <a href="https://qr.kakaopay.com/FOydv8tBC" target="_blank" className="link_append" id="forceRedirect">
                <span className="txt_link">카카오페이 바로가기</span>
            </a>
        </>);
};
export default Account;