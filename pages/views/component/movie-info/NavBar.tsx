import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const NavBar: NextPage<any> = () => {
    const shareUrl = () => {
        navigator.share({
            title: document.title,
            text: 'Hello World',
            url: 'https://developer.mozilla.org',
        });
    };
    return (
        <>
            <div className="card-navbar">
                <button onClick={shareUrl}>Share</button>
            </div>
        </>
    );
};
export default NavBar;
