import { NextPage } from 'next';

interface Props {
    src: string;
    slide: number;
    clickMethod: any;
}

const Photo: NextPage<Props> = ({ src = '', slide = 0, clickMethod }) => {
    // TODO - props 로 줘야 할까?

    return (
        <>
            <li
                style={{
                    transform: `translateX(${slide}px)`,
                    transition: '0.5s ease',
                }}
                onClick={clickMethod}
            >
                <img className="image-container" src={src} />
            </li>
        </>
    );
};
export default Photo;
