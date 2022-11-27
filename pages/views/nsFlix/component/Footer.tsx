import { NextPage } from 'next';

interface Props {

}
const Footer: NextPage<Props> = ({ }) => {

    return (<>
        <footer>
            <div className="wrap">
                <div className="social-icons">
                    <i className="fa-brands fa-facebook-square" />
                    <i className="fa-brands fa-instagram" />
                    <i className="fa-brands fa-twitter" />
                    <i className="fa-brands fa-youtube" />
                </div>
                <div className="options">
                    <div className="option">자막 및 음성</div>
                    <div className="option">음성 지원</div>
                    <div className="option">고객 센터</div>
                    <div className="option">기프트카드</div>
                    <div className="option">미디어 센터</div>
                    <div className="option">투자 정보(IR)</div>
                    <div className="option">입사 정보</div>
                    <div className="option">이용 약관</div>
                    <div className="option">개인 정보</div>
                    <div className="option">법적 고지</div>
                    <div className="option">쿠키 설정</div>
                    <div className="option">회사 정보</div>
                    <div className="option">문의하기</div>
                </div>
            </div>
        </footer>
    </>);
}
export default Footer;