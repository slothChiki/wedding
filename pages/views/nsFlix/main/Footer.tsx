import { NextPage } from 'next';

interface Props {}
const Footer: NextPage<Props> = ({}) => {
    return (
        <>
            <footer>
                <div className="wrap">
                    <div className="social-icons">
                        <i className="fa-brands fa-facebook-square" />
                        <i className="fa-brands fa-instagram" />
                        <i className="fa-brands fa-twitter" />
                        <i className="fa-brands fa-youtube" />
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
