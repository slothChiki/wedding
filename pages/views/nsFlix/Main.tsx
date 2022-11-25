import { MainManu } from '../../../src/enums/wedding.enum';
import { NextPage } from 'next';
import Nav from './component/Nav';

interface Props {
    headerMenu: MainManu;
}
const Main: NextPage<Props> = ({}) => {
    return (
        <>
            {' '}
            <div>
                <Nav />
                <main>
                    <div className="video">
                        <video src="./video/doctor.mp4" autoPlay muted loop />
                    </div>
                    <div className="description">
                        <h1>Doctor Sans</h1>
                        <h3>매주 새로운 트레일러 공개</h3>
                        <p>
                            5월, 차원의 경계가 무너지고 닥터 스트레인지가 온다
                            전 세계를 뒤흔들 역대급 멀티버스 전쟁의 시작! [닥터
                            스트레인지: 대혼돈의 멀티버스] 티저 예고편 공개!
                        </p>
                        <div className="buttons">
                            <button className="play">
                                <i className="fa-solid fa-play" />
                                <span>재생</span>
                            </button>
                            <button className="detail">
                                <i className="fa-solid fa-circle-info" />
                                상세 정보
                            </button>
                        </div>
                    </div>
                    <div className="age-info">
                        <i className="fa-solid fa-rotate-right" />
                        <div className="age">15+</div>
                    </div>
                </main>
                <section>
                    <div className="content-list">
                        <h1>한국이 만든 콘텐츠</h1>
                        <div className="slider"></div>
                        <div className="prev">
                            <i className="fa-solid fa-angle-right prev-arrow" />
                        </div>
                        <div className="next">
                            <i className="fa-solid fa-angle-right" />
                        </div>
                    </div>
                    <div className="content-list">
                        <h1>지금 뜨는 콘텐츠</h1>
                        <div className="slider"></div>
                        <div className="prev">
                            <i className="fa-solid fa-angle-right prev-arrow" />
                        </div>
                        <div className="next">
                            <i className="fa-solid fa-angle-right" />
                        </div>
                    </div>
                    <div className="content-list">
                        <h1>오늘 한국의 TOP 10 콘텐츠</h1>
                        <div className="slider"></div>
                        <div className="prev">
                            <i className="fa-solid fa-angle-right prev-arrow" />
                        </div>
                        <div className="next">
                            <i className="fa-solid fa-angle-right" />
                        </div>
                    </div>
                </section>
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
            </div>
        </>
    );
};
export default Main;
