import { NextPage } from 'next';
import { useDispatch } from 'react-redux';

interface Props {}

const Error404: NextPage<Props> = ({}) => {
    // TODO - props 로 줘야 할까?
    const dispatch = useDispatch();
    const goBack = () => {
        location.href = '/';
    };

    return (
        <>
            <div className="ImAngry">
                <p>
                    404... 이상한 곳으로 가지 마시라구영... 화나서
                    안꾸몄잖아요..
                </p>
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
export default Error404;
