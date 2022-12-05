import { NextPage } from 'next';
import { useDispatch } from 'react-redux';

interface Props {}

const Error500: NextPage<Props> = ({}) => {
    // TODO - props 로 줘야 할까?
    const dispatch = useDispatch();
    const goBack = () => {
        location.href = '/';
    };

    return (
        <>
            <div className="ImAngry">
                <p>500... 서버가 이상하든 여튼 서버 장애에요.. 돌아가주세요!</p>
            </div>
            <button
                className="goBack"
                onClick={goBack}
                style={{ backgroundColor: 'red' }}
            >
                돌아가기
            </button>
        </>
    );
};
export default Error500;
