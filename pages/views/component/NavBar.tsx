import { NextPage } from 'next';

interface Props {
    aaa: string;
}
const NavBar: NextPage<any> = () => {
    return (
        <>
            <div className="card-navbar"></div>
        </>
    );
};
export default NavBar;
