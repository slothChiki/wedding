import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const PopupImage: NextPage<any> = () => {
    return (
        <>
            <div className="card-popup-image">PopupImage</div>
        </>
    );
};
export default PopupImage;
