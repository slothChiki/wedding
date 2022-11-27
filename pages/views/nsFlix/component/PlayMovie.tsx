import { NextPage } from 'next';

interface Props {

}
const PlayMovie: NextPage<Props> = ({ }) => {
    return (
        <>
            <main>
                <div className="video">
                    <video src="video/doctor.mp4" autoPlay muted loop />
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
                            <span> 상세 정보</span>
                        </button>
                    </div>
                </div>
                {/* <div className="age-info">
                    <i className="fa-solid fa-rotate-right" />
                    <div className="age">15+</div>
                </div> */}
            </main>
        </>
    );
}
export default PlayMovie;