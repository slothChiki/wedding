import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const Timer: NextPage<any> = () => {
    return (
        <>
            <div className="banner-timer">
                <p>유부까지 앞으로</p>
                <div className="timer">00 Days 00:00:00</div>
                <p>남았습니다.</p>
            </div>
        </>
    );
};
export default Timer;
